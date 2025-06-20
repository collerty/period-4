import React, { useState } from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import {
  Icon,
  CalendarDaysIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '../../components/ui/icon';


const styles = StyleSheet.create({
  outfitImage: {
    width: 40, // Corresponds to w-10
    height: 40, // Corresponds to h-10
    borderRadius: 6, // Corresponds to rounded-md
    marginVertical: 2, // Corresponds to my-0.5
  },
});


// Helper function to get the days in a month
const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

// Helper function to get the first day of the month
const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

// --- SOLUTION: Use require() for local images ---
// Make sure the paths in require() are correct relative to THIS file's location.
const outfits = {
  // Note: The .avif format might not be supported on all older devices.
  // Consider using .png or .jpg for broader compatibility.
  27: {
    images: [require('../../assets/images/outfits/clothes-1.avif')],
    more: 3,
  },
  30: {
    images: [require('../../assets/images/outfits/clothes-2.png')],
    more: 3,
  },
  20: {
    // This image should appear today (June 20th, 2025)
    images: [require('../../assets/images/outfits/clothes-3.png')],
  },
};

const CalendarPage = () => {
  // Initialize the calendar to the current date
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get today's date details to highlight the current day
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();


  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);


  // Create the grid of days
  const calendarGrid = [];
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarGrid.push(<Box className="flex-1 p-2 border-b border-gray-200" key={`empty-${i}`} />);
  }

  // Add cells for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === currentDay && month === currentMonth && year === currentYear;

    calendarGrid.push(
        <VStack className="flex-1 p-1 items-center border-b border-gray-200 min-h-[100px]" key={day}>
          <Pressable
              className={`w-8 h-8 rounded-full justify-center items-center ${
                  isToday ? 'bg-pink-500' : '' // Highlight current day
              }`}
          >
            <Text className={`${isToday ? 'text-white font-bold' : 'text-gray-500'}`}>
              {day}
            </Text>
          </Pressable>
          {outfits[day] && (
              <VStack className="mt-1">
                {outfits[day].images.map((img, index) => (
                    <Image
                        source={img}
                        style={styles.outfitImage} // <-- APPLY THE STYLE HERE
                        key={index}
                        resizeMode="cover"
                    />
                ))}
                {outfits[day].more && (
                    null
                    // <Box className="w-10 h-10 rounded-md my-0.5 bg-gray-200 justify-center items-center">
                      // /*<Text className="text-xs font-bold">+{outfits[day].more}</Text>*/}
                    // </Box>

                )}
              </VStack>
          )}
        </VStack>
    );
  }
  // Fill the remaining cells of the grid to ensure consistent layout
  while (calendarGrid.length % 7 !== 0) {
    calendarGrid.push(<Box className="flex-1 p-2 border-b border-gray-200" key={`empty-fill-${calendarGrid.length}`} />);
  }


  // Handle month navigation
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
      <ScrollView className="bg-white flex-1 pt-14">
        <Box className="p-4">
          {/* Header */}
          <HStack className="justify-between items-center mb-4">
            <Pressable onPress={goToPreviousMonth} className="p-2">
              <Icon as={ChevronLeftIcon} className="text-gray-800" />
            </Pressable>
            <HStack className="items-center">
              <Text className="text-2xl font-bold mr-2">{`${monthName} ${year}`}</Text>
            </HStack>
            <HStack className="items-center">
              <Pressable onPress={goToNextMonth} className="p-2">
                <Icon as={ChevronRightIcon} className="text-gray-800" />
              </Pressable>
              <Pressable className="p-2">
                <Icon as={CalendarDaysIcon} className="text-gray-800" />
              </Pressable>
            </HStack>
          </HStack>

          {/* Day Labels */}
          <HStack className="mb-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <Box className="flex-1 items-center" key={index}>
                  <Text className={`font-bold ${index === 0 ? 'text-red-500' : 'text-gray-800'}`}>{day}</Text>
                </Box>
            ))}
          </HStack>

          {/* Calendar Grid */}
          <VStack>
            {[...Array(Math.ceil(calendarGrid.length / 7))].map((_, weekIndex) => (
                <HStack key={weekIndex}>
                  {calendarGrid.slice(weekIndex * 7, (weekIndex + 1) * 7)}
                </HStack>
            ))}
          </VStack>
        </Box>
      </ScrollView>
  );
};

export default CalendarPage;