'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isHeaderPlayerVisible: boolean;
  setIsHeaderPlayerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHeaderPlayerVisible, setIsHeaderPlayerVisible] = useState(true);
  const [volume, setVolume] = useState(0.75); // Default volume at 75%

  return (
    <AppContext.Provider value={{ 
      isPlaying, setIsPlaying, 
      isHeaderPlayerVisible, setIsHeaderPlayerVisible,
      volume, setVolume
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
