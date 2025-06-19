import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '../../lib/gluestack-theme';

interface GluestackProviderProps {
  children: React.ReactNode;
}

export function GluestackProvider({ children }: GluestackProviderProps) {
  return (
    <GluestackUIProvider config={config}>
      {children}
    </GluestackUIProvider>
  );
} 