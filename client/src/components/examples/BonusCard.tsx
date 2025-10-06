import BonusCard from '../BonusCard';
import { bonusContent } from '@/data/activities';

export default function BonusCardExample() {
  return (
    <div className="p-4 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {bonusContent.map((bonus, idx) => (
          <BonusCard
            key={bonus.id}
            title={bonus.title}
            description={bonus.description}
            icon={bonus.icon}
            isLocked={idx % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
