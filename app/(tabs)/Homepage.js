import React from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles.js';

const HomePage = ({ posts }) => {
  return (
    <ScrollView style={styles.content}>
      <Text style={styles.sectionTitle}>Posts</Text>
      <Text style={styles.subtitle}>Post ideas / Share outfit</Text>
      
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add New Post</Text>
      </TouchableOpacity>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <Text style={styles.postIcon}>{item.image}</Text>
            <View style={styles.postInfo}>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Image source={require('../assets/images/heart.png')} style={styles.postLikeIcon} />
              <Text style={styles.postLikes}> {item.likes} likes</Text>
            </View>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>Trends</Text>
      <Text style={styles.subtitle}>Posts having most likes in the last 24h</Text>
      
      <View style={styles.trendCard}>
        <View style={styles.trendRow}>
          <Image source={require('../assets/images/fire.png')} style={styles.trendIcon} />
          <Text style={styles.trendText}> Trending: Summer Vibes</Text>
          </View>
          <Text style={styles.trendSubtext}>+156% engagement</Text>
      </View>
    </ScrollView>
  );
};

export default HomePage;