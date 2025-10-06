import { useRef } from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BonusCard from '@/components/BonusCard';
import { bonusContent } from '@/data/activities';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';

export default function MaisConteudos() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const isPremium = user?.purchaseLevel === 'premium';
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleUnlock = () => {
    localStorage.setItem('openPackagesTab', 'true');
    setLocation('/configuracoes');
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="pb-20 sm:pb-24 pt-4 sm:pt-6 px-3 sm:px-4 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <div className="space-y-1 sm:space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            Mais Conteúdos
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Conteúdos exclusivos e bônus especiais
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-2 min-w-0">
              <h2 className="text-base sm:text-xl font-bold text-foreground">Bônus Exclusivos Premium</h2>
              {isPremium && (
                <span className="bg-sunshine-yellow text-primary-foreground px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold whitespace-nowrap w-fit">
                  Desbloqueado
                </span>
              )}
            </div>
            <div className="flex gap-1 sm:gap-2 flex-shrink-0">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => scroll('left')}
                className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
                data-testid="button-scroll-left"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => scroll('right')}
                className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
                data-testid="button-scroll-right"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            {isPremium 
              ? 'Todos os bônus estão disponíveis para você!' 
              : 'Disponível apenas no Pacote Premium. Acesse a aba Configurações > Pacotes para adquirir.'}
          </p>
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {bonusContent.map((bonus) => (
              <div key={bonus.id} className="flex-none w-[280px] snap-start">
                <BonusCard
                  title={bonus.title}
                  category={bonus.category}
                  difficulty={bonus.difficulty}
                  time={bonus.time}
                  imageUrl={bonus.imageUrl}
                  imageBgColor={bonus.imageBgColor}
                  isLocked={!isPremium}
                  bonusId={bonus.id}
                  onUnlock={handleUnlock}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
