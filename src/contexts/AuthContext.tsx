import { createContext, useContext, useState } from 'react';

type PurchaseLevel = 'none' | 'essential' | 'premium';

interface User {
  email: string;
  purchaseLevel: PurchaseLevel;
  viewedActivities: string[];
  viewedProjects: number[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  setPurchaseLevel: (level: PurchaseLevel) => void;
  addViewedActivity: (activityId: string) => void;
  addViewedProject: (projectId: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      const parsedUser = JSON.parse(stored);
      const updatedUser = { 
        ...parsedUser,
        viewedProjects: parsedUser.viewedProjects || []
      };
      return updatedUser;
    }
    return null;
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      
      if (data.success && data.user) {
        const newUser: User = {
          email: data.user.email,
          purchaseLevel: data.user.purchaseLevel || 'none',
          viewedActivities: [],
          viewedProjects: []
        };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        return true;
      }

      return false;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const setPurchaseLevel = (level: PurchaseLevel) => {
    if (user) {
      const updatedUser = { ...user, purchaseLevel: level };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const addViewedActivity = (activityId: string) => {
    if (user && !user.viewedActivities.includes(activityId)) {
      const updatedUser = {
        ...user,
        viewedActivities: [...user.viewedActivities, activityId]
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const addViewedProject = (projectId: number) => {
    if (user && !user.viewedProjects.includes(projectId)) {
      const updatedUser = {
        ...user,
        viewedProjects: [...user.viewedProjects, projectId]
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setPurchaseLevel, addViewedActivity, addViewedProject }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
