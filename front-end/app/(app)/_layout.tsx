import React from 'react';
import {Tabs} from 'expo-router';
import {Image} from 'react-native';
import {VStack} from "@/components/ui/vstack";

const icons = {
  suggestions: require('@/assets/images/suggestions-icon60x60.png'),
  calendar: require('@/assets/images/calendar-icon60x60.png'),
  index: require('@/assets/images/logo32x32.png'),
  wardrobe: require('@/assets/images/wardrobe-icon60x60.png'),
  profile: require('@/assets/images/profile-icon60x60.png'),
};

export default function AppLayout() {
  return (
      <Tabs
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              const icon = icons[route.name as keyof typeof icons];
              if (!icon) return null;
              return (
                  <VStack className="flex flex-1 w-full h-full justify-center items-center">
                    <Image
                        source={icon}
                        style={{
                          width: route.name === 'index' ? 40 : 28,
                          height: route.name === 'index' ? 40 : 28,
                          tintColor: focused ? '#222' : '#888'
                        }}
                        resizeMode="contain"
                    />
                  </VStack>
              );
            },
            tabBarShowLabel: true,
            tabBarActiveTintColor: '#222',
            tabBarInactiveTintColor: '#888',
            headerShown: false,
            tabBarStyle: {
              // background: "red",
              // position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 72,
              // paddingBottom: 8, // for safe area, can be adjusted
              zIndex: 30,
              backgroundColor: '#fff',
              // If you have a CSS variable for elevated background, use it here
              // backgroundColor: 'var(--background-elevated-2)',
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffset: {width: 0, height: -3},
              shadowOpacity: 0.2,
              shadowRadius: 6,
              elevation: 10,
              borderTopWidth: 0,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: "center"
            },
            tabBarItemStyle: {
              alignItems: 'center',
              flexDirection: 'row',
            },
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: '500',
              marginBottom: 2,
              // background: "red"
            },
            tabBarIconStyle: {
              alignItems: 'center',
              justifyContent: 'center',
              // background: "red"
            },
          })}
      >
        <Tabs.Screen name="suggestions" options={{title: 'Suggestions'}}/>
        <Tabs.Screen name="calendar" options={{title: 'Calendar'}}/>
        <Tabs.Screen name="index" options={{title: '', tabBarLabel: () => null}}/>
        <Tabs.Screen name="wardrobe" options={{title: 'Wardrobe'}}/>
        <Tabs.Screen name="profile" options={{title: 'Profile'}}/>
      </Tabs>
  );
} 