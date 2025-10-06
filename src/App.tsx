import { Switch, Route, useRoute } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import LoginScreen from "@/components/LoginScreen";
import BottomNav from "@/components/BottomNav";
import Principal from "@/pages/Principal";
import ContinuarAprendendo from "@/pages/ContinuarAprendendo";
import MaisConteudos from "@/pages/MaisConteudos";
import Configuracoes from "@/pages/Configuracoes";
import FAQ from "@/pages/FAQ";
import AtividadeDetalhes from "@/pages/AtividadeDetalhes";
import MegaKitProjects from "@/pages/MegaKitProjects";
import ProjetoDetalhes from "@/pages/ProjetoDetalhes";
import InventosCientificos from "@/pages/InventosCientificos";
import OrigamiFamilia from "@/pages/OrigamiFamilia";
import ModelagemMassinha from "@/pages/ModelagemMassinha";
import BaloesMagicos from "@/pages/BaloesMagicos";
import Desafio30Dias from "@/pages/Desafio30Dias";
import ResetPassword from "@/pages/ResetPassword";
import NotFound from "@/pages/not-found";

function AppContent() {
  const { user } = useAuth();
  const [isResetPasswordRoute] = useRoute('/reset-password');

  if (isResetPasswordRoute) {
    return <ResetPassword />;
  }

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <div className="bg-background min-h-screen">
      <Switch>
        <Route path="/" component={Principal} />
        <Route path="/continuar" component={ContinuarAprendendo} />
        <Route path="/conteudos" component={MaisConteudos} />
        <Route path="/configuracoes" component={Configuracoes} />
        <Route path="/faq" component={FAQ} />
        <Route path="/atividade/:id" component={AtividadeDetalhes} />
        <Route path="/mega-kit" component={MegaKitProjects} />
        <Route path="/projeto/:id" component={ProjetoDetalhes} />
        <Route path="/inventos-cientificos" component={InventosCientificos} />
        <Route path="/origami-familia" component={OrigamiFamilia} />
        <Route path="/modelagem-massinha" component={ModelagemMassinha} />
        <Route path="/baloes-magicos" component={BaloesMagicos} />
        <Route path="/desafio-30-dias" component={Desafio30Dias} />
        <Route component={NotFound} />
      </Switch>
      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            <AppContent />
            <Toaster />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
