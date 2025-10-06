import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, Lightbulb, Info, Target } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { origamiProjects, type OrigamiProject } from '@/data/origami-projects';
import { useAuth } from '@/contexts/AuthContext';

export default function OrigamiFamilia() {
  const [selectedProject, setSelectedProject] = useState<OrigamiProject | null>(null);
  const { addViewedActivity } = useAuth();

  useEffect(() => {
    addViewedActivity('origami-familia');
  }, [addViewedActivity]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Muito fácil':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20';
      case 'Fácil':
        return 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20';
      case 'Média':
        return 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20';
      case 'Difícil':
        return 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20';
      default:
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20';
    }
  };

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="container mx-auto px-4 py-4">
            <Button
              variant="ghost"
              onClick={() => setSelectedProject(null)}
              className="gap-2"
              data-testid="button-back"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar aos Projetos
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-4xl pb-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-3" data-testid="text-project-title">
                {selectedProject.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                <Badge className={getDifficultyColor(selectedProject.difficulty)} data-testid={`badge-difficulty-${selectedProject.id}`}>
                  {selectedProject.difficulty}
                </Badge>
                <Badge variant="outline" className="gap-1" data-testid={`badge-age-${selectedProject.id}`}>
                  <Users className="w-3 h-3" />
                  {selectedProject.age}
                </Badge>
                <Badge variant="outline" className="gap-1" data-testid={`badge-time-${selectedProject.id}`}>
                  <Clock className="w-3 h-3" />
                  {selectedProject.time}
                </Badge>
              </div>
            </div>

            <Tabs defaultValue="materials" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="materials" data-testid="tab-materials">Materiais</TabsTrigger>
                <TabsTrigger value="steps" data-testid="tab-steps">Passo a Passo</TabsTrigger>
                <TabsTrigger value="explanation" data-testid="tab-explanation">Explicação</TabsTrigger>
                <TabsTrigger value="tips" data-testid="tab-tips">Dicas</TabsTrigger>
              </TabsList>

              <TabsContent value="materials" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="w-5 h-5" />
                      Materiais Necessários
                    </CardTitle>
                    <CardDescription>
                      Separe tudo antes de começar a dobradura
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {selectedProject.materials.map((material, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2"
                          data-testid={`material-${index}`}
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{material}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="steps" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Passo a Passo Detalhado</CardTitle>
                    <CardDescription>
                      Siga cada etapa com calma e atenção
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedProject.steps.map((step, index) => (
                        <div
                          key={index}
                          className="flex gap-4 p-3 bg-muted/50 rounded-lg"
                          data-testid={`step-${index}`}
                        >
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                              {index + 1}
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-sm leading-relaxed">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="explanation" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      Sobre este Origami
                    </CardTitle>
                    <CardDescription>
                      Entenda o significado e aprendizados deste projeto
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-3 bg-muted/50 rounded-lg mb-6">
                      <p className="text-sm leading-relaxed" data-testid="text-explanation">
                        {selectedProject.explanation}
                      </p>
                    </div>
                    <Separator className="my-6" />
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Objetivos de Aprendizagem
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.learningObjectives.map((objective, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm p-3 bg-muted/50 rounded-lg"
                            data-testid={`objective-${index}`}
                          >
                            <span className="text-primary mt-1">✓</span>
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tips" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      Dicas e Truques
                    </CardTitle>
                    <CardDescription>
                      Aproveite ao máximo sua experiência com origami
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {selectedProject.tips.map((tip, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg"
                          data-testid={`tip-${index}`}
                        >
                          <Lightbulb className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/conteudos">
            <Button variant="ghost" className="gap-2" data-testid="button-back-conteudos">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 pb-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold" data-testid="text-page-title">
              Origami em Família
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              10 projetos de dobraduras para fazer em casa, do básico ao avançado!
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {origamiProjects.map((project) => (
              <Card
                key={project.id}
                className="hover-elevate active-elevate-2 cursor-pointer transition-all"
                onClick={() => setSelectedProject(project)}
                data-testid={`card-project-${project.id}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base sm:text-lg line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <Badge className={getDifficultyColor(project.difficulty)}>
                      {project.difficulty}
                    </Badge>
                  </div>
                  <CardDescription className="flex flex-wrap gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 text-xs">
                      <Users className="w-3 h-3" />
                      {project.age}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="inline-flex items-center gap-1 text-xs">
                      <Clock className="w-3 h-3" />
                      {project.time}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                    {project.explanation.slice(0, 100)}...
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Por que fazer origami?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">
                O origami traz inúmeros benefícios para crianças e adultos:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Desenvolve coordenação motora fina e destreza manual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Melhora concentração, paciência e foco</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Ensina geometria e matemática de forma prática</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Estimula criatividade e raciocínio espacial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Fortalece vínculos familiares através da atividade compartilhada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Promove sensação de realização e autoestima</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
