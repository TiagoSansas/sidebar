'use client';
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

interface ThemeContextProps {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
  toogle: boolean;
  setToogle: Dispatch<SetStateAction<boolean>>;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<boolean>(false);
  const [toogle, setToogle] = useState<boolean>(true);

  useEffect(() => {
    const root = window.document.documentElement;
    const removeOldTheme = theme === false ? 'dark' : 'ligth';
    const addTheme = theme === false ? 'ligth' : 'dark';
    root.classList.remove(removeOldTheme);
    root.classList.add(addTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toogle, setToogle }}>
      {children}
    </ThemeContext.Provider>
  );
}
