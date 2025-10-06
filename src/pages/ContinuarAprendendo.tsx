import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { activities } from '@/data/activities';
import { projects } from '@/data/projects';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';

type ViewedItem = {
  id: string | number;
  title: string;
  category: string;
  imageUrl?: string;
  imageBgColor?: string;
  type: 'activity' | 'project';
};

export default function ContinuarAprendendo() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  const viewedActivities: ViewedItem[] = activities
    .filter(a => user?.viewedActivities.includes(a.id))
    .filter(a => a.id !== 'mega-kit-entrada')
    .map(a => ({
      id: a.id,
      title: a.title,
      category: a.category,
      imageUrl: a.imageUrl,
      imageBgColor: a.imageBgColor,
      type: 'activity' as const
    }))
    .slice(-2);

  const viewedProjects: ViewedItem[] = projects
    .filter(p => user?.viewedProjects.includes(p.id))
    .map(p => ({
      id: p.id,
      title: p.title,
      category: p.category,
      type: 'project' as const
    }))
    .slice(-2);

  const allViewedItems = [...viewedActivities, ...viewedProjects];

  const handleResume = (item: ViewedItem) => {
    if (item.type === 'activity') {
      setLocation(`/atividade/${item.id}`);
    } else {
      setLocation(`/projeto/${item.id}`);
    }
  };

  return (
    <div className="pb-20 sm:pb-24 pt-4 sm:pt-6 px-3 sm:px-4 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
        <div className="space-y-1 sm:space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            Continuar Aprendendo
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Retome suas atividades de onde parou
          </p>
        </div>

        {allViewedItems.length === 0 ? (
          <Card className="rounded-2xl p-12 text-center">
            <div className="max-w-md mx-auto space-y-4">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Nenhuma atividade iniciada ainda!
              </h3>
              <p className="text-muted-foreground">
                Comece explorando os projetos no Mega Kit ou as atividades nos Bônus e elas aparecerão aqui.
              </p>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allViewedItems.map((item) => (
              <Card
                key={`${item.type}-${item.id}`}
                className="rounded-2xl overflow-hidden hover-elevate transition-all"
              >
                {item.imageUrl && (
                  <div 
                    className="aspect-square overflow-hidden"
                    style={{ backgroundColor: item.imageBgColor || 'hsl(var(--card))' }}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                {!item.imageUrl && (
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-primary/40" />
                  </div>
                )}
                <div className="p-4 space-y-3">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">
                      {item.category} • {item.type === 'project' ? 'Mega Kit' : 'Bônus'}
                    </div>
                    <h3 className="font-bold text-foreground line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                  <Button
                    onClick={() => handleResume(item)}
                    variant="outline"
                    className="w-full rounded-xl"
                    data-testid={`button-resume-${item.type}-${item.id}`}
                  >
                    Retomar
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
