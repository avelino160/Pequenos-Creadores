import { useState, useEffect } from 'react';
import { ArrowLeft, Beaker, Clock, Users, Lightbulb, Shield, Target } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { scientificInventions, type ScientificInvention } from '@/data/scientific-inventions';
import { useAuth } from '@/contexts/AuthContext';

export default function InventosCientificos() {
  const [selectedInvention, setSelectedInvention] = useState<ScientificInvention | null>(null);
  const { addViewedActivity } = useAuth();

  useEffect(() => {
    addViewedActivity('inventos-cientificos');
  }, [addViewedActivity]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
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

  if (selectedInvention) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="container mx-auto px-4 py-4">
            <Button
              variant="ghost"
              onClick={() => setSelectedInvention(null)}
              className="gap-2"
              data-testid="button-back"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar aos Inventos
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-4xl pb-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-3" data-testid="text-invention-title">
                {selectedInvention.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                <Badge className={getDifficultyColor(selectedInvention.difficulty)} data-testid={`badge-difficulty-${selectedInvention.id}`}>
                  {selectedInvention.difficulty}
                </Badge>
                <Badge variant="outline" className="gap-1" data-testid={`badge-age-${selectedInvention.id}`}>
                  <Users className="w-3 h-3" />
                  {selectedInvention.age}
                </Badge>
                <Badge variant="outline" className="gap-1" data-testid={`badge-time-${selectedInvention.id}`}>
                  <Clock className="w-3 h-3" />
                  {selectedInvention.time}
                </Badge>
              </div>
            </div>

            <Tabs defaultValue="materials" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="materials" data-testid="tab-materials">Materiais</TabsTrigger>
                <TabsTrigger value="steps" data-testid="tab-steps">Passo a Passo</TabsTrigger>
                <TabsTrigger value="explanation" data-testid="tab-explanation">Explicação</TabsTrigger>
                <TabsTrigger value="safety" data-testid="tab-safety">Segurança</TabsTrigger>
              </TabsList>

              <TabsContent value="materials" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Beaker className="w-5 h-5" />
                      Materiais Necessários
                    </CardTitle>
                    <CardDescription>
                      Separe todos os materiais antes de começar o experimento
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {selectedInvention.materials.map((material, index) => (
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
                      Siga cada etapa com atenção para o melhor resultado
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedInvention.steps.map((step, index) => (
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
                      Como Funciona?
                    </CardTitle>
                    <CardDescription>
                      Entenda a ciência por trás do experimento
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-3 bg-muted/50 rounded-lg mb-6">
                      <p className="text-sm leading-relaxed" data-testid="text-explanation">
                        {selectedInvention.explanation}
                      </p>
                    </div>
                    <Separator className="my-6" />
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Objetivos de Aprendizagem
                      </h4>
                      <ul className="space-y-2">
                        {selectedInvention.learningObjectives.map((objective, index) => (
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

              <TabsContent value="safety" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Dicas de Segurança
                    </CardTitle>
                    <CardDescription>
                      Leia atentamente antes de realizar o experimento
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {selectedInvention.safetyTips.map((tip, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg"
                          data-testid={`safety-${index}`}
                        >
                          <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />
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
              Meus Primeiros Inventos Científicos
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              10 experimentos incríveis para descobrir a ciência de forma divertida!
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {scientificInventions.map((invention) => (
              <Card
                key={invention.id}
                className="hover-elevate active-elevate-2 cursor-pointer transition-all"
                onClick={() => setSelectedInvention(invention)}
                data-testid={`card-invention-${invention.id}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base sm:text-lg line-clamp-2">
                      {invention.title}
                    </CardTitle>
                    <Badge className={getDifficultyColor(invention.difficulty)}>
                      {invention.difficulty}
                    </Badge>
                  </div>
                  <CardDescription className="flex flex-wrap gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 text-xs">
                      <Users className="w-3 h-3" />
                      {invention.age}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="inline-flex items-center gap-1 text-xs">
                      <Clock className="w-3 h-3" />
                      {invention.time}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                    {invention.explanation.slice(0, 100)}...
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Por que fazer experimentos científicos?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">
                Os experimentos científicos ajudam as crianças a:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Desenvolver o pensamento crítico e curiosidade natural</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Aprender conceitos de física, química e biologia na prática</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Entender o método científico através da observação</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Criar conexões entre teoria e mundo real</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Desenvolver habilidades de resolução de problemas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
