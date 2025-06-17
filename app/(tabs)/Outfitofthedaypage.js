import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles.js';

const OutfitOfTheDayPage = () => {
  return (
    <ScrollView style={styles.content}>
      <Text style={styles.sectionTitle}>Outfit of the Day</Text>
      <Text style={styles.subtitle}>AI suggestion for your personal outfit (weather and closet are taken into account)</Text>
      
      <View style={styles.ootdCard}>
      <View style={styles.ootdRow}>
        <Image source={require('./assets/icons/sparkle.png')} style={styles.ootdIcon} />
        <Text style={styles.ootdTitle}>Today's Recommendation</Text>
      </View>
      <View style={styles.ootdRow}>
        <Image source={require('./assets/icons/sun.png')} style={styles.ootdIcon} />
        <Text style={styles.ootdWeather}>Sunny, 24°C</Text>
       </View>
        <Text style={styles.ootdOutfit}>Blue Dress + White Sneakers</Text>
        <Text style={styles.ootdNote}>Perfect for a casual day out!</Text>
      </View>

      <TouchableOpacity style={styles.regenerateButton}>
        <Text style={styles.regenerateButtonText}>🔄 Get New Suggestion</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Trending Outfits</Text>
      <Text style={styles.subtitle}>See what's trending today</Text>
      
      <View style={styles.trendingOutfits}>
        <View style={styles.trendingItem}>
          <Image source={require('./assets/images/dress.png')} style={styles.trendingIcon} />
          <Text style={styles.trendingText}>Floral Dresses</Text>
        </View>
        <View style={styles.trendingItem}>
          <Image source={require('./assets/images/formal_shirt.png')} style={styles.trendingIcon} />
          <Text style={styles.trendingText}>Oversized Tees</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default OutfitOfTheDayPage;