import { useState } from 'react';

function useTheme() {
  const localTheme = localStorage.getItem('theme') ?? 'light';
  const [themeMode, setThemeMode] = useState(localTheme);

  return [
    themeMode,
    (theme) => {
      setThemeMode(theme);
      localStorage.setItem('theme', theme);
    },
  ];
}

export default useTheme;
