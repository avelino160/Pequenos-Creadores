import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLocation } from 'wouter';

interface BonusCardProps {
  title: string;
  category: string;
  difficulty: string;
  time: string;
  imageUrl: string;
  imageBgColor?: string;
  isLocked: boolean;
  bonusId: string;
  onUnlock?: () => void;
}

export default function BonusCard({
  title,
  imageUrl,
  imageBgColor,
  isLocked,
  bonusId,
  onUnlock,
}: BonusCardProps) {
  const [, setLocation] = useLocation();

  const handleClick = () => {
    if (!isLocked) {
      if (bonusId === 'inventos-cientificos') {
        setLocation('/inventos-cientificos');
      } else if (bonusId === 'origami-familia') {
        setLocation('/origami-familia');
      } else if (bonusId === 'modelagem-massinha') {
        setLocation('/modelagem-massinha');
      } else if (bonusId === 'baloes-magicos') {
        setLocation('/baloes-magicos');
      } else if (bonusId === 'desafio-30-dias') {
        setLocation('/desafio-30-dias');
      } else {
        setLocation(`/atividade/${bonusId}`);
      }
    }
  };

  const handleUnlockClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.setItem('openPackagesTab', 'true');
    setLocation('/configuracoes');
  };

  const shouldAddGlow = bonusId === 'desafio-30-dias' || bonusId === 'origami-familia';

  return (
    <Card 
      className="overflow-hidden rounded-2xl border-card-border hover-elevate transition-transform duration-200 relative group cursor-pointer"
      data-testid={`card-bonus-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {isLocked && (
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center backdrop-blur-sm">
          <Lock className="w-12 h-12 text-white mb-2" />
          <p className="text-white font-semibold mb-3">Bloqueado</p>
          <Button
            onClick={handleUnlockClick}
            className="bg-sunshine-yellow hover:bg-sunshine-yellow/90 text-primary-foreground rounded-xl font-semibold px-6"
            data-testid={`button-unlock-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            Comprar para desbloquear
          </Button>
        </div>
      )}
      
      <div 
        className="aspect-square overflow-hidden"
        style={{ backgroundColor: imageBgColor || 'hsl(var(--card))' }}
        onClick={handleClick}
        data-testid="button-view-bonus"
      >
        <img
          src={imageUrl}
          alt={title}
          className={`w-full h-full object-contain ${shouldAddGlow ? 'brightness-110 contrast-105' : ''}`}
        />
      </div>
    </Card>
  );
}
