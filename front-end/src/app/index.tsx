import React from 'react';
import { View, Text } from 'react-native';
import { Button, ButtonText } from '@gluestack-ui/themed';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Welcome to Tailored!
      </Text>
      
      <Button>
        <ButtonText>Test Gluestack UI</ButtonText>
      </Button>
    </View>
  );
}
