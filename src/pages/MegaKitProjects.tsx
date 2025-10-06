import { Link } from 'wouter';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

export default function MegaKitProjects() {
  return (
    <div className="pb-24 bg-background min-h-screen">
      <div className="sticky top-0 z-50 bg-background border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Button size="icon" variant="ghost" data-testid="button-back">
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-foreground">
              Mega Kit Pequenos Criadores
            </h1>
            <p className="text-sm text-muted-foreground">
              100 Projetos Criativos
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-3">
        {projects.map((project) => (
          <Link key={project.id} href={`/projeto/${project.id}`}>
            <div
              className="p-4 bg-card border border-card-border rounded-xl hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid={`project-item-${project.id}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {project.id}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>Dificuldade: {project.difficulty}</span>
                    <span>•</span>
                    <span>{project.time}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground flex-none" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
