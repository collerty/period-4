import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles.js';

const WardrobePage = () => {
  return (
    <ScrollView style={styles.content}>
      <Text style={styles.sectionTitle}>Wardrobe</Text>
      
      <View style={styles.wardrobeOptions}>
    <TouchableOpacity style={styles.wardrobeButton}>
  <View style={styles.wardrobeButtonContent}>
    <Image source={require('./assets/images/mobile_phone.png')} style={styles.wardrobeIcon} />
    <Text style={styles.wardrobeButtonText}>Scan Cloth</Text>
  </View>
  <Text style={styles.wardrobeSubtext}>Scan cloth, make outfit templates, get AI recommendations</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.wardrobeButton}>
  <View style={styles.wardrobeButtonContent}>
    <Image source={require('./assets/images/formal_shirt.png')} style={styles.wardrobeIcon} />
    <Text style={styles.wardrobeButtonText}>Outfit Templates</Text>
  </View>
  <Text style={styles.wardrobeSubtext}>Make outfit template to use later / share with someone</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.wardrobeButton}>
  <View style={styles.wardrobeButtonContent}>
    <Image source={require('./assets/images/robot.png')} style={styles.wardrobeIcon} />
    <Text style={styles.wardrobeButtonText}>AI Recommendations</Text>
  </View>
  <Text style={styles.wardrobeSubtext}>Outfit recommendations based off your closet items</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.wardrobeButton}>
  <View style={styles.wardrobeButtonContent}>
    <Image source={require('./assets/images/light_bulb.png')} style={styles.wardrobeIcon} />
    <Text style={styles.wardrobeButtonText}>Monetization Idea</Text>
  </View>
  <Text style={styles.wardrobeSubtext}>Sale suggestion based off the closet</Text>
</TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default WardrobePage;