import { useState } from 'react';
import ActivityDetailModal from '../ActivityDetailModal';
import { activities } from '@/data/activities';
import { Button } from '@/components/ui/button';

export default function ActivityDetailModalExample() {
  const [open, setOpen] = useState(false);
  const activity = activities[0];

  return (
    <div className="p-4 bg-background min-h-screen flex items-center justify-center">
      <Button
        onClick={() => setOpen(true)}
        className="bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        Open Activity Details
      </Button>
      <ActivityDetailModal
        activity={activity}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
