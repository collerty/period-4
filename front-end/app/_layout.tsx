import React from 'react';
import "@/global.css";
import { Stack } from 'expo-router';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SessionProvider } from "@/lib/ctx";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <SessionProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Protected guard={true}>
            <Stack.Screen name="(app)" />
          </Stack.Protected>
          <Stack.Protected guard={false}>
            <Stack.Screen name="sign-in" options={{ headerShown: false }} />
          </Stack.Protected>
        </Stack>
      </SessionProvider>
    </GluestackUIProvider>
  );
}