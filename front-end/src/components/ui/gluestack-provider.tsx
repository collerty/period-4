import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';

interface GluestackProviderProps {
  children: React.ReactNode;
}

export function GluestackProvider({ children }: GluestackProviderProps) {
  return (
    <GluestackUIProvider>
      {children}
    </GluestackUIProvider>
  );
} 