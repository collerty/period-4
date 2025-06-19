import React from 'react';
import { Stack } from 'expo-router';
import { GluestackProvider } from "@/components/ui/gluestack-provider";
import {SessionProvider, useSession} from '@/components/auth/ctx';
import { SplashScreenController } from '@/components/auth/splash';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <GluestackProvider>
      <SessionProvider>
        <SplashScreenController />
        <RootNavigator />
      </SessionProvider>
    </GluestackProvider>
  );
}

// Separate this into a new component so it can access the SessionProvider context later
function RootNavigator() {
  const { session } = useSession();

  return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={!!session}>
          <Stack.Screen name="(app)" />
        </Stack.Protected>

        <Stack.Protected guard={!session}>
          <Stack.Screen 
            name="sign-in" 
            options={{
              headerShown: false,
            }}
          />
        </Stack.Protected>
      </Stack>
  );
}