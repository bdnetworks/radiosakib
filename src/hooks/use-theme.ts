'use client';

import { useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    // On mount, read the theme from the DOM/localStorage and set the state
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = storedTheme || (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    setThemeState(initialTheme);
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return { theme, setTheme };
}
