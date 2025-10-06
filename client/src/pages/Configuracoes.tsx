import { useState, useEffect } from 'react';
import { Moon, Sun, HelpCircle, LogOut, Settings as SettingsIcon, Mail, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PurchaseCard from '@/components/PurchaseCard';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useLocation } from 'wouter';
import { HOTMART_CHECKOUT_LINKS } from '@shared/checkout-links';

export default function Configuracoes() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout, setPurchaseLevel } = useAuth();
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState('conta');

  const isPremium = user?.purchaseLevel === 'premium';

  useEffect(() => {
    const shouldOpenPackages = localStorage.getItem('openPackagesTab');
    if (shouldOpenPackages === 'true') {
      setActiveTab('pacotes');
      localStorage.removeItem('openPackagesTab');
    }
  }, []);

  const handleLogout = () => {
    logout();
    setLocation('/');
  };

  const handlePurchaseEssential = () => {
    setPurchaseLevel('essential');
    toast({
      title: 'Compra realizada! 🎉',
      description: 'Pacote Essencial desbloqueado com sucesso.',
    });
  };

  const handlePurchasePremium = () => {
    setPurchaseLevel('premium');
    toast({
      title: 'Compra realizada! 🎉',
      description: 'Pacote Premium desbloqueado com sucesso.',
    });
  };

  const handlePurchaseBonus = () => {
    setPurchaseLevel('premium');
    toast({
      title: 'Upgrade realizado! 🎉',
      description: 'Bônus exclusivos desbloqueados! Agora você tem acesso Premium.',
    });
  };

  const essentialFeatures = [
    '100 atividades criativas',
    'Passo a passo detalhado de cada projeto',
    'Lista de materiais necessários',
    'Dicas de segurança e supervisão',
    'Acesso vitalício ao conteúdo'
  ];

  const bonusFeatures = [
    '5 Bônus Exclusivos Premium',
    'Meus Primeiros Inventos Científicos',
    'Origami em Família - Desafio 7 dias',
    'Guia de Modelagem com Massinha',
    'Balões Mágicos - Jogos e Desafios',
    'Desafio 30 Dias Sem Telas'
  ];

  const premiumFeatures = [
    'Tudo do Pacote Essencial',
    '+ 5 Bônus Exclusivos',
    'Meus Primeiros Inventos Científicos',
    'Origami em Família - Desafio 7 dias',
    'Guia de Modelagem com Massinha',
    'Balões Mágicos - Jogos e Desafios',
    'Desafio 30 Dias Sem Telas'
  ];

  return (
    <div className="pb-20 sm:pb-24 pt-4 sm:pt-6 px-3 sm:px-4 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        <div className="space-y-1 sm:space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <SettingsIcon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            Configurações
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Gerencie suas preferências e conta
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-auto">
            <TabsTrigger value="conta" data-testid="tab-conta" className="text-xs sm:text-sm">Conta</TabsTrigger>
            <TabsTrigger value="pacotes" data-testid="tab-pacotes" className="text-xs sm:text-sm">Pacotes</TabsTrigger>
            <TabsTrigger value="suporte" data-testid="tab-suporte" className="text-xs sm:text-sm">Suporte</TabsTrigger>
          </TabsList>

          <TabsContent value="conta" className="space-y-6 mt-6">
            <Card className="rounded-2xl p-6 space-y-1">
              <div className="text-sm text-muted-foreground">Conta</div>
              <div className="font-semibold text-foreground">{user?.email}</div>
              <div className="text-xs text-muted-foreground">
                {user?.purchaseLevel === 'premium'
                  ? '⭐ Premium'
                  : user?.purchaseLevel === 'essential'
                  ? '✓ Essencial'
                  : 'Nenhum pacote ativo'}
              </div>
            </Card>

            <div className="space-y-3">
              <div className="text-sm font-medium text-foreground mb-2">Aparência</div>
              <Card className="rounded-2xl p-4">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between hover-elevate p-2 rounded-xl transition-all"
                  data-testid="button-theme-toggle"
                >
                  <div className="flex items-center gap-3">
                    {theme === 'light' ? (
                      <Sun className="w-5 h-5 text-primary" />
                    ) : (
                      <Moon className="w-5 h-5 text-primary" />
                    )}
                    <div className="text-left">
                      <div className="font-medium text-foreground">
                        Tema {theme === 'light' ? 'Claro' : 'Escuro'}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Alterar aparência do app
                      </div>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-primary rounded-full relative">
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                        theme === 'dark' ? 'left-7' : 'left-1'
                      }`}
                    />
                  </div>
                </button>
              </Card>
            </div>

            <Button
              onClick={handleLogout}
              variant="destructive"
              className="w-full rounded-xl font-semibold py-6"
              data-testid="button-logout"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Sair da Conta
            </Button>
          </TabsContent>

          <TabsContent value="pacotes" className="space-y-6 mt-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                  Pacotes Disponíveis
                </h2>
                <p className="text-muted-foreground text-sm">
                  Escolha o pacote ideal para sua família
                </p>
              </div>

              {isPremium ? (
                <div className="bg-gradient-to-r from-baby-blue to-primary rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                    🌟 Você é Premium!
                  </h3>
                  <p className="text-primary-foreground/90 text-sm">
                    Aproveite todo o conteúdo exclusivo e todos os bônus disponíveis
                  </p>
                </div>
              ) : user?.purchaseLevel === 'essential' ? (
                <>
                  <div className="bg-gradient-to-r from-baby-blue to-primary rounded-2xl p-6 text-center">
                    <h3 className="text-xl font-bold text-primary-foreground mb-1">
                      ✓ Você é Essencial
                    </h3>
                    <p className="text-primary-foreground/90 text-sm">
                      Você tem acesso ao Pacote Essencial
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      Desbloqueie os Bônus Premium
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Adicione os 5 bônus exclusivos ao seu pacote
                    </p>
                  </div>

                  <PurchaseCard
                    title="Bônus Exclusivos"
                    description="Upgrade: Adicione os 5 bônus premium ao seu pacote"
                    features={bonusFeatures}
                    price="R$ 9,90"
                    isPremium={true}
                    checkoutUrl={HOTMART_CHECKOUT_LINKS.bonus}
                    onPurchase={handlePurchaseBonus}
                  />
                </>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <PurchaseCard
                    title="Pacote Essencial"
                    description="Mega Kit Pequenos Criadores com 100 atividades"
                    features={essentialFeatures}
                    price="R$ 17,90"
                    checkoutUrl={HOTMART_CHECKOUT_LINKS.essential}
                    onPurchase={handlePurchaseEssential}
                  />
                  <PurchaseCard
                    title="Pacote Premium"
                    description="Kit Completo + 5 Bônus Exclusivos"
                    features={premiumFeatures}
                    price="R$ 27,90"
                    isPremium={true}
                    checkoutUrl={HOTMART_CHECKOUT_LINKS.premium}
                    onPurchase={handlePurchasePremium}
                  />
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="suporte" className="space-y-6 mt-6">
            <div className="space-y-3">
              <div className="text-sm font-medium text-foreground mb-2">Central de Ajuda</div>
              <Card className="rounded-2xl divide-y divide-border">
                <button
                  className="w-full flex items-center gap-3 p-4 hover-elevate rounded-t-2xl transition-all"
                  data-testid="button-support"
                  onClick={() => setLocation('/faq')}
                >
                  <HelpCircle className="w-5 h-5 text-primary" />
                  <div className="flex-1 text-left">
                    <div className="font-medium text-foreground">Central de Ajuda</div>
                    <div className="text-xs text-muted-foreground">
                      Tire suas dúvidas
                    </div>
                  </div>
                </button>
                <a
                  href="mailto:eryonworks@gmail.com"
                  className="w-full flex items-center gap-3 p-4 hover-elevate rounded-b-2xl transition-all"
                  data-testid="button-contact"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <div className="flex-1 text-left">
                    <div className="font-medium text-foreground">Contato e Garantia</div>
                    <div className="text-xs text-muted-foreground">
                      eryonworks@gmail.com
                    </div>
                  </div>
                </a>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
