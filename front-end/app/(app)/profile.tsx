import {ScrollView, Image} from 'react-native';
import {BellIcon, CalendarDaysIcon, Icon} from '../../components/ui/icon';
import {Box} from "@/components/ui/box";
import {HStack} from "@/components/ui/hstack";
import {VStack} from "@/components/ui/vstack";
import {Pressable} from "@/components/ui/pressable";
import {Avatar} from "@/components/ui/avatar";
import {Text} from "@/components/ui/text"
import React from 'react';
import {Button, ButtonText} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";

// const clothes = [
//   require('../../assets/images/green-bag.png'),
//   require('../../assets/images/red-top.png'),
//   require('../../assets/images/navy-sweater.png'),
//   require('../../assets/images/grey-jacket.png'),
//   require('../../assets/images/sunglasses.png'),
//   require('../../assets/images/white-tee.png'),
//   require('../../assets/images/jeans.png'),
//   require('../../assets/images/blue-shirt.png'),
// ];
const clothes = Array(8).fill({ uri: 'https://placehold.co/100x100?text=Item' });

const tabs = [
  {key: 'closet', label: 'Closet'},
  {key: 'outfit', label: 'Outfit'},
  {key: 'packing', label: 'Packing'},
];


export default function ProfileScreen() {
  const [activeTab, setActiveTab] = React.useState('closet');

  return (
      <ScrollView className="bg-white flex-1">
        {/* Header */}
        <Box className="flex-row items-center justify-end px-4 pt-10 pb-4">
          <HStack space="md">
            <Pressable>
              <Box className="relative flex justify-end w-full ml-auto">
                <Icon as={BellIcon} size="lg"/>
                {/*<Badge className="absolute -top-1 -right-1 bg-pink-500" size="xs">*/}
                {/*  <Text className="text-xs text-white">99</Text>*/}
                {/*</Badge>*/}
              </Box>
            </Pressable>
          </HStack>
        </Box>

        {/* Profile Info */}
        <VStack className="items-center mb-2">
          <Avatar size="xl" source={{uri: 'https://randomuser.me/api/portraits/women/44.jpg'}}/>
          <Text className="text-lg font-semibold mt-2">chloe21</Text>
          <HStack className="items-center mt-1">
            <Text className="text-gray-500 text-sm">Emmen, Netherlands</Text>
            <Text className="mx-2 text-gray-400">•</Text>

          </HStack>
        </VStack>

        {/* Weather/Date Card */}
        <Box className="flex-row items-center justify-center px-4 mb-2">
          <Box className="bg-gray-100 rounded-xl flex-row items-center px-4 py-3 mr-2 flex-1">
            <VStack>
              <Text className="text-xs text-gray-500">Friday June 20 <Text
                  className="bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full ml-1">Today</Text></Text>
              <Text className="text-lg font-semibold">21 / 12°C</Text>
            </VStack>
            <Icon as={CalendarDaysIcon} className="ml-auto text-gray-400" size="md"/>
          </Box>
        </Box>

        {/* Custom Tabs */}
        <HStack className="px-4 mb-2 border-b border-gray-200">
          {tabs.map(tab => (
              <Pressable
                  key={tab.key}
                  className={`flex-1 py-2 items-center ${activeTab === tab.key ? 'border-b-2 border-black' : ''}`}
                  onPress={() => setActiveTab(tab.key)}
              >
                <Text
                    className={`text-base font-semibold ${activeTab === tab.key ? 'text-black' : 'text-gray-400'}`}>{tab.label}</Text>
              </Pressable>
          ))}
        </HStack>

        {/* Closet Grid (only show for Closet tab) */}
        {activeTab === 'closet' && (
            <>
              <Box className="px-4 flex-row items-center justify-between mb-2">
                <Text className="text-base font-semibold">Closet</Text>
                <Button variant="outline" size="sm" className="text-black!">
                  <ButtonText className="text-black!">Edit</ButtonText>
                </Button>
              </Box>
              <Box className="px-4">
                <Box className="flex-row flex-wrap -mx-1">
                  {clothes.map((img, idx) => (
                      <Box key={idx} className="w-1/4 p-1">
                        <Box className="bg-gray-100 rounded-lg aspect-square items-center justify-center">
                          <Image source={img} style={{width: '100%', height: '100%', borderRadius: 8}}
                                 resizeMode="contain"/>
                        </Box>
                      </Box>
                  ))}
                </Box>
              </Box>
            </>
        )}
      </ScrollView>
  );
} 