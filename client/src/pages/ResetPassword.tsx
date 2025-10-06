import { useState, useEffect } from 'react';
import { useLocation, useRoute } from 'wouter';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import logoImage from '@assets/ChatGPT_Image_2_de_out._de_2025__09_09_51-removebg-preview_1759389020390.png';

export default function ResetPassword() {
  const [, params] = useRoute('/reset-password');
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isValidating, setIsValidating] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get('token');

    if (!tokenParam) {
      setError('Token não fornecido');
      setIsValidating(false);
      return;
    }

    setToken(tokenParam);
    validateToken(tokenParam);
  }, []);

  const validateToken = async (tokenValue: string) => {
    try {
      const response = await fetch(`/api/auth/validate-reset-token/${tokenValue}`);
      const data = await response.json();

      if (response.ok && data.success) {
        setIsValid(true);
        setEmail(data.email);
      } else {
        setError(data.error || 'Token inválido ou expirado');
      }
    } catch (err) {
      setError('Erro ao validar token');
    } finally {
      setIsValidating(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast({
        title: 'Erro',
        description: 'As senhas não coincidem',
        variant: 'destructive',
      });
      return;
    }

    if (newPassword.length < 6) {
      toast({
        title: 'Erro',
        description: 'A senha deve ter pelo menos 6 caracteres',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: 'Sucesso!',
          description: 'Senha redefinida com sucesso',
        });
        
        setTimeout(() => {
          setLocation('/');
        }, 3000);
      } else {
        toast({
          title: 'Erro',
          description: data.error || 'Erro ao redefinir senha',
          variant: 'destructive',
        });
      }
    } catch (err) {
      toast({
        title: 'Erro',
        description: 'Erro ao conectar com o servidor',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isValidating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-baby-blue via-primary/30 to-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-lg p-8 border border-card-border text-center">
            <p className="text-muted-foreground">Validando token...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!isValid) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-baby-blue via-primary/30 to-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-lg p-8 border border-card-border text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <img src={logoImage} alt="Pequenos Criadores" className="w-32 h-32 object-contain" />
            </div>
            <h1 className="text-2xl font-bold text-card-foreground mb-4">
              Link Inválido
            </h1>
            <p className="text-muted-foreground mb-6">{error}</p>
            <Button
              onClick={() => setLocation('/')}
              className="w-full bg-sunshine-yellow hover:bg-sunshine-yellow/90 text-primary-foreground rounded-xl font-semibold"
              data-testid="button-back-to-login"
            >
              Voltar para o Login
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-baby-blue via-primary/30 to-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-lg p-8 border border-card-border text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-card-foreground mb-4">
              Senha Redefinida!
            </h1>
            <p className="text-muted-foreground mb-6">
              Sua senha foi alterada com sucesso. Você será redirecionado para a tela de login...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-baby-blue via-primary/30 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-lg p-8 border border-card-border">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center mb-4">
              <img src={logoImage} alt="Pequenos Criadores" className="w-32 h-32 object-contain" />
            </div>
            <h1 className="text-2xl font-bold text-card-foreground mb-2">
              Redefinir Senha
            </h1>
            <p className="text-muted-foreground text-sm">
              Digite sua nova senha para {email}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newPassword" className="text-sm font-medium">
                Nova Senha
              </Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="rounded-xl pr-10"
                  data-testid="input-new-password"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-toggle-new-password"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Mínimo de 6 caracteres
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirmar Nova Senha
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="rounded-xl pr-10"
                  data-testid="input-confirm-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-toggle-confirm-password"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-sunshine-yellow hover:bg-sunshine-yellow/90 text-primary-foreground rounded-xl font-semibold py-6"
              data-testid="button-reset-password"
            >
              {isSubmitting ? 'Redefinindo...' : 'Redefinir Senha'}
            </Button>

            <button
              type="button"
              onClick={() => setLocation('/')}
              className="text-xs text-primary hover:underline text-center w-full"
              data-testid="button-back"
            >
              Voltar para o login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
