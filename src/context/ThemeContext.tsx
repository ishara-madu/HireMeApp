import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from '../styles/Theme';

interface ThemeContextProps {
  theme: typeof lightTheme;
  toggleTheme: () => void;
}

const defaultContextValue: ThemeContextProps = {
  theme: lightTheme,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextProps>(defaultContextValue);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const colorScheme = useColorScheme();

  useEffect(() => {
    setTheme(colorScheme === 'light' ? darkTheme : lightTheme);
  }, [colorScheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
