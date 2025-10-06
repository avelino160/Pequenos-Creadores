import LoginScreen from '../LoginScreen';
import { AuthProvider } from '@/contexts/AuthContext';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';

export default function LoginScreenExample() {
  return (
    <TooltipProvider>
      <AuthProvider>
        <LoginScreen />
        <Toaster />
      </AuthProvider>
    </TooltipProvider>
  );
}
