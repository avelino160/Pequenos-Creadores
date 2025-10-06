import { Home, BookOpen, ShoppingBag, Settings } from 'lucide-react';
import { Link, useLocation } from 'wouter';

interface NavItem {
  path: string;
  icon: React.ElementType;
  label: string;
}

const navItems: NavItem[] = [
  { path: '/', icon: Home, label: 'Principal' },
  { path: '/continuar', icon: BookOpen, label: 'Continuar' },
  { path: '/conteudos', icon: ShoppingBag, label: 'Conteúdos' },
  { path: '/configuracoes', icon: Settings, label: 'Configurações' },
];

export default function BottomNav() {
  const [location] = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-card-border z-50 safe-area-bottom">
      <div className="flex items-center justify-around h-16 sm:h-20 px-1 sm:px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.path;
          
          return (
            <Link key={item.path} href={item.path}>
              <button
                className={`flex flex-col items-center justify-center gap-0.5 sm:gap-1 px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl transition-all hover-elevate ${
                  isActive 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                <div className={`p-1.5 sm:p-2 rounded-full ${
                  isActive ? 'bg-sunshine-yellow' : ''
                }`}>
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'text-primary-foreground' : ''}`} />
                </div>
                <span className="text-[10px] sm:text-xs font-medium truncate max-w-[80px] sm:max-w-none">{item.label}</span>
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
