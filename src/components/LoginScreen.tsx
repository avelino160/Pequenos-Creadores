import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import logoImage from '@assets/ChatGPT_Image_2_de_out._de_2025__09_09_51-removebg-preview_1759389020390.png';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [isSubmittingForgotPassword, setIsSubmittingForgotPassword] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);
    
    if (success) {
      toast({
        title: 'Bem-vindo!',
        description: 'Login realizado com sucesso.',
      });
    } else {
      toast({
        title: 'Erro no login',
        description: 'Email ou senha incorretos.',
        variant: 'destructive',
      });
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingForgotPassword(true);

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: forgotPasswordEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Email enviado!',
          description: data.message,
        });
        setShowForgotPassword(false);
        setForgotPasswordEmail('');
      } else {
        toast({
          title: 'Erro',
          description: data.error || 'Erro ao processar solicitação.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Erro ao conectar com o servidor.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmittingForgotPassword(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-baby-blue via-primary/30 to-background flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-lg p-6 sm:p-8 border border-card-border">
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
              <img src={logoImage} alt="Pequenos Criadores" className="w-24 h-24 sm:w-32 sm:h-32 object-contain" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-card-foreground mb-2">
              Pequenos Criadores
            </h1>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Entre para acessar suas atividades criativas
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl text-sm"
                data-testid="input-email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Senha
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-xl pr-10"
                  data-testid="input-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-toggle-password"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-sunshine-yellow hover:bg-sunshine-yellow/90 text-primary-foreground rounded-xl font-semibold py-6"
              data-testid="button-login"
            >
              Entrar
            </Button>

            <button
              type="button"
              onClick={() => setShowForgotPassword(true)}
              className="text-xs text-primary hover:underline text-left"
              data-testid="button-forgot-password"
            >
              Esqueci minha senha
            </button>
          </form>
        </div>
      </div>

      <Dialog open={showForgotPassword} onOpenChange={setShowForgotPassword}>
        <DialogContent className="sm:max-w-md" data-testid="dialog-forgot-password">
          <DialogHeader>
            <DialogTitle>Recuperar Senha</DialogTitle>
            <DialogDescription>
              Digite seu email e enviaremos instruções para redefinir sua senha.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleForgotPassword}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="forgot-email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="forgot-email"
                  type="email"
                  placeholder="seu@email.com"
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                  className="rounded-xl"
                  data-testid="input-forgot-email"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowForgotPassword(false)}
                disabled={isSubmittingForgotPassword}
                data-testid="button-cancel-forgot"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isSubmittingForgotPassword}
                data-testid="button-submit-forgot"
              >
                {isSubmittingForgotPassword ? 'Enviando...' : 'Enviar'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
