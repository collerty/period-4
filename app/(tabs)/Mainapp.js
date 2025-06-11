import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { initialData } from '../data/AppData';
import CalendarPage from '../pages/CalendarPage';
import FirstTimePagesPage from '../pages/FirstTimePagesPage';
import HomePage from '../pages/HomePage';
import OutfitOfTheDayPage from '../pages/OutfitOfTheDayPage';
import ProfilePage from '../pages/ProfilePage';
import WardrobePage from '../pages/WardrobePage';
import { styles } from '../styles/AppStyles';

const MainApp = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [posts, setPosts] = useState(initialData.posts);
  const [closetItems, setClosetItems] = useState(initialData.closetItems);
  const [notifications, setNotifications] = useState(true);

  const tabs = [
    { id: 'Home', label: 'Home', icon: '🏠' },
    { id: 'Calendar', label: 'Calendar', icon: '📅' },
    { id: 'Wardrobe', label: 'Wardrobe', icon: '👗' },
    { id: 'Profile', label: 'Profile', icon: '👤' },
    { id: 'Outfit', label: 'Outfit of the day', icon: '✨' },
    { id: 'FirstTime', label: 'First time pages', icon: '🌟' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <HomePage posts={posts} />;
      case 'Calendar':
        return <CalendarPage />;
      case 'Wardrobe':
        return <WardrobePage />;
      case 'Profile':
        return (
          <ProfilePage 
            closetItems={closetItems}
            notifications={notifications}
            onNotificationsChange={setNotifications}
          />
        );
      case 'Outfit':
        return <OutfitOfTheDayPage />;
      case 'FirstTime':
        return <FirstTimePagesPage />;
      default:
        return <HomePage posts={posts} />;
    }
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tailored</Text>
      </View>

      <View style={styles.body}>
        {renderContent()}
      </View>

      <View style={styles.tabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabScrollView}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tabButton,
                activeTab === tab.id && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab(tab.id)}
            >
              <Text style={styles.tabIcon}>{tab.icon}</Text>
              <Text
                style={[
                  styles.tabLabel,
                  activeTab === tab.id && styles.activeTabLabel,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default MainApp;