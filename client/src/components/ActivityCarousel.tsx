import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ActivityCard from './ActivityCard';
import type { Activity } from '@/data/activities';

interface ActivityCarouselProps {
  title: string;
  activities: Activity[];
  isLocked: boolean;
  onViewActivity: (activity: Activity) => void;
  onUnlockActivity?: () => void;
  showNavigation?: boolean;
}

export default function ActivityCarousel({
  title,
  activities,
  isLocked,
  onViewActivity,
  onUnlockActivity,
  showNavigation = false,
}: ActivityCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <div className="space-y-4">
      <div className="flex items-center justify-between px-4">
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        {showNavigation && (
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => scroll('left')}
              className="rounded-full"
              data-testid="button-scroll-left"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => scroll('right')}
              className="rounded-full"
              data-testid="button-scroll-right"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {activities.map((activity) => (
          <div key={activity.id} className="flex-none w-[280px] snap-start">
            <ActivityCard
              title={activity.title}
              category={activity.category}
              difficulty={activity.difficulty}
              time={activity.time}
              imageUrl={activity.imageUrl}
              imageBgColor={activity.imageBgColor}
              imageAspectRatio={activity.imageAspectRatio}
              isLocked={isLocked}
              activityId={activity.id}
              onView={() => onViewActivity(activity)}
              onUnlock={onUnlockActivity}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
