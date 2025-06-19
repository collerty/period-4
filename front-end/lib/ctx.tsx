import React, { use, createContext, type PropsWithChildren, useEffect } from 'react';
import { useStorageState } from '../hooks/use-storage-state';
import { router } from 'expo-router';

const AuthContext = createContext<{
  signIn: (token: string) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = use(AuthContext);
  if (!value) {
    throw new Error('useSession must be wrapped in a <SessionProvider />');
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  // Handle navigation when session changes
  useEffect(() => {
    if (!isLoading) {
      if (session) {
        // User is signed in, navigate to app
        router.replace('/(app)');
      } else {
        // User is signed out, navigate to sign-in
        router.replace('/explore');
      }
    }
  }, [session, isLoading]);

  return (
      <AuthContext
          value={{
            signIn: (token: string) => {
              console.log("ctx sign in")
              setSession(token);

            },
            signOut: () => {
              setSession(null);
            },
            session,
            isLoading,
          }}>
        {children}
      </AuthContext>
  );
}
