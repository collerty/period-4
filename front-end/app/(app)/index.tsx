import React from 'react';
import { Text, View } from 'react-native';
import {useSession} from "@/lib/ctx";
import {Button, ButtonText} from "@/components/ui/button";

export default function Index() {
  const { signOut } = useSession();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Welcome to Tailored!
      </Text>
      
      <Text style={{ fontSize: 16, marginBottom: 30, textAlign: 'center' }}>
        You are now signed in and can access the protected app.
      </Text>
      
      <Button
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}
        size="md"
        variant="solid"
        action="primary"
      >
        <ButtonText>Hello World ( sign out )!</ButtonText>
      </Button>
    </View>
  );
}
