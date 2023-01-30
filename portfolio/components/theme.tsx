import { useColorScheme } from 'use-color-scheme';
import { useEffect, useState } from 'react';

const ThemeTypes = ['dark', 'light', 'none'] as const;
type ThemeType = typeof ThemeTypes[number];

type UseDarkModeReturn = {
  theme: ThemeType,
  toggleTheme: () => void,
}

const THEME_KEY = 'theme_key';

export function useDarkMode(): UseDarkModeReturn {
  const { scheme } = useColorScheme();
  const [theme, setTheme] = useState<ThemeType>(() => {
    const storedTheme = localStorage.getItem(THEME_KEY)
    if (storedTheme !== null) {
      if (storedTheme === 'dark') {
        updateRootTheme('dark');
        return 'dark';
      } else {
        updateRootTheme('light');
        return 'light';
      }
    }

    if (scheme === 'dark' || scheme === 'none') {
      return 'dark';
    } else {
      return 'light'
    }
  });

  useEffect(() => {
    updateRootTheme(theme);
  }, [theme])

  function toggleTheme() {
    setTheme((state) => {
      if (state == 'none') return 'dark';
      const mode = state == 'dark' ? 'light' : 'dark';

      return mode;
    });
  }

  return { theme, toggleTheme };
}

function updateRootTheme(newTheme: ThemeType) {
  if (newTheme === 'dark' || newTheme === 'none') {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
    localStorage.setItem(THEME_KEY, newTheme)
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.style.colorScheme = 'light';
    localStorage.setItem(THEME_KEY, newTheme)
  }
}