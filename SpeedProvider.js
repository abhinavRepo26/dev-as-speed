import React from 'react';
import {NetworkProvider} from './src/components/Network/NetworkProvider';
import {ThemeProvider} from './src/components/Theme/ThemeProvider'

export const SpeedProvider = ({ children }) => {
  return (
    <NetworkProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </NetworkProvider>
  );
};
