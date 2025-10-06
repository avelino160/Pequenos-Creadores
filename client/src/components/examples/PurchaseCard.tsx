import PurchaseCard from '../PurchaseCard';

export default function PurchaseCardExample() {
  const essentialFeatures = [
    '100 atividades criativas para imprimir',
    'Passo a passo detalhado de cada projeto',
    'Lista de materiais necessários',
    'Dicas de segurança e supervisão',
    'Acesso vitalício ao conteúdo'
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
    <div className="p-4 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <PurchaseCard
          title="Pacote Essencial"
          description="Mega Kit Pequenos Criadores com 100 fichas de atividades"
          features={essentialFeatures}
          price="R$ 47"
          onPurchase={() => console.log('Purchase Essential')}
        />
        <PurchaseCard
          title="Pacote Premium"
          description="Kit Completo + 5 Bônus Exclusivos"
          features={premiumFeatures}
          price="R$ 67"
          isPremium={true}
          onPurchase={() => console.log('Purchase Premium')}
        />
      </div>
    </div>
  );
}
