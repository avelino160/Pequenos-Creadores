import MaisConteudos from '../MaisConteudos';
import { AuthProvider } from '@/contexts/AuthContext';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';

export default function MaisConteudosExample() {
  return (
    <TooltipProvider>
      <AuthProvider>
        <MaisConteudos />
        <Toaster />
      </AuthProvider>
    </TooltipProvider>
  );
}
