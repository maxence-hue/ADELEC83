'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useState<Theme>('light'); // Toujours en mode light

  useEffect(() => {
    // Forcer le mode light
    const root = window.document.documentElement;
    root.classList.remove('dark');
    root.classList.add('light');
    root.dataset.theme = 'light';
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggle: () => {} // Désactivé - toujours en mode light
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
