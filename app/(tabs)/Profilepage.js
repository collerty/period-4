import React from 'react';
import { FlatList, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles.js';

const ProfilePage = ({ closetItems, notifications, onNotificationsChange }) => {
  return (
    <ScrollView style={styles.content}>
      <Text style={styles.sectionTitle}>Profile</Text>
      
      <View style={styles.profileCard}>
        <Image source={require('./assets/images/profile.png.jpg')} style={styles.profileIcon} />
        <Text style={styles.profileName}>Fashion Enthusiast</Text>
        <Text style={styles.profileStats}>Posts: 45 | Followers: 1.2K</Text>
      </View>

      <Text style={styles.sectionTitle}>Closet</Text>
      <Text style={styles.subtitle}>All of outfits in your closet shown to others</Text>
      
      <FlatList
        data={closetItems}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.closetItem}>
            <Text style={styles.closetIcon}>{item.image}</Text>
            <Text style={styles.closetName}>{item.name}</Text>
            <Text style={styles.closetCategory}>{item.category}</Text>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>Outfits</Text>
      <Text style={styles.subtitle}>All of outfits in your closet shown to others</Text>
      
      <Text style={styles.sectionTitle}>Notifications</Text>
      <Text style={styles.subtitle}>Important notifications (likes, suggestions, others)</Text>
      
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={onNotificationsChange}
        />
      </View>

      <Text style={styles.sectionTitle}>Settings Page</Text>
      <Text style={styles.subtitle}>Change app language, theme (light, dark) etc.</Text>
      
       <TouchableOpacity style={styles.settingButton}>
    <View style={styles.settingContent}>
      <Image source={require('./assets/icons/settings.png')} style={styles.settingIcon} />
      <Text style={styles.settingButtonText}>App Settings</Text>
    </View>
  </TouchableOpacity>

  <TouchableOpacity style={styles.settingButton}>
    <View style={styles.settingContent}>
      <Image source={require('./assets/images/lock.png')} style={styles.settingIcon} />
      <Text style={styles.settingButtonText}>Change Password</Text>
    </View>
  </TouchableOpacity>

  <Text style={styles.sectionTitle}>Profile Settings</Text>
  <Text style={styles.subtitle}>Change PFP, location, name</Text>

  <TouchableOpacity style={styles.settingButton}>
    <View style={styles.settingContent}>
      <Image source={require('./assets/images/settings.png')} style={styles.settingIcon} />
      <Text style={styles.settingButtonText}>Edit Profile</Text>
    </View>
  </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfilePage;