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

### Theme Specification

- The `ThemeProvider` component allows you to manage themes within your React Native application. It provides flexibility by accepting custom theme properties for both light and dark themes.

- `useTheme` hook provide the properties for the theme utilization

1.  currentTheme - to get the current theme properties / colors
2.  theme - to check the current enable theme

### Default Theme colors

#### lightTheme

```bash
export const lightTheme = {
    primaryColor: '#3498db',
    secondaryColor: '#2ecc71',
    textColor: '#333', // Common text color for light theme
    backgroundColor: '#FFF', // Common background color for light theme
  };

```

#### darkTheme

```bash
export const darkTheme = {
  primaryColor: '#9b59b6',
    secondaryColor: '#e74c3c',
    textColor: '#DDD', // Common text color for dark theme
    backgroundColor: '#111', // Common background color for dark theme
    // Other dark theme properties
  };

```

## Network connection
If you want to use network connectivity you need to add peer dependency :

```bash
npm install @react-native-community/netinfo
# or
yarn add @react-native-community/netinfo
```
### After add `NetworkProvider` - App.js
```bash
...
import {ThemeProvider,NetworkProvider} from 'dev-as-speed'


export default function App() {
  return (
    <ThemeProvider customLightTheme={customLightTheme} customDarkTheme={customDarkTheme}>
      <NetworkProvider>
      <MainNavigator />
      </NetworkProvider>
    </ThemeProvider>
  );
}
```

### Usage - 
```base
import React from 'react';
import { useNetwork } from 'dev-as-speed';
import { View, Text, TouchableOpacity } from 'react-native';

const ComponentA = () => {
  const {network} = useNetwork()
  return (
    <View>
     <Text>{network}</Text>
    </View>
  );
};

export default Component;
```

