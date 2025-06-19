import React from 'react';
import {Image} from 'react-native';
import {useRouter} from 'expo-router';
import {VStack} from "@/components/ui/vstack";
import {Button, ButtonText} from "@/components/ui/button";
import {Text} from "@/components/ui/text";
import {Heading} from "@/components/ui/heading";


export default function Explore() {
  const router = useRouter();
  return (
      <VStack className="flex justify-center w-full h-full">

        <VStack
            className="flex justify-center items-center px-6 gap-8">
          <VStack className="flex justify-center items-center gap-4">

            <Image
                source={require('../assets/images/welcome-image.png')}
                style={{width: 272, height: 272, marginBottom: 32}}
                resizeMode="contain"
            />

            <Heading color="$textLight900">
              Explore the app
            </Heading>
            <Text className="text-center">
              Everything you need to manage your wardrobe, all in one place
            </Text>
          </VStack>
          <VStack className="w-full flex flex-col gap-4">

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
                variant="outline"
                size="lg"
                onPress={() => router.push('/sign-up')}
            >
              <ButtonText className="text-black">Create account</ButtonText>
            </Button>
          </VStack>
        </VStack>
      </VStack>
  );
}
