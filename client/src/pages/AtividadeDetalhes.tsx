import { useEffect } from 'react';
import { useRoute } from 'wouter';
import { Clock, Zap, AlertTriangle } from 'lucide-react';
import { activities } from '@/data/activities';
import { useAuth } from '@/contexts/AuthContext';

export default function AtividadeDetalhes() {
  const [, params] = useRoute('/atividade/:id');
  const { addViewedActivity } = useAuth();
  const activity = activities.find(a => a.id === params?.id);

  useEffect(() => {
    if (params?.id) {
      addViewedActivity(params.id);
    }
  }, [params?.id, addViewedActivity]);

  if (!activity) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Atividade não encontrada</h1>
          <p className="text-muted-foreground">A atividade que você procura não existe.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-4xl mx-auto p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground" data-testid="text-activity-title">
              {activity.title}
            </h1>
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

          <div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Materiais Necessários</h3>
            <div className="flex flex-wrap gap-2">
              {activity.materials.map((material, idx) => (
                <span
                  key={idx}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  data-testid={`badge-material-${idx}`}
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
                  data-testid={`badge-tool-${idx}`}
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
                <li key={idx} className="flex gap-3" data-testid={`step-${idx}`}>
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
                    <li key={idx} className="flex gap-2" data-testid={`safety-${idx}`}>
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
