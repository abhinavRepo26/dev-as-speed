// ThemeProvider.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { lightTheme as defaultLightTheme, darkTheme as defaultDarkTheme } from '../utils/themes';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children, customLightTheme, customDarkTheme }) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const mergedLightTheme = {
    ...defaultLightTheme,
    ...customLightTheme,
  };

  const mergedDarkTheme = {
    ...defaultDarkTheme,
    ...customDarkTheme,
  };

  const currentTheme = theme === 'dark' ? mergedDarkTheme : mergedLightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
