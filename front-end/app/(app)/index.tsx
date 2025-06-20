import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Pressable } from '@/components/ui/pressable';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Icon } from '@/components/ui/icon';
import { BellIcon, BookmarkIcon, SearchIcon } from 'lucide-react-native';
import { PostCard } from '@/components/PostCard'; // Adjust the import path as needed

// --- MOCK DATA for posts ---
// In a real app, this would come from an API
const posts = [
  {
    id: '1',
    user: {
      name: 'chloe21',
      avatar: require('../../assets/images/profile-icon60x60.png'),
    },
    images: [
      require('../../assets/images/jeans/jeans-1.png'),
      require('../../assets/images/sweaters/sweater-1.avif'),
      require('../../assets/images/sneakers/sneakers-1.webp'),
      require('../../assets/images/accessories/handbag.png'),
    ],
    caption: 'Comfy jeans, cozy sweater, and my favorite sneakers for a casual day!',
    likes: 12,
  },
  {
    id: '2',
    user: {
      name: 'lee_beige',
      avatar: require('../../assets/images/profile-icon60x60.png'),
    },
    images: [
      require('../../assets/images/jeans/jeans-2.png'),
      require('../../assets/images/sweaters/sweater-2.png'),
      require('../../assets/images/sneakers/sneakers-2.webp'),
      require('../../assets/images/accessories/black-handbag.png'),
    ],
    caption: 'Layered up for autumn. Jeans, sweater, and a chic bag!',
    likes: 18,
  },
  {
    id: '3',
    user: {
      name: 'fashionista',
      avatar: require('../../assets/images/profile-icon60x60.png'),
    },
    images: [
      require('../../assets/images/jeans/jeans-3.webp'),
      require('../../assets/images/sweaters/sweater-3.png'),
      require('../../assets/images/sneakers/sneakers-3.webp'),
      require('../../assets/images/accessories/glasses.png'),
    ],
    caption: 'Ready for the weekend with these essentials!',
    likes: 22,
  },
];


export default function FeedPage(){
  const [activeTab, setActiveTab] = useState('new'); // 'new' or 'following'

  return (
      <SafeAreaView className="flex-1 bg-white">
        <VStack className="flex-1 justify-center bg-white pt-14">
          {/* --- HEADER --- */}
          <VStack className="px-4 pt-2 pb-3 bg-white w-full">
            {/* Top Row: Tabs and Icons */}
            <HStack className="justify-between items-center w-full">
              {/* Tabs */}
              <HStack space="xl">
                <Pressable onPress={() => setActiveTab('new')} className={`pb-2 ${activeTab === 'new' ? 'border-b-2 border-black' : ''}`}>
                  <Text className={`text-xl ${activeTab === 'new' ? 'font-bold text-black' : 'font-semibold text-gray-400'}`}>
                    New
                  </Text>
                </Pressable>
                <Pressable onPress={() => setActiveTab('following')} className={`pb-2 ${activeTab === 'following' ? 'border-b-2 border-black' : ''}`}>
                  <Text className={`text-xl ${activeTab === 'following' ? 'font-bold text-black' : 'font-semibold text-gray-400'}`}>
                    Following
                  </Text>
                </Pressable>
              </HStack>

              {/* Icons */}
              <HStack space="lg" className="items-center">
                <Pressable>
                  <Icon as={BellIcon} className="text-black" size="xl" />
                  {/* Notification Badge */}
                  <Box className="absolute top-[-4px] right-[-4px] bg-red-500 rounded-full w-4 h-4 justify-center items-center">
                    <Text className="text-white text-[10px] font-bold">9+</Text>
                  </Box>
                </Pressable>
                <Pressable>
                  <Icon as={BookmarkIcon} className="text-black" size="xl" />
                </Pressable>
              </HStack>
            </HStack>

            {/* Search Bar */}
            <Input className="mt-4 bg-gray-100 rounded-lg border-gray-100 h-12">
              <InputSlot>
                <InputIcon as={SearchIcon} className="text-gray-500"/>
              </InputSlot>
              <InputField placeholder="Search for hashtags or users" />
            </Input>
          </VStack>

          {/* --- FEED --- */}
          <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
          </ScrollView>
        </VStack>
      </SafeAreaView>
  );
}