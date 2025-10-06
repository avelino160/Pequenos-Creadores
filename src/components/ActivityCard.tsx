import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useLocation } from 'wouter';

interface ActivityCardProps {
  title: string;
  category: string;
  difficulty: string;
  time: string;
  imageUrl: string;
  imageBgColor?: string;
  imageAspectRatio?: number;
  isLocked: boolean;
  activityId: string;
  onUnlock?: () => void;
  onView?: () => void;
}

export default function ActivityCard({
  title,
  imageUrl,
  imageBgColor,
  imageAspectRatio = 1,
  isLocked,
  activityId,
  onUnlock,
  onView,
}: ActivityCardProps) {
  const [, setLocation] = useLocation();

  const handleClick = () => {
    if (!isLocked) {
      if (onView) {
        onView();
      }
      if (activityId === 'mega-kit-entrada') {
        setLocation('/mega-kit');
      } else if (activityId === 'inventos-cientificos') {
        setLocation('/inventos-cientificos');
      } else if (activityId === 'origami-familia') {
        setLocation('/origami-familia');
      } else {
        setLocation(`/atividade/${activityId}`);
      }
    }
  };

  const handleUnlockClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.setItem('openPackagesTab', 'true');
    setLocation('/configuracoes');
  };

  return (
    <Card className="overflow-hidden rounded-2xl border-card-border hover-elevate transition-transform duration-200 relative group cursor-pointer">
      {isLocked && (
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center backdrop-blur-sm">
          <Lock className="w-12 h-12 text-white mb-2" />
          <p className="text-white font-semibold mb-3">Bloqueado</p>
          <Button
            onClick={handleUnlockClick}
            className="bg-sunshine-yellow hover:bg-sunshine-yellow/90 text-primary-foreground rounded-xl font-semibold px-6"
            data-testid="button-unlock"
          >
            Comprar para desbloquear
          </Button>
        </div>
      )}
      
      <div 
        className="aspect-square overflow-hidden"
        style={{ backgroundColor: imageBgColor || 'hsl(var(--card))' }}
        onClick={handleClick}
        data-testid="button-view"
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
    </Card>
  );
}
