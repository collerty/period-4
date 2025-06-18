import React from 'react';
import { Slot } from 'expo-router';
import { GluestackProvider } from "../components/ui/gluestack-provider";

export default function RootLayout() {
  return (
    <GluestackProvider>
      <Slot />
    </GluestackProvider>
  );
}