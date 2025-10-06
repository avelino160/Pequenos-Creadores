import Principal from '../Principal';
import { AuthProvider } from '@/contexts/AuthContext';
import { Router } from 'wouter';

export default function PrincipalExample() {
  return (
    <Router>
      <AuthProvider>
        <Principal />
      </AuthProvider>
    </Router>
  );
}
