import React, { useState } from 'react';
import { ActivityIndicator, Button, FlatList, Image, View } from 'react-native';
import RNFS from 'react-native-fs';
import {
    Asset,
    ImagePickerResponse,
    launchImageLibrary,
} from 'react-native-image-picker';
import { useLensoSearch } from '../../hooks/useLensoSearch';

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
              setResults(data.results); // ✅ correctly typed!
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
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="Pick Image & Search Similar" onPress={pickAndSearch} />

      {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}

      <FlatList
        data={results}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.urlList[0].imageUrl }}
            style={{ width: 100, height: 100, margin: 8 }}
          />
        )}
      />
    </View>
  );
}
