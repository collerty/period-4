import { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const FashionWardrobeApp = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('signin'); // 'signin' or 'signup'
  const [activeTab, setActiveTab] = useState('Home');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [posts, setPosts] = useState([
    { id: 1, title: 'Summer Outfit', image: '👗', likes: 23 },
    { id: 2, title: 'Casual Friday', image: '👕', likes: 18 },
    { id: 3, title: 'Evening Look', image: '👠', likes: 31 },
  ]);
  const [closetItems, setClosetItems] = useState([
    { id: 1, name: 'Blue Dress', category: 'Dresses', image: '👗' },
    { id: 2, name: 'White Shirt', category: 'Tops', image: '👕' },
    { id: 3, name: 'Black Jeans', category: 'Bottoms', image: '👖' },
    { id: 4, name: 'Red Heels', category: 'Shoes', image: '👠' },
  ]);
  const [notifications, setNotifications] = useState(true);

  const tabs = [
    { id: 'Home', label: 'Home', icon: '🏠' },
    { id: 'Calendar', label: 'Calendar', icon: '📅' },
    { id: 'Wardrobe', label: 'Wardrobe', icon: '👗' },
    { id: 'Profile', label: 'Profile', icon: '👤' },
    { id: 'Outfit', label: 'Outfit of the day', icon: '✨' },
    { id: 'FirstTime', label: 'First time pages', icon: '🌟' },
  ];

  const renderHome = () => (
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
              <Text style={styles.postLikes}>❤️ {item.likes} likes</Text>
            </View>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>Trends</Text>
      <Text style={styles.subtitle}>Posts having most likes in the last 24h</Text>
      
      <View style={styles.trendCard}>
        <Text style={styles.trendText}>🔥 Trending: Summer Vibes</Text>
        <Text style={styles.trendSubtext}>+156% engagement</Text>
      </View>
    </ScrollView>
  );

  const renderCalendar = () => (
    <ScrollView style={styles.content}>
      <Text style={styles.sectionTitle}>Calendar</Text>
      <Text style={styles.subtitle}>Sort event and plan your future outfit</Text>
      
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Event</Text>
      </TouchableOpacity>

      <View style={styles.calendarCard}>
        <Text style={styles.calendarDate}>Today - May 26</Text>
        <Text style={styles.calendarEvent}>📅 Dinner Date</Text>
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

  const renderWardrobe = () => (
    <ScrollView style={styles.content}>
      <Text style={styles.sectionTitle}>Wardrobe</Text>
      
      <View style={styles.wardrobeOptions}>
        <TouchableOpacity style={styles.wardrobeButton}>
          <Text style={styles.wardrobeButtonText}>📱 Scan Cloth</Text>
          <Text style={styles.wardrobeSubtext}>Scan cloth, make outfit templates, get AI recommendations</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.wardrobeButton}>
          <Text style={styles.wardrobeButtonText}>👔 Outfit Templates</Text>
          <Text style={styles.wardrobeSubtext}>Make outfit template to use later / share with someone</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.wardrobeButton}>
          <Text style={styles.wardrobeButtonText}>🤖 AI Recommendations</Text>
          <Text style={styles.wardrobeSubtext}>Outfit recommendations based off your closet items</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.wardrobeButton}>
          <Text style={styles.wardrobeButtonText}>💡 Monetization Idea</Text>
          <Text style={styles.wardrobeSubtext}>Sale suggestion based off the closet</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  const renderProfile = () => (
    <ScrollView style={styles.content}>
      <Text style={styles.sectionTitle}>Profile</Text>
      
      <View style={styles.profileCard}>
        <Text style={styles.profileIcon}>👤</Text>
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
          onValueChange={setNotifications}
        />
      </View>

      <Text style={styles.sectionTitle}>Settings Page</Text>
      <Text style={styles.subtitle}>Change app language, theme (light, dark) etc.</Text>
      
      <TouchableOpacity style={styles.settingButton}>
        <Text style={styles.settingButtonText}>⚙️ App Settings</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.settingButton}>
        <Text style={styles.settingButtonText}>🔐 Change Password</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Profile Settings</Text>
      <Text style={styles.subtitle}>Change PFP, location, name</Text>
      
      <TouchableOpacity style={styles.settingButton}>
        <Text style={styles.settingButtonText}>✏️ Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  const renderOutfitOfTheDay = () => (
    <ScrollView style={styles.content}>
      <Text style={styles.sectionTitle}>Outfit of the Day</Text>
      <Text style={styles.subtitle}>AI suggestion for your personal outfit (weather and closet are taken into account)</Text>
      
      <View style={styles.ootdCard}>
        <Text style={styles.ootdIcon}>✨</Text>
        <Text style={styles.ootdTitle}>Today's Recommendation</Text>
        <Text style={styles.ootdWeather}>☀️ Sunny, 24°C</Text>
        <Text style={styles.ootdOutfit}>Blue Dress + White Sneakers</Text>
        <Text style={styles.ootdNote}>Perfect for a casual day out!</Text>
      </View>

      <TouchableOpacity style={styles.regenerateButton}>
        <Text style={styles.regenerateButtonText}>🔄 Get New Suggestion</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Trending Outfits</Text>
      <Text style={styles.subtitle}>See what's trending today</Text>
      
      <View style={styles.trendingOutfits}>
        <View style={styles.trendingItem}>
          <Text style={styles.trendingIcon}>👗</Text>
          <Text style={styles.trendingText}>Floral Dresses</Text>
        </View>
        <View style={styles.trendingItem}>
          <Text style={styles.trendingIcon}>👕</Text>
          <Text style={styles.trendingText}>Oversized Tees</Text>
        </View>
      </View>
    </ScrollView>
  );

  const renderFirstTimePages = () => (
    <ScrollView style={styles.content}>
      <Text style={styles.sectionTitle}>Welcome! 👋</Text>
      <Text style={styles.subtitle}>First time pages - What are the pages user sees when he/she opens an app. It should include login, app features description and user-friendly start guide.</Text>
      
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeIcon}>🌟</Text>
        <Text style={styles.welcomeTitle}>Welcome to FashionApp!</Text>
        <Text style={styles.welcomeText}>Discover your perfect style</Text>
      </View>

      <Text style={styles.sectionTitle}>Show App Features</Text>
      <Text style={styles.subtitle}>Page with cool animation to show the "glowing" features of the app</Text>
      
      <View style={styles.featuresList}>
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>📱</Text>
          <Text style={styles.featureText}>AI-Powered Outfit Suggestions</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>👗</Text>
          <Text style={styles.featureText}>Digital Wardrobe Management</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>📅</Text>
          <Text style={styles.featureText}>Event-Based Outfit Planning</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Ask to Create Account or Login</Text>
      <Text style={styles.subtitle}>Suggest easy flow to create an account</Text>
      
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Create Account</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Starter Guide</Text>
      <Text style={styles.subtitle}>After creating an account, suggest to scan the cloth, explain how it works and show where is most important UI.</Text>
      
      <View style={styles.guideCard}>
        <Text style={styles.guideStep}>Step 1: Scan your clothes 📱</Text>
        <Text style={styles.guideStep}>Step 2: Build your digital wardrobe 👔</Text>
        <Text style={styles.guideStep}>Step 3: Get AI recommendations ✨</Text>
      </View>
    </ScrollView>
  );

  const renderLandingPage = () => (
    <View style={styles.landingContainer}>
      <View style={styles.landingContent}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            Tail
            <TouchableOpacity 
              style={styles.clothButton}
              onPress={() => {
                setShowLanding(false);
                setShowAuth(true);
              }}
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
          onPress={() => {
            setShowLanding(false);
            setShowAuth(true);
          }}
        >
          <Text style={styles.landingButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderAuthPage = () => (
    <View style={styles.authContainer}>
      <ScrollView contentContainerStyle={styles.authContent} showsVerticalScrollIndicator={false}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => {
            setShowAuth(false);
            setShowLanding(true);
          }}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.authHeader}>
          <Text style={styles.authTitle}>
            {authMode === 'signin' ? 'Welcome Back!' : 'Join Tailored'}
          </Text>
          <Text style={styles.authSubtitle}>
            {authMode === 'signin' 
              ? 'Sign in to continue your style journey' 
              : 'Create your account and discover your perfect style'
            }
          </Text>
        </View>

        <View style={styles.authForm}>
          {authMode === 'signup' && (
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your full name"
                placeholderTextColor="#999"
                value={fullName}
                onChangeText={setFullName}
              />
            </View>
          )}

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {authMode === 'signup' && (
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Confirm your password"
                placeholderTextColor="#999"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>
          )}

          <TouchableOpacity 
            style={styles.authButton}
            onPress={() => {
              setShowAuth(false);
              // Reset form
              setEmail('');
              setPassword('');
              setConfirmPassword('');
              setFullName('');
            }}
          >
            <Text style={styles.authButtonText}>
              {authMode === 'signin' ? 'Sign In' : 'Create Account'}
            </Text>
          </TouchableOpacity>

          {authMode === 'signin' && (
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.authSwitch}>
          <Text style={styles.authSwitchText}>
            {authMode === 'signin' 
              ? "Don't have an account? " 
              : "Already have an account? "
            }
          </Text>
          <TouchableOpacity 
            onPress={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
          >
            <Text style={styles.authSwitchLink}>
              {authMode === 'signin' ? 'Sign Up' : 'Sign In'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialAuth}>
          <Text style={styles.socialAuthText}>Or continue with</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>📱 Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>📘 Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );

    let content;

  if (showLanding) {
    content = renderLandingPage();
  } else if (showAuth) {
    content = renderAuthPage();
  } else {
    switch (activeTab) {
      case 'Home':
        content = renderHome();
        break;
      case 'Calendar':
        content = renderCalendar();
        break;
      case 'Wardrobe':
        content = renderWardrobe();
        break;
      case 'Profile':
        content = renderProfile();
        break;
      case 'Outfit':
        content = renderOutfitOfTheDay();
        break;
      case 'FirstTime':
        content = renderFirstTimePages();
        break;
      default:
        content = renderHome();
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#808000" />
      
      {!showLanding && !showAuth && (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Tailored</Text>
        </View>
      )}

      <View style={styles.body}>
        {content}
      </View>

      {!showLanding && !showAuth && (
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
      )}
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#808000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  addButton: {
    backgroundColor: '#808000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  postCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  postIcon: {
    fontSize: 40,
    marginRight: 15,
  },
  postInfo: {
    flex: 1,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  postLikes: {
    fontSize: 14,
    color: '#666',
  },
  trendCard: {
    backgroundColor: '#FFF3CD',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  trendText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#856404',
    marginBottom: 5,
  },
  trendSubtext: {
    fontSize: 14,
    color: '#856404',
  },
  calendarCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  calendarDate: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  calendarEvent: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  calendarOutfit: {
    fontSize: 14,
    color: '#808000',
  },
  previewCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  weatherText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1976D2',
    marginBottom: 8,
  },
  outfitText: {
    fontSize: 14,
    color: '#1976D2',
  },
  wardrobeOptions: {
    marginTop: 20,
  },
  wardrobeButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  wardrobeButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  wardrobeSubtext: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileIcon: {
    fontSize: 60,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  profileStats: {
    fontSize: 14,
    color: '#666',
  },
  closetItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    margin: 5,
    flex: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  closetIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  closetName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 3,
    textAlign: 'center',
  },
  closetCategory: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  settingButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  settingButtonText: {
    fontSize: 16,
    color: '#333',
  },
  ootdCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  ootdIcon: {
    fontSize: 50,
    marginBottom: 10,
  },
  ootdTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  ootdWeather: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  ootdOutfit: {
    fontSize: 18,
    fontWeight: '600',
    color: '#808000',
    marginBottom: 8,
  },
  ootdNote: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  regenerateButton: {
    backgroundColor: '#28A745',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  regenerateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  trendingOutfits: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  trendingItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  trendingIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  trendingText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  welcomeCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  welcomeIcon: {
    fontSize: 60,
    marginBottom: 15,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  featuresList: {
    marginBottom: 20,
  },
  featureItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIcon: {
    fontSize: 30,
    marginRight: 15,
  },
  featureText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  primaryButton: {
    backgroundColor: '#808000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#808000',
  },
  secondaryButtonText: {
    color: '#808000',
    fontSize: 18,
    fontWeight: '600',
  },
  guideCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  guideStep: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    paddingLeft: 10,
  },
  tabContainer: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 8,
  },
  tabScrollView: {
    paddingHorizontal: 5,
  },
  tabButton: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 2,
    borderRadius: 8,
    minWidth: 80,
  },
  activeTabButton: {
    backgroundColor: '#808000',
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 11,
    color: '#666',
    textAlign: 'center',
    lineHeight: 12,
  },
  activeTabLabel: {
    color: 'white',
    fontWeight: '600',
  },
  // Landing Page Styles
  landingContainer: {
    flex: 1,
    backgroundColor: '#808000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  landingContent: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  logoContainer: {
    marginBottom: 30,
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  clothButton: {
    backgroundColor: 'white',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  clothButtonText: {
    fontSize: 24,
  },
  tagline: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  landingButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  landingButtonText: {
    color: '#808000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Auth Page Styles
  authContainer: {
    flex: 1,
    backgroundColor: '#808000',
  },
  authContent: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 40,
  },
  
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  authHeader: {
    alignItems: 'center',
    marginBottom: 40,
  },
  authTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  authSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 22,
  },
  authForm: {
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
    fontWeight: '600',
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  authButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  authButtonText: {
    color: '#808000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: 15,
  },
  forgotPasswordText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  authSwitch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  authSwitchText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16,
  },
  authSwitchLink: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  socialAuth: {
    alignItems: 'center',
  },
  socialAuthText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16,
    marginBottom: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  socialButton: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  socialButtonText: {
    color: '#808000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default FashionWardrobeApp;