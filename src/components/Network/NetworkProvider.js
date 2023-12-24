import React, { createContext, useContext, useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

const NetworkContext = createContext();

export const useNetwork = () => {
    return useContext(NetworkContext);
  };

export const NetworkProvider = ({ children }) => {
  const [network, setNetwork] = useState(true); 

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetwork(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NetworkContext.Provider value={{network}}>
      {children}
    </NetworkContext.Provider>
  );
};




