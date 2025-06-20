import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

const jeans = [
  require('../../assets/images/jeans/jeans-1.png'),
  require('../../assets/images/jeans/jeans-2.png'),
  require('../../assets/images/jeans/jeans-3.webp'),
  require('../../assets/images/jeans/jeans-4.png'),
];

const sweaters = [
  require('../../assets/images/sweaters/sweater-1.avif'),
  require('../../assets/images/sweaters/sweater-2.png'),
  require('../../assets/images/sweaters/sweater-3.png'),
];

const sneakers = [
  require('../../assets/images/sneakers/sneakers-1.webp'),
  require('../../assets/images/sneakers/sneakers-2.webp'),
  require('../../assets/images/sneakers/sneakers-3.webp'),
];

const accessories = [
  require('../../assets/images/accessories/handbag.png'),
  require('../../assets/images/accessories/black-handbag.png'),
  require('../../assets/images/accessories/glasses.png'),
];

function getRandomItem(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function AiGeneratorScreen() {
  const [outfit, setOutfit] = useState({
    jeans: getRandomItem(jeans),
    sweater: getRandomItem(sweaters),
    sneakers: getRandomItem(sneakers),
    accessory: getRandomItem(accessories),
  });

  const generateOutfit = () => {
    setOutfit({
      jeans: getRandomItem(jeans),
      sweater: getRandomItem(sweaters),
      sneakers: getRandomItem(sneakers),
      accessory: getRandomItem(accessories),
    });
  };

  return (
    <Box className="flex-1 bg-neutral-50 pt-14 px-4">
      <Text className="text-3xl font-bold mb-6 text-center">AI Outfit Generator</Text>
      <VStack className="space-y-6 items-center">
        <HStack className="space-x-6">
          <VStack className="items-center">
            <Text className="font-semibold mb-2">Jeans</Text>
            <Image source={outfit.jeans} style={{ width: 90, height: 90, borderRadius: 12 }} resizeMode="contain" />
          </VStack>
          <VStack className="items-center">
            <Text className="font-semibold mb-2">Sweater</Text>
            <Image source={outfit.sweater} style={{ width: 90, height: 90, borderRadius: 12 }} resizeMode="contain" />
          </VStack>
        </HStack>
        <HStack className="space-x-6">
          <VStack className="items-center">
            <Text className="font-semibold mb-2">Sneakers</Text>
            <Image source={outfit.sneakers} style={{ width: 90, height: 90, borderRadius: 12 }} resizeMode="contain" />
          </VStack>
          <VStack className="items-center">
            <Text className="font-semibold mb-2">Accessory</Text>
            <Image source={outfit.accessory} style={{ width: 90, height: 90, borderRadius: 12 }} resizeMode="contain" />
          </VStack>
        </HStack>
        <Button onPress={generateOutfit} className="mt-8 w-48">
          <ButtonText>Generate New Outfit</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
} 