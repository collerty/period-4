import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles.js';

const CalendarPage = () => {
  return (
    <ScrollView style={styles.content}>
      <Text style={styles.sectionTitle}>Calendar</Text>
      <Text style={styles.subtitle}>Sort event and plan your future outfit</Text>
      
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Event</Text>
      </TouchableOpacity>

      <View style={styles.calendarCard}>
        <Text style={styles.calendarDate}>Today - May 26</Text>
        <View style={styles.calendarEvents}>
          <Image source={require('../assets/images/calendar.png')} style={styles.calendarIcon} />
          <Text style={styles.calendarEvent}>Dinner Date</Text>
        </View>
        <Text style={styles.calendarOutfit}>Outfit: Elegant Dress</Text>
      </View>

      <Text style={styles.sectionTitle}>Preview Day</Text>
      <Text style={styles.subtitle}>If the event was created, the page will show the weather, desired outfit and event description</Text>
      
      <View style={styles.previewCard}>
        <Text style={styles.weatherText}>☀️ 24°C - Sunny</Text>
        <Text style={styles.outfitText}>Recommended: Light Summer Dress</Text>
      </View>
    </ScrollView>
  );
};

export default CalendarPage;