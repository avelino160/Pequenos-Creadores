import { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { projects, type Project } from '@/data/projects';
import { useAuth } from '@/contexts/AuthContext';

export default function ProjetoDetalhes() {
  const [, params] = useRoute('/projeto/:id');
  const { addViewedProject } = useAuth();
  const projectId = params?.id ? parseInt(params.id) : null;
  
  const project: Project | undefined = projects.find(p => p.id === projectId);

  useEffect(() => {
    if (projectId) {
      addViewedProject(projectId);
    }
  }, [projectId, addViewedProject]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Projeto não encontrado
          </h2>
          <Link href="/mega-kit">
            <Button variant="outline" data-testid="button-back-to-list">
              Voltar à lista
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 bg-background min-h-screen">
      <div className="sticky top-0 z-50 bg-background border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/mega-kit">
            <Button size="icon" variant="ghost" data-testid="button-back">
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                Projeto {project.id}
              </span>
              <span className="text-xs text-muted-foreground">
                {project.category}
              </span>
            </div>
            <h1 className="text-lg font-bold text-foreground leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-4">
        <Card className="p-4">
          <div className="flex items-center gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Dificuldade: </span>
              <span className="font-semibold text-foreground">{project.difficulty}</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <div>
              <span className="text-muted-foreground">Tempo: </span>
              <span className="font-semibold text-foreground">{project.time}</span>
            </div>
          </div>
        </Card>

        {project.materials && (
          <Card className="p-4">
            <h3 className="text-sm font-bold text-foreground mb-3">
              📦 Materiais Necessários
            </h3>
            <div className="space-y-2">
              {project.materials.split(',').map((material, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 text-sm text-foreground/90"
                >
                  <span className="text-primary mt-0.5">✓</span>
                  <span>{material.trim()}</span>
                </div>
              ))}
            </div>
          </Card>
        )}

        {project.tools && (
          <Card className="p-4">
            <h3 className="text-sm font-bold text-foreground mb-3">
              🔧 Ferramentas
            </h3>
            <div className="space-y-2">
              {project.tools.split(',').map((tool, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 text-sm text-foreground/90"
                >
                  <span className="text-primary mt-0.5">✓</span>
                  <span>{tool.trim()}</span>
                </div>
              ))}
            </div>
          </Card>
        )}

        {project.preparation && (
          <Card className="p-4 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
            <h3 className="text-sm font-bold text-foreground mb-2">
              ⚡ Antes de Começar
            </h3>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {project.preparation}
            </p>
          </Card>
        )}

        {project.steps && project.steps.length > 0 && (
          <Card className="p-4">
            <h3 className="text-lg font-bold text-foreground mb-4">
              Passo a Passo
            </h3>
            <div className="space-y-4">
              {project.steps.map((step, index) => {
                const stepParts = step.split(':');
                const hasLabel = stepParts.length > 1 && (
                  stepParts[0].includes('PASSO') || 
                  /^\d+\./.test(stepParts[0])
                );
                
                return (
                  <div 
                    key={index} 
                    className="relative bg-gradient-to-r from-primary/5 to-transparent rounded-xl p-4 border-l-4 border-primary"
                    data-testid={`step-${index + 1}`}
                  >
                    <div className="flex gap-3">
                      <div className="flex-none">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        {hasLabel ? (
                          <>
                            <h4 className="font-bold text-foreground mb-2 text-sm">
                              {stepParts[0]}
                            </h4>
                            <p className="text-sm text-foreground/90 leading-relaxed">
                              {stepParts.slice(1).join(':').trim()}
                            </p>
                          </>
                        ) : (
                          <p className="text-sm text-foreground leading-relaxed">
                            {step}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground text-center">
                Total de {project.steps.length} passos • Siga cada etapa com atenção
              </p>
            </div>
          </Card>
        )}

        {project.testsAndAdjustments && (
          <Card className="p-4 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
            <h3 className="text-sm font-bold text-foreground mb-3">
              🔬 Testes e Ajustes
            </h3>
            <div className="space-y-2">
              {project.testsAndAdjustments.split('|').map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 text-sm text-foreground/90"
                >
                  <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                  <span className="leading-relaxed">{item.trim()}</span>
                </div>
              ))}
            </div>
          </Card>
        )}

        {project.safetyAndSupervision && (
          <Card className="p-4 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900">
            <h3 className="text-sm font-bold text-foreground mb-3">
              ⚠️ Segurança e Supervisão
            </h3>
            <div className="space-y-2">
              {project.safetyAndSupervision.split('|').map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 text-sm text-foreground/90"
                >
                  <span className="text-red-600 dark:text-red-400 mt-0.5">⚠</span>
                  <span className="leading-relaxed">{item.trim()}</span>
                </div>
              ))}
            </div>
          </Card>
        )}

        {project.variationsAndExtensions && (
          <Card className="p-4 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
            <h3 className="text-sm font-bold text-foreground mb-3">
              💡 Variações e Ideias Criativas
            </h3>
            <div className="space-y-2">
              {project.variationsAndExtensions.split('|').map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 text-sm text-foreground/90"
                >
                  <span className="text-green-600 dark:text-green-400 mt-0.5">✨</span>
                  <span className="leading-relaxed">{item.trim()}</span>
                </div>
              ))}
            </div>
          </Card>
        )}

        {project.cleanup && (
          <Card className="p-4 bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-900">
            <h3 className="text-sm font-bold text-foreground mb-2">
              🧹 Organização e Limpeza
            </h3>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {project.cleanup}
            </p>
          </Card>
        )}

        <div className="pt-4">
          <Link href="/mega-kit">
            <Button
              variant="outline"
              className="w-full rounded-xl"
              data-testid="button-back-to-projects"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Voltar para a lista de projetos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
