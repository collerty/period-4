import React, {useState} from 'react';
import {FlatList, TouchableOpacity, Image, Modal, View, Alert, ActivityIndicator} from 'react-native';
import {Box} from "@/components/ui/box";
import {Button, ButtonText} from "@/components/ui/button";
import {VStack} from "@/components/ui/vstack";
import {Text} from "@/components/ui/text";
import {AddIcon, Icon} from "@/components/ui/icon";
import {HStack} from "@/components/ui/hstack";
import clsx from "clsx";
import * as ImagePicker from 'expo-image-picker';
import { InputField } from "@/components/ui/input";
import { Pressable } from "@/components/ui/pressable";

type WardrobeItem = {
  id: string;
  name: string;
  type: string;
  image?: any;
};

const categories = ['Jeans', 'Sweaters', 'Jackets', 'Sneakers', "Accessories"];

export default function WardrobeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [items, setItems] = useState<WardrobeItem[]>([
    {id: '1', name: 'Jeans 1', type: 'Jeans', image: require('../../assets/images/jeans/jeans-1.png')},
    {id: '2', name: 'Jeans 2', type: 'Jeans', image: require('../../assets/images/jeans/jeans-2.png')},
    {id: '3', name: 'Jeans 3', type: 'Jeans', image: require('../../assets/images/jeans/jeans-3.webp')},
    {id: '4', name: 'Jeans 4', type: 'Jeans', image: require('../../assets/images/jeans/jeans-4.png')},
    {id: '5', name: 'Sweater 1', type: 'Sweaters', image: require('../../assets/images/sweaters/sweater-1.avif')},
    {id: '6', name: 'Sweater 2', type: 'Sweaters', image: require('../../assets/images/sweaters/sweater-2.png')},
    {id: '7', name: 'Sweater 3', type: 'Sweaters', image: require('../../assets/images/sweaters/sweater-3.png')},
    {id: '8', name: 'Sneakers 1', type: 'Sneakers', image: require('../../assets/images/sneakers/sneakers-1.webp')},
    {id: '9', name: 'Sneakers 2', type: 'Sneakers', image: require('../../assets/images/sneakers/sneakers-2.webp')},
    {id: '10', name: 'Sneakers 3', type: 'Sneakers', image: require('../../assets/images/sneakers/sneakers-3.webp')},
    {id: '11', name: 'Handbag', type: 'Accessories', image: require('../../assets/images/accessories/handbag.png')},
    {id: '12', name: 'Black Handbag', type: 'Accessories', image: require('../../assets/images/accessories/black-handbag.png')},
    {id: '13', name: 'Glasses', type: 'Accessories', image: require('../../assets/images/accessories/glasses.png')},
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [type, setType] = useState(categories[0]);
  const [loading, setLoading] = useState(false);

  const openImagePicker = async () => {
    // Ask for permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions!');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions!');
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleAdd = () => {
    if (!image || !name || !type) {
      Alert.alert('Missing Information', 'Please provide an image, name, and type for the item.');
      return;
    }

    setLoading(true);
    try {
      const newItem: WardrobeItem = {
        id: Date.now().toString(), // Simple unique ID
        name,
        type,
        image,
      };
      setItems([...items, newItem]);
      setModalVisible(false);
      setImage(null);
      setName('');
      setType(categories[0]);
      Alert.alert('Success', 'Item added to wardrobe!');
    } catch (e) {
      const err = e as Error;
      Alert.alert('Error', err.message || 'Failed to add item');
    } finally {
      setLoading(false);
    }
  };

  return (
      <Box className="flex-1 bg-neutral-50 pt-14">
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
              contentContainerStyle={{flex: 1, gap: 8, paddingBottom: 48}}
              renderItem={({item}) => (
                  <Button
                      variant={item === selectedCategory ? 'solid' : 'outline'}
                      size="sm"
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
            data={items.filter(i => i.type === selectedCategory)}
            numColumns={2}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{paddingHorizontal: 0, paddingBottom: 100}}
            renderItem={({item}) => (
                <VStack className="flex-1 m-2 items-center">
                  <Box className="w-36 h-40 bg-neutral-200 rounded-xl mb-2 items-center justify-center overflow-hidden">
                    {item.image ? (
                        <Image source={item.image} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                    ) : null}
                  </Box>
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
              setItems([
                ...items,
                {
                  id: Date.now().toString(),
                  name: ' Jeans',
                  type: 'Jeans',
                  image: require('../../assets/images/jeans/jeans-1.png'),
                },
              ]);
            }}
        >
          <Icon as={AddIcon} color="white" size="xl"/>
        </TouchableOpacity>

        {/* Modal for adding item */}
        <Modal
            visible={modalVisible}
            transparent
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center' }}>
            <Box className="bg-white p-6 rounded-2xl w-80">
              <Text className="text-lg font-bold mb-2">Add to Wardrobe</Text>
              <HStack className="space-x-2 mb-2">
                <Button variant="outline" onPress={openCamera}><ButtonText className="text-black">Camera</ButtonText></Button>
                <Button variant="outline" onPress={openImagePicker}><ButtonText className="text-black">Gallery</ButtonText></Button>
              </HStack>
              {image && (
                  <Box className="items-center mb-2">
                    <Image source={{ uri: image }} style={{ width: 120, height: 120, borderRadius: 12 }} resizeMode="cover" />
                  </Box>
              )}
              <Text className="mb-1">Name</Text>
              <Box className="mb-2">
                <InputField
                    value={name}
                    onChangeText={setName}
                    placeholder="e.g. Blue Jeans"
                    className="w-full outline-none"
                />
              </Box>
              <Text className="mb-1">Type</Text>
              <HStack className="mb-4 flex-wrap gap-2">
                {categories.map(cat => (
                    <Pressable
                        key={cat}
                        className={`px-3 py-1 rounded-full border ${type === cat ? 'bg-black border-black' : 'bg-white border-gray-300'}`}
                        onPress={() => setType(cat)}
                    >
                      <Text className={type === cat ? 'text-white' : 'text-black'}>{cat}</Text>
                    </Pressable>
                ))}
              </HStack>
              <Button onPress={handleAdd} disabled={!image || !name || !type || loading}>
                {loading ? <ActivityIndicator color="#fff" /> : <ButtonText>Add</ButtonText>}
              </Button>
              <Button variant="outline" onPress={() => setModalVisible(false)} className="mt-2">
                <ButtonText>Cancel</ButtonText>
              </Button>
            </Box>
          </View>
        </Modal>
      </Box>
  );
}