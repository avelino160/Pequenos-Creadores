import express, { Router } from 'express';
import serverless from 'serverless-http';
import { getFirebaseAuth, getFirestore, initializeFirebase } from '../../server/firebase';
import { sendWelcomeEmail, sendPasswordResetEmail } from '../../server/sendgrid';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

// Inicializa Firebase
initializeFirebase();

const api = express();
const router = Router();

api.use(express.json());

// Login
router.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }

    const auth = getFirebaseAuth();
    const db = getFirestore();

    if (!auth || !db) {
      return res.status(500).json({ error: 'Serviço de autenticação não disponível' });
    }

    try {
      const user = await auth.getUserByEmail(email);
      const memberDoc = await db.collection('members').doc(user.uid).get();
      const memberData = memberDoc.data();

      if (!memberData || !memberData.active) {
        return res.status(403).json({ error: 'Conta inativa' });
      }

      if (!memberData.passwordHash) {
        return res.status(403).json({ 
          error: 'Conta requer reconfiguração. Entre em contato com o suporte.' 
        });
      }

      const passwordMatch = await bcrypt.compare(password, memberData.passwordHash);
      
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      res.json({ 
        success: true, 
        user: { 
          email: user.email,
          uid: user.uid,
          purchaseLevel: memberData.purchaseLevel || null
        } 
      });
    } catch (error) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro ao processar login' });
  }
});

// Forgot password
router.post('/auth/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email é obrigatório' });
    }

    const auth = getFirebaseAuth();
    const db = getFirestore();

    if (!auth || !db) {
      return res.status(500).json({ error: 'Serviço não disponível' });
    }

    try {
      const user = await auth.getUserByEmail(email);
      
      const resetToken = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 1);

      await db.collection('passwordResets').doc(resetToken).set({
        email: user.email,
        userId: user.uid,
        expiresAt: expiresAt.toISOString(),
        used: false,
        createdAt: new Date().toISOString()
      });

      await sendPasswordResetEmail(email, resetToken);

      res.json({ 
        success: true, 
        message: 'Email de recuperação enviado com sucesso! Verifique sua caixa de entrada.' 
      });
    } catch (error) {
      return res.status(404).json({ 
        error: 'Este email não está cadastrado em nossa base de dados.' 
      });
    }
  } catch (error) {
    console.error('Erro na recuperação de senha:', error);
    res.status(500).json({ error: 'Erro ao processar solicitação' });
  }
});

// Reset password
router.post('/auth/reset-password', async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    
    if (!token || !newPassword) {
      return res.status(400).json({ error: 'Token e nova senha são obrigatórios' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ error: 'A senha deve ter pelo menos 6 caracteres' });
    }

    const auth = getFirebaseAuth();
    const db = getFirestore();

    if (!auth || !db) {
      return res.status(500).json({ error: 'Serviço não disponível' });
    }

    const tokenDoc = await db.collection('passwordResets').doc(token).get();
    
    if (!tokenDoc.exists) {
      return res.status(400).json({ error: 'Token inválido' });
    }

    const tokenData = tokenDoc.data();
    
    if (!tokenData || tokenData.used) {
      return res.status(400).json({ error: 'Token já foi utilizado' });
    }

    const expiresAt = new Date(tokenData.expiresAt);
    if (expiresAt < new Date()) {
      return res.status(400).json({ error: 'Token expirado' });
    }

    await auth.updateUser(tokenData.userId, { password: newPassword });

    const passwordHash = await bcrypt.hash(newPassword, 10);
    await db.collection('members').doc(tokenData.userId).update({
      passwordHash,
      updatedAt: new Date().toISOString()
    });

    await db.collection('passwordResets').doc(token).update({
      used: true,
      usedAt: new Date().toISOString()
    });

    res.json({ 
      success: true, 
      message: 'Senha redefinida com sucesso!' 
    });
  } catch (error) {
    console.error('Erro ao redefinir senha:', error);
    res.status(500).json({ error: 'Erro ao redefinir senha' });
  }
});

// Webhook Hotmart
router.post('/webhook', async (req, res) => {
  try {
    const webhookSecret = process.env.HOTMART_WEBHOOK_SECRET;
    const authHeader = req.headers['x-hotmart-hottok'];
    
    if (webhookSecret && authHeader !== webhookSecret) {
      console.error('Token de webhook inválido');
      return res.status(401).json({ error: 'Não autorizado' });
    }

    const { email, product, productId } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email não fornecido' });
    }

    const auth = getFirebaseAuth();
    const db = getFirestore();

    if (!auth || !db) {
      console.error('Firebase não configurado');
      return res.status(500).json({ error: 'Serviço não configurado' });
    }

    let purchaseLevel: 'essential' | 'premium' = 'essential';
    let isBonusUpgrade = false;
    
    const productLower = (product || '').toLowerCase();
    const productIdStr = (productId || '').toString();
    const productNormalized = productLower.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/gi, '');
    
    if (productIdStr === '6372538' || productNormalized.includes('pacote de bonus premium') || productLower.includes('bonus') || productLower.includes('bônus')) {
      isBonusUpgrade = true;
      try {
        const existingUser = await auth.getUserByEmail(email);
        const memberDoc = await db.collection('members').doc(existingUser.uid).get();
        const memberData = memberDoc.data();
        
        if (memberData && memberData.purchaseLevel === 'essential') {
          purchaseLevel = 'premium';
        }
      } catch (error) {
        purchaseLevel = 'premium';
      }
    }
    else if (productIdStr === '6372466' || productLower.includes('mega kit pequenos criadores - premium') || (productLower.includes('premium') && !productLower.includes('bonus') && !productLower.includes('bônus'))) {
      purchaseLevel = 'premium';
    }
    else if (productIdStr === '6372383' || productLower.includes('mega kit pequenos criadores - essencial') || productLower.includes('essencial') || productLower.includes('essential')) {
      purchaseLevel = 'essential';
    }

    const password = crypto.randomBytes(16).toString('hex');
    const passwordHash = await bcrypt.hash(password, 10);

    let user;
    let isNewUser = false;
    try {
      user = await auth.getUserByEmail(email);
      
      if (!isBonusUpgrade) {
        await auth.updateUser(user.uid, { password });
      }
    } catch (error) {
      user = await auth.createUser({ 
        email,
        password,
        emailVerified: true
      });
      isNewUser = true;
    }

    await auth.setCustomUserClaims(user.uid, { 
      member: true,
      purchaseLevel
    });

    const updateData: any = {
      email,
      active: true,
      purchaseLevel,
      updatedAt: new Date().toISOString()
    };

    if (!isBonusUpgrade) {
      updateData.passwordHash = passwordHash;
    }

    if (isNewUser) {
      updateData.createdAt = new Date().toISOString();
    }

    await db.collection('members').doc(user.uid).set(updateData, { merge: true });

    if (!isBonusUpgrade) {
      await sendWelcomeEmail(email, password, purchaseLevel);
    }

    res.json({ 
      success: true, 
      message: isBonusUpgrade 
        ? `Bônus desbloqueado com sucesso! Nível atualizado para ${purchaseLevel}.`
        : `Conta ${isNewUser ? 'criada' : 'atualizada'} com nível ${purchaseLevel} e email enviado com sucesso!`
    });
  } catch (error) {
    console.error('Erro no webhook:', error);
    res.status(500).json({ 
      error: 'Erro ao processar webhook',
      details: error instanceof Error ? error.message : 'Erro desconhecido'
    });
  }
});

api.use('/api', router);

export const handler = serverless(api);
