import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/AppStyles';

const LandingPage = ({ onGetStarted }) => {
  return (
    <View style={styles.landingContainer}>
      <View style={styles.landingContent}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            Tail
            <TouchableOpacity 
              style={styles.clothButton}
              onPress={onGetStarted}
            >
              <Text style={styles.clothButtonText}>👕</Text>
            </TouchableOpacity>
            red
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