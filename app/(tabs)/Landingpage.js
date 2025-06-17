import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles.js';

const LandingPage = ({ onGetStarted }) => {
  return (
    <View style={styles.landingContainer}>
      <View style={styles.landingContent}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            Tail
            <TouchableOpacity style={styles.clothButton}
              onPress={onGetStarted}>
              <View style={styles.clothButtonContent}>
              <Image source={require('../assets/images/tshirt.png')} style={styles.clothIcon} />
              <Text style={styles.clothButtonText}>red</Text>
              </View>
            </TouchableOpacity>
          </Text>
        </View>
        <Text style={styles.tagline}>Your Perfect Style Awaits</Text>
        <Text style={styles.description}>
          Discover, organize, and style your wardrobe with AI-powered recommendations
        </Text>
        
        <TouchableOpacity 
          style={styles.landingButton}
          onPress={onGetStarted}
        >
          <Text style={styles.landingButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingPage;