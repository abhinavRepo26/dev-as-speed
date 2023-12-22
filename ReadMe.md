


# dev-as-speed

## Speed up your development with dev-as-speed

Welcome to dev-as-speed! This package provides a versatile re-usable components which covers most of the common used components and utilities in the react-native ,There are many solutions or components for React Native applications development, offering a `ThemeProvider` component and a `useTheme` hook to manage themes.

## Installation

To install the package, use:

```bash
npm install dev-as-speed
# or
yarn add dev-as-speed
```

## Usage - App.js
```bash
import React from 'react';
import { ThemeProvider, useTheme } from 'dev-as-speed'; 
import { View, Text, TouchableOpacity } from 'react-native';

const App = () => {
   
    // define your custom colors for both the theme 
    const customLightTheme = {
    // Customized properties for light theme
    primaryColor: '#FF9900',
    secondaryColor: '#00FF99',
    // Additional properties...
  };

  const customDarkTheme = {
    // Customized properties for dark theme
    primaryColor: '#9900FF',
    secondaryColor: '#FF0099',
    // Additional properties...
  };


  return (
    <ThemeProvider customLightTheme={customLightTheme} customDarkTheme={customDarkTheme}>
      <MainApp />
    </ThemeProvider>
  );
};

const MainApp = () => {
  const { currentTheme } = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: currentTheme.backgroundColor }}>
      <Text style={{ color: currentTheme.textColor }}>Theme Example</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

```
