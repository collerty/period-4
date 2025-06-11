import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { appStyles } from './styles'; // Import your styles

const FAQPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqData = [
    {
      id: 1,
      question: "How does the AI outfit recommendation work?",
      answer: "Our AI analyzes your wardrobe items, current weather conditions, and your personal style preferences to suggest the perfect outfit for any occasion. The more you use the app, the better it gets at understanding your style!"
    },
    {
      id: 2,
      question: "Can I share my outfits with friends?",
      answer: "Yes! You can share your outfit posts with the community, get likes and comments, and discover trending styles from other users. You can also create outfit templates to share with specific friends."
    },
    {
      id: 3,
      question: "How do I scan my clothes?",
      answer: "Simply tap the 'Scan Cloth' button in the Wardrobe section, point your camera at the clothing item, and our AI will automatically identify and categorize it. Make sure to have good lighting for best results."
    },
    {
      id: 4,
      question: "Is my wardrobe data secure?",
      answer: "Absolutely! We use industry-standard encryption to protect your data. Your wardrobe information is stored securely and is never shared with third parties without your explicit consent."
    },
    {
      id: 5,
      question: "How accurate are the weather-based recommendations?",
      answer: "Our weather integration uses real-time data from reliable weather services. The AI considers temperature, humidity, precipitation, and UV index to suggest appropriate clothing choices."
    },
    {
      id: 6,
      question: "Can I use the app offline?",
      answer: "Some features like viewing your wardrobe and previously generated outfits work offline. However, AI recommendations, weather updates, and social features require an internet connection."
    },
    {
      id: 7,
      question: "How do I create outfit templates?",
      answer: "Go to the Wardrobe section, select 'Outfit Templates', then choose items from your closet to create a combination. You can save it with a name and use it for future occasions or share it with friends."
    },
    {
      id: 8,
      question: "What should I do if the AI doesn't recognize my clothing item?",
      answer: "If the scan doesn't work perfectly, you can manually add items by selecting the category and adding details. You can also retake the photo with better lighting or a different angle."
    },
    {
      id: 9,
      question: "How do I change my notification settings?",
      answer: "Go to your Profile, then Settings, and you'll find notification preferences. You can customize alerts for outfit suggestions, weather updates, social interactions, and more."
    },
    {
      id: 10,
      question: "Can I sync my wardrobe across multiple devices?",
      answer: "Yes! Your wardrobe data is synced to your account, so you can access it from any device where you're logged in. Changes made on one device will appear on all your devices."
    }
  ];

  const filteredFaq = faqData.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const renderFaqItem = ({ item }) => (
    <View style={appStyles.faqContainer}>
      <TouchableOpacity
        style={appStyles.faqHeader}
        onPress={() => toggleFaq(item.id)}
      >
        <Text style={appStyles.faqQuestion}>{item.question}</Text>
        <Text style={appStyles.faqIcon}>
          {expandedFaq === item.id ? '−' : '+'}
        </Text>
      </TouchableOpacity>
      {expandedFaq === item.id && (
        <View style={appStyles.faqAnswer}>
          <Text style={appStyles.faqAnswerText}>{item.answer}</Text>
        </View>
      )}
    </View>
  );

  return (
    <ScrollView style={appStyles.content}>
      <Text style={appStyles.sectionTitle}>Frequently Asked Questions</Text>
      <Text style={appStyles.subtitle}>
        Find answers to common questions about using Tailored
      </Text>

      {/* Search Bar */}
      <View style={appStyles.searchContainer}>
        <TextInput
          style={appStyles.searchInput}
          placeholder="Search FAQs..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* FAQ List */}
      <FlatList
        data={filteredFaq}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderFaqItem}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />

      {/* Contact Support Section */}
      <View style={appStyles.contactSupport}>
        <Text style={appStyles.contactSupportText}>Still have questions?</Text>
        <Text style={appStyles.contactSupportSubtext}>
          Our support team is here to help you with any issues or questions you might have.
        </Text>
        <TouchableOpacity style={appStyles.contactButton}>
          <Text style={appStyles.contactButtonText}>Contact Support</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Tips Section */}
      <Text style={appStyles.sectionTitle}>Quick Tips</Text>
      <Text style={appStyles.subtitle}>
        Get the most out of your Tailored experience
      </Text>

      <View style={appStyles.postCard}>
        <Text style={appStyles.postIcon}>💡</Text>
        <View style={appStyles.postInfo}>
          <Text style={appStyles.postTitle}>Scan in Good Lighting</Text>
          <Text style={appStyles.postLikes}>Natural light works best for clothing recognition</Text>
        </View>
      </View>

      <View style={appStyles.postCard}>
        <Text style={appStyles.postIcon}>📱</Text>
        <View style={appStyles.postInfo}>
          <Text style={appStyles.postTitle}>Update Your Location</Text>
          <Text style={appStyles.postLikes}>Enable location for accurate weather-based recommendations</Text>
        </View>
      </View>

      <View style={appStyles.postCard}>
        <Text style={appStyles.postIcon}>👥</Text>
        <View style={appStyles.postInfo}>
          <Text style={appStyles.postTitle}>Engage with Community</Text>
          <Text style={appStyles.postLikes}>Like and comment on posts to discover new styles</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default FAQPage;