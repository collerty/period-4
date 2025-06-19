import React from 'react';
import { Image } from 'react-native';

import { useRouter } from 'expo-router';

export default function Explore() {
  const router = useRouter();
  return (
    <VStack flex={1} justifyContent="center" alignItems="center" px={6} bg="$backgroundLight0">
      <Image
        source={require('../assets/images/welcome-image.png')}
        style={{ width: 272, height: 272, marginBottom: 32 }}
        resizeMode="contain"
      />
      <Text fontSize={28} fontWeight="bold" textAlign="center" mb={2} color="$textLight900">
        Explore the app
      </Text>
      <Text fontSize={16} color="$textLight700" textAlign="center" mb={8}>
        Everything you need to manage your wardrobe, all in one place
      </Text>
      <Button
        size="lg"
        width="100%"
        mb={4}
        onPress={() => router.push('/sign-in')}
        bg="$primary500"
        borderRadius={12}
      >
        <ButtonText color="white">Sign in</ButtonText>
      </Button>
      <Button
        size="lg"
        width="100%"
        variant="outline"
        borderColor="$primary500"
        borderRadius={12}
        onPress={() => router.push('/sign-up')}
      >
        <ButtonText color="$primary500">Create account</ButtonText>
      </Button>
    </VStack>
  );
}


