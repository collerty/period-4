import { useLensoSearch } from '@/hooks/useLensoSearch';
import React, { useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import RNFS from 'react-native-fs';
import {
    Asset,
    ImagePickerResponse,
    launchImageLibrary,
} from 'react-native-image-picker';

// ✅ Define the result type
type LensoResult = {
  urlList: {
    imageUrl: string;
    sourceUrl: string;
    title: string;
  }[];
  base64Image: string;
  confidenceScore: number;
};

export default function LensoScreen() {
  const [results, setResults] = useState<LensoResult[]>([]);
  const [loading, setLoading] = useState(false);
  const { searchSimilar } = useLensoSearch();

  const pickAndSearch = async () => {
    launchImageLibrary(
      { mediaType: 'photo' },
      async (response: ImagePickerResponse) => {
        if (response.didCancel) return;
        if (response.errorCode) {
          console.error(response.errorMessage);
          return;
        }

        if (response.assets && response.assets.length > 0) {
          const asset: Asset = response.assets[0];
          if (asset.uri) {
            setLoading(true);
            try {
              const base64 = await RNFS.readFile(asset.uri, 'base64');
              const data = await searchSimilar(base64);
              setResults(data.results);
            } catch (err) {
              console.error(err);
            } finally {
              setLoading(false);
            }
          }
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Similar Clothing</Text>

      <TouchableOpacity style={styles.button} onPress={pickAndSearch}>
        <Text style={styles.buttonText}>Pick an Image</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#808000" style={styles.loader} />}

      <FlatList
        data={results}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: item.urlList[0].imageUrl }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Main background
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#808000', // Accent
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#808000', // Accent
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF', // Text on accent
    fontSize: 16,
    fontWeight: 'bold',
  },
  loader: {
    marginVertical: 20,
  },
  list: {
    gap: 10,
  },
  imageWrapper: {
    flex: 1,
    backgroundColor: '#E0E0E0', // Neutral background for each item
    borderRadius: 8,
    overflow: 'hidden',
    margin: 5,
    aspectRatio: 1, // Square image
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
