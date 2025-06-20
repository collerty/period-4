import React, {useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Box} from "@/components/ui/box";
import {Button} from "@/components/ui/button";
import {VStack} from "@/components/ui/vstack";
import {Text} from "@/components/ui/text";
import {AddIcon, Icon} from "@/components/ui/icon";
import {HStack} from "@/components/ui/hstack";
import clsx from "clsx";
import {Link} from "@/components/ui/link";

const categories = ['Jeans', 'Sweaters', 'Jackets', 'Dresses'];
const items = [
  {id: '1', name: 'Jeans 1'},
  {id: '2', name: 'Jeans 1'},
  {id: '3', name: 'Jeans 1'},
  {id: '4', name: 'Jeans 1'},
  {id: '5', name: 'Jeans 1'},
  {id: '6', name: 'Jeans 1'},
];

export default function WardrobeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
      <Box className="flex-1 bg-neutral-50">
        {/* Header */}
        <Box className="pt-12 pb-4 px-4 bg-black">
          <Text className="text-3xl font-bold text-white">Wardrobe</Text>
        </Box>

        {/* Category Pills */}
        <HStack className="px-2 py-3 space-x-2 bg-black">
          <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item}
              contentContainerStyle={{flex: "1", gap: "0.5rem", paddingBottom: 48}}

              renderItem={({item}) => (
                  <Button
                      variant={item === selectedCategory ? 'solid' : 'outline'}
                      size="sm"
                      // classname="rounded-full"
                      onPress={() => setSelectedCategory(item)}
                      className={clsx(
                          item === selectedCategory ? 'bg-white border-white' : 'bg-black border-white',
                          'rounded-full'
                      )}>
                    <Text className={item === selectedCategory ? 'text-black' : 'text-white'}>{item}</Text>
                  </Button>
              )}
          />
        </HStack>

        {/* Section Title */}
        <Text className="text-xl font-bold px-4 mt-2 mb-2">{selectedCategory}</Text>

        {/* Grid of Items */}
        <FlatList
            data={items}
            numColumns={2}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{paddingHorizontal: "0", paddingBottom: 100}}
            renderItem={({item}) => (
                <VStack className="flex-1 m-2 items-center">
                  <Box className="w-36 h-40 bg-neutral-200 rounded-xl mb-2"/>
                  <Text className="text-base font-medium">{item.name}</Text>
                </VStack>
            )}
        />

        {/* Floating Action Button */}
          <TouchableOpacity
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black w-14 h-14 rounded-full items-center justify-center z-50 shadow-lg"
              style={{transform: [{translateX: -28}]}}
              activeOpacity={0.8}
              onPress={() => {
              }}
          >
            <Icon as={AddIcon} color="white" size="xl"/>
          </TouchableOpacity>
      </Box>
  );
} 