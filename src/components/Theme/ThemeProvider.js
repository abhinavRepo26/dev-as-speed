// ThemeProvider.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import {lightTheme as defaultLightTheme, darkTheme as defaultDarkTheme } from '../../utils/themes'

/**
 * @typedef {Object} ThemeContextValue
 * @property {string} theme - The current theme ('light' or 'dark').
 * @property {Function} toggleTheme - Function to toggle between light and dark themes.
 * @property {CustomTheme} currentTheme - The current merged theme object.
 */

const ThemeContext = createContext();

/**
 * Custom hook to access the theme context values.
 * @returns {ThemeContextValue} Theme context values.
 */
export const useTheme = () => {
  return useContext(ThemeContext);
};

/**
 * Component to provide theme context to the application.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components.
 * @param {CustomTheme} props.customLightTheme - Customized properties for the light theme.
 * @param {CustomTheme} props.customDarkTheme - Customized properties for the dark theme.
 * @returns {React.JSX} ThemeProvider component.
 */
export const ThemeProvider = ({ children, customLightTheme, customDarkTheme }) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  /**
   * Toggle between light and dark themes.
   */
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
