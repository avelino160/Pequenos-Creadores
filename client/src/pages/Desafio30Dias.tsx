import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, Lightbulb, Info, Target, Calendar } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { desafio30DiasAtividades, type Desafio30DiasAtividade } from '@/data/desafio-30-dias';
import { useAuth } from '@/contexts/AuthContext';

export default function Desafio30Dias() {
  const [selectedActivity, setSelectedActivity] = useState<Desafio30DiasAtividade | null>(null);
  const { addViewedActivity } = useAuth();

  useEffect(() => {
    addViewedActivity('desafio-30-dias');
  }, [addViewedActivity]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil':
        return 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20';
      case 'Médio':
        return 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20';
      default:
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20';
    }
  };

  if (selectedActivity) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="container mx-auto px-4 py-4">
            <Button
              variant="ghost"
              onClick={() => setSelectedActivity(null)}
              className="gap-2"
              data-testid="button-back"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar às Atividades
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-4xl pb-8">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="gap-1">
                  <Calendar className="w-3 h-3" />
                  Dia {selectedActivity.day}
                </Badge>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-3" data-testid="text-activity-title">
                {selectedActivity.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                <Badge className={getDifficultyColor(selectedActivity.difficulty)} data-testid={`badge-difficulty-${selectedActivity.id}`}>
                  {selectedActivity.difficulty}
                </Badge>
                <Badge variant="outline" className="gap-1" data-testid={`badge-age-${selectedActivity.id}`}>
                  <Users className="w-3 h-3" />
                  {selectedActivity.age}
                </Badge>
                <Badge variant="outline" className="gap-1" data-testid={`badge-time-${selectedActivity.id}`}>
                  <Clock className="w-3 h-3" />
                  {selectedActivity.time}
                </Badge>
              </div>
            </div>

            <Tabs defaultValue="materials" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="materials" data-testid="tab-materials">Materiais</TabsTrigger>
                <TabsTrigger value="steps" data-testid="tab-steps">Passo a Passo</TabsTrigger>
                <TabsTrigger value="tips" data-testid="tab-tips">Dicas</TabsTrigger>
                <TabsTrigger value="objectives" data-testid="tab-objectives">Objetivos</TabsTrigger>
              </TabsList>

              <TabsContent value="materials" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="w-5 h-5" />
                      Materiais Necessários
                    </CardTitle>
                    <CardDescription>
                      Separe tudo antes de começar a atividade
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {selectedActivity.materials.map((material, index) => (
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
                      {selectedActivity.steps.map((step, index) => (
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

              <TabsContent value="tips" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      Dicas e Truques
                    </CardTitle>
                    <CardDescription>
                      Aproveite ao máximo esta atividade
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {selectedActivity.tips.map((tip, index) => (
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

              <TabsContent value="objectives" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Objetivos de Aprendizagem
                    </CardTitle>
                    <CardDescription>
                      O que seu filho aprenderá com esta atividade
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {selectedActivity.learningObjectives.map((objective, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg"
                          data-testid={`objective-${index}`}
                        >
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-sm">{objective}</span>
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
              Desafio 30 Dias Sem Telas
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              30 atividades divertidas para reduzir o tempo de tela e fortalecer laços familiares!
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {desafio30DiasAtividades.map((activity) => (
              <Card
                key={activity.id}
                className="hover-elevate active-elevate-2 cursor-pointer transition-all"
                onClick={() => setSelectedActivity(activity)}
                data-testid={`card-activity-${activity.id}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="gap-1">
                          <Calendar className="w-3 h-3" />
                          Dia {activity.day}
                        </Badge>
                      </div>
                      <CardTitle className="text-base sm:text-lg line-clamp-2">
                        {activity.title}
                      </CardTitle>
                    </div>
                    <Badge className={getDifficultyColor(activity.difficulty)}>
                      {activity.difficulty}
                    </Badge>
                  </div>
                  <CardDescription className="flex flex-wrap gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 text-xs">
                      <Users className="w-3 h-3" />
                      {activity.age}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="inline-flex items-center gap-1 text-xs">
                      <Clock className="w-3 h-3" />
                      {activity.time}
                    </span>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
