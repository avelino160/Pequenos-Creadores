import ActivityCarousel from '@/components/ActivityCarousel';
import { activities } from '@/data/activities';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import type { Activity } from '@/data/activities';
import logoImage from '@assets/ChatGPT_Image_2_de_out._de_2025__09_09_51-removebg-preview_1759389020390.png';

export default function Principal() {
  const { user, addViewedActivity } = useAuth();
  const [, setLocation] = useLocation();

  const hasPurchased = user?.purchaseLevel !== 'none';

  const essentialActivities = activities.filter(a => !a.isPremium);

  const handleViewActivity = (activity: Activity) => {
    addViewedActivity(activity.id);
  };

  const handleUnlock = () => {
    setLocation('/configuracoes');
  };

  return (
    <div className="pb-20 sm:pb-24 pt-4 sm:pt-6 space-y-6 sm:space-y-8 bg-background min-h-screen">
      <div className="px-3 sm:px-4 space-y-2">
        <div className="flex items-center gap-6 sm:gap-3">
          <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
            <img src={logoImage} alt="Pequenos Criadores" className="w-full h-full object-contain" />
          </div>
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-2xl font-bold text-foreground">
              Olá, Pequeno Criador!
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground truncate">
              {hasPurchased 
                ? 'Acesse seu mega kit de atividades criativas'
                : 'Descubra o mega kit de criatividade'
              }
            </p>
          </div>
        </div>
      </div>

      <ActivityCarousel
        title="Produto Principal"
        activities={essentialActivities}
        isLocked={!hasPurchased}
        onViewActivity={handleViewActivity}
        onUnlockActivity={handleUnlock}
      />
    </div>
  );
}
