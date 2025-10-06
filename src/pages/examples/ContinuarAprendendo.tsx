import ContinuarAprendendo from '../ContinuarAprendendo';
import { AuthProvider } from '@/contexts/AuthContext';
import { Router } from 'wouter';

export default function ContinuarAprendendoExample() {
  return (
    <Router>
      <AuthProvider>
        <ContinuarAprendendo />
      </AuthProvider>
    </Router>
  );
}
