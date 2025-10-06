import ActivityCarousel from '../ActivityCarousel';
import { activities } from '@/data/activities';

export default function ActivityCarouselExample() {
  const module1Activities = activities.filter(a => a.module === 1);

  return (
    <div className="bg-background py-8">
      <ActivityCarousel
        title="Módulo 1 – Projetos Criativos Iniciais"
        activities={module1Activities}
        isLocked={false}
        onViewActivity={(activity) => console.log('View:', activity.title)}
        onUnlockActivity={() => console.log('Unlock module')}
      />
    </div>
  );
}
