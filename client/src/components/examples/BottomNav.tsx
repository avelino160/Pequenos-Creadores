import BottomNav from '../BottomNav';
import { Router } from 'wouter';

export default function BottomNavExample() {
  return (
    <Router>
      <div className="h-screen bg-background">
        <div className="text-center pt-20">
          <p className="text-muted-foreground">
            Click the navigation items below
          </p>
        </div>
        <BottomNav />
      </div>
    </Router>
  );
}
