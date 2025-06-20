import React, { useState } from 'react';
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Platform } from "react-native";
import Svg, { Path } from 'react-native-svg';

// --- SVG Icon Components ---
// Use react-native-svg for icons if needed, or use a placeholder Box for now

const ShirtIcon = () => (
  <Svg width={48} height={48} viewBox="0 0 24 24" fill="none">
    <Path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" stroke="#374151" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const PantsIcon = () => (
  <Svg width={48} height={48} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2v7.5" stroke="#374151" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="m6 10 1.5 1.5" stroke="#374151" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M16.5 11.5 18 10" stroke="#374151" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M6 22h12" stroke="#374151" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M6 12v10" stroke="#374151" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M18 12v10" stroke="#374151" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const ShoeIcon = () => (
  <Svg width={48} height={48} viewBox="0 0 24 24" fill="none">
    <Path d="M7 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7z" stroke="#374151" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M16 17a2 2 0 0 0 2-2V9" stroke="#374151" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M4.2 12.8a2 2 0 0 0-1.2 1.2S3 17 7 17h10s4-3 4-6.5-2-5-4-5H7S3 8.5 3 12.5a2.2 2.2 0 0 0 1.2.3z" stroke="#374151" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

//
export function QuestionIcon(props) {
  if (Platform.OS === 'web') {
    return (
      <svg width="48" height="48" {...props}>
        <circle cx="24" cy="24" r="20" fill="red" />
      </svg>
    );
  }
  return (
    <Svg width={48} height={48} {...props}>
      <Path d="M24 24m-20 0a20 20 0 1 0 40 0a20 20 0 0 0-40 0" stroke="#374151" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}


// --- Mock Data ---
// Simplified mock data with components for icons.
const clothingItems = {
  top: [
    { name: 'T-Shirt', icon: <ShirtIcon /> },
    { name: 'Shirt', icon: <ShirtIcon /> },
    { name: 'Sweater', icon: <ShirtIcon /> },
  ],
  bottom: [
    { name: 'Jeans', icon: <PantsIcon /> },
    { name: 'Shorts', icon: <PantsIcon /> },
    { name: 'Trousers', icon: <PantsIcon /> },
  ],
  shoes: [
    { name: 'Sneakers', icon: <ShoeIcon /> },
    { name: 'Boots', icon: <ShoeIcon /> },
    { name: 'Sandals', icon: <ShoeIcon /> },
  ],
};


// --- Components ---

const OutfitCard = ({ item }: { item: { name: string; icon: React.ReactNode } }) => (
  <Box className="bg-white p-4 rounded-xl shadow-lg items-center justify-center w-32 h-40 m-2">
    {item.icon}
    <Text className="mt-2 font-bold text-center text-gray-800">{item.name}</Text>
  </Box>
);

const LoadingSpinner = () => (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
    </div>
);


// --- Main App Component ---

export default function SuggestionsScreen() {
  const [outfit, setOutfit] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Function to generate a random outfit
  const generateOutfit = () => {
    setLoading(true);
    setOutfit(null); // Clear previous outfit
    setTimeout(() => {
      const top = clothingItems.top[Math.floor(Math.random() * clothingItems.top.length)];
      const bottom = clothingItems.bottom[Math.floor(Math.random() * clothingItems.bottom.length)];
      const shoes = clothingItems.shoes[Math.floor(Math.random() * clothingItems.shoes.length)];
      setOutfit({ top, bottom, shoes });
      setLoading(false);
    }, 1000);
  };

  return (
    <VStack className="flex-1 bg-gray-50 items-center pt-14">
      {/* Header */}
      <Box className="pt-12 pb-4 px-4 bg-black w-full">
        <Text className="text-3xl font-bold text-white">Wardrobe</Text>
      </Box>
      <Button onPress={generateOutfit} disabled={loading} size="xl" className="mt-12">
        <ButtonText> {loading ? 'Generating...' : 'Generate Outfit'} </ButtonText>
      </Button>
      {loading ? (
        <Text className="mt-8 text-lg text-gray-500">Generating...</Text>
      ) : outfit ? (
        <HStack className="flex flex-wrap justify-center items-center mt-8">
          <OutfitCard item={outfit.top} />
          <OutfitCard item={outfit.bottom} />
          <OutfitCard item={outfit.shoes} />
        </HStack>
      ) : (
        <Box className="bg-gray-100 border border-dashed border-gray-300 p-8 rounded-2xl flex flex-col items-center justify-center w-full max-w-lg h-64 text-center mt-8">
          <Text className="text-2xl text-gray-500 mb-4">Your outfit suggestion will appear here.</Text>
        </Box>
      )}
    </VStack>
  );
}
