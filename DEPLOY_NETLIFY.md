# 🚀 Deploy no Netlify - 100% GRÁTIS

## ✅ O que foi configurado:

1. **netlify.toml** - Configuração do Netlify
2. **netlify/functions/api.ts** - Todas as rotas da API convertidas para Netlify Functions
3. **serverless-http** - Instalado para suportar Express no Netlify

---

## 📋 Passo a Passo:

### 1. **Criar conta no Netlify**
   - Acesse: https://www.netlify.com
   - Clique em "Sign up" (pode usar GitHub)
   - É **100% GRÁTIS**

### 2. **Conectar ao GitHub**
   - Crie um repositório no GitHub
   - Faça push do seu código:
   ```bash
   git init
   git add .
   git commit -m "Deploy Netlify"
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```

### 3. **Importar projeto no Netlify**
   - No painel do Netlify, clique em "Add new site"
   - Escolha "Import an existing project"
   - Conecte com GitHub
   - Selecione seu repositório

### 4. **Configurar Build Settings**
   O Netlify vai detectar automaticamente as configurações do `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Functions directory:** `netlify/functions`

### 5. **Adicionar Variáveis de Ambiente**
   No painel do Netlify, vá em:
   - **Site settings** → **Environment variables** → **Add variable**
   
   Adicione TODAS estas variáveis:

   ```
   FIREBASE_SERVICE_ACCOUNT={"type":"service_account",...}
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   SENDGRID_FROM_EMAIL=noreply@seudomain.com
   HOTMART_WEBHOOK_SECRET=seu_token_secreto
   SITE_URL=https://seu-site.netlify.app
   ```

### 6. **Deploy!**
   - Clique em "Deploy site"
   - Aguarde o build (1-2 minutos)
   - Seu site estará no ar! 🎉

---

## 🌐 Depois do Deploy:

### Seu site estará em:
```
https://seu-site-nome.netlify.app
```

### Atualizar webhook do Hotmart:
Configure o webhook para apontar para:
```
https://seu-site-nome.netlify.app/api/webhook
```

### Domínio próprio (opcional):
- Vá em **Domain settings**
- Clique em "Add custom domain"
- Siga as instruções

---

## ⚡ Atualizações automáticas:

Toda vez que você fizer push no GitHub, o Netlify faz deploy automático!

```bash
git add .
git commit -m "atualização"
git push
```

---

## 🔧 Troubleshooting:

### Build falhou?
1. Verifique os logs no Netlify
2. Certifique-se que todas variáveis de ambiente estão configuradas
3. Verifique se o Node version está correto (20)

### API não funciona?
1. Verifique se as variáveis de ambiente estão corretas
2. Confira os logs das Functions no painel do Netlify
3. Teste as rotas: `https://seu-site.netlify.app/api/auth/login`

---

## 💰 Custos:

- ✅ **Tier gratuito:** 100GB bandwidth/mês
- ✅ **300 build minutes/mês** 
- ✅ **125,000 function invocations/mês**
- ✅ **SSL grátis**
- ✅ **Deploy automático**

**Seu app vai rodar 100% GRÁTIS!** 🎉
