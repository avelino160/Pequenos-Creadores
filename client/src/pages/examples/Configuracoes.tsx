import Configuracoes from '../Configuracoes';
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Router } from 'wouter';

export default function ConfiguracoesExample() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <Configuracoes />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}
