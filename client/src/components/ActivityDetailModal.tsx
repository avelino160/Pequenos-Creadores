import { X, Clock, Zap, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Activity } from '@/data/activities';

interface ActivityDetailModalProps {
  activity: Activity | null;
  open: boolean;
  onClose: () => void;
}

export default function ActivityDetailModal({
  activity,
  open,
  onClose,
}: ActivityDetailModalProps) {
  if (!activity) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border">
          <div className="flex items-start justify-between">
            <div className="space-y-1 flex-1">
              <DialogTitle className="text-2xl font-bold text-foreground">
                {activity.title}
              </DialogTitle>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  {activity.difficulty}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {activity.time}
                </span>
              </div>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={onClose}
              className="rounded-full"
              data-testid="button-close-modal"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[calc(90vh-120px)]">
          <div className="px-6 py-4 space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Materiais Necessários</h3>
              <div className="flex flex-wrap gap-2">
                {activity.materials.map((material, idx) => (
                  <span
                    key={idx}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Ferramentas</h3>
              <div className="flex flex-wrap gap-2">
                {activity.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 text-foreground">Passo a Passo</h3>
              <ol className="space-y-3">
                {activity.steps.map((step, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="flex-none w-8 h-8 bg-sunshine-yellow text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </span>
                    <p className="flex-1 pt-1 text-foreground">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-none mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-bold text-destructive mb-2">Segurança e Supervisão</h3>
                  <ul className="space-y-1 text-sm text-foreground">
                    {activity.safety.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
