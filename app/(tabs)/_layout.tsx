import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

type IconSymbolProps = {
  name: React.ComponentProps<typeof Ionicons>['name'];
  size?: number;
  color?: string;
};

// import { HapticTab } from '@/components/HapticTab';
// If HapticTab does not exist, use the default tabBarButton or create the component.
// For now, fallback to default Tabs behavior:
// Update the import path below if the file exists elsewhere, for example:
// import { IconSymbol } from '@/period-4/components/ui/IconSymbol';
// Or create the file at app/components/ui/IconSymbol.tsx if it does not exist.
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// If you have a Colors file elsewhere, update the path below:
// Or, if you don't use Colors in this file, you can remove this import entirely.
export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        // tabBarButton: HapticTab,
        headerShown: false,
        // tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="paper-plane" color={color} />,
        }}
      />
      <Tabs.Screen
        name="CalendarTab"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="OutfitTab"
        options={{
          title: 'Outfits',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="shirt" color={color} />,
        }}
      />
      <Tabs.Screen
        name="WardrobeTab"
        options={{
          title: 'Wardrobe',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="shirt" color={color} />,
        }}
      />
      <Tabs.Screen
        name="ProfileTab"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person" color={color} />,
        }}
      />
      <Tabs.Screen
        name="FAQTab"
        options={{
          title: 'FAQ',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="help-circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
