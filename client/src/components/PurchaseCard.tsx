import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PurchaseCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  isPremium?: boolean;
  onPurchase?: () => void;
  checkoutUrl?: string;
}

export default function PurchaseCard({
  title,
  description,
  features,
  price,
  isPremium = false,
  onPurchase,
  checkoutUrl,
}: PurchaseCardProps) {
  const handleClick = () => {
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
    } else if (onPurchase) {
      onPurchase();
    }
  };
  return (
    <Card
      className={`rounded-2xl p-6 space-y-4 hover-elevate transition-all ${
        isPremium
          ? 'border-2 border-sunshine-yellow shadow-lg relative'
          : 'border-card-border'
      }`}
    >
      {isPremium && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sunshine-yellow text-primary-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
          <Star className="w-4 h-4 fill-current" />
          Recomendado
        </div>
      )}

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      <div className="space-y-2">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-primary flex-none mt-0.5" />
            <span className="text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-border">
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-foreground">{price}</span>
          <span className="text-sm text-muted-foreground">/único pagamento</span>
        </div>

        <Button
          onClick={handleClick}
          className={`w-full rounded-xl font-bold py-6 ${
            isPremium
              ? 'bg-sunshine-yellow hover:bg-sunshine-yellow/90 text-primary-foreground'
              : 'bg-primary hover:bg-primary/90 text-primary-foreground'
          }`}
          data-testid="button-purchase"
        >
          Comprar Agora
        </Button>
      </div>
    </Card>
  );
}
