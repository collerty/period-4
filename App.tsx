import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AuthPage from './app/(tabs)/Authpage';
import LandingPage from './app/(tabs)/Landingpage';
import MainApp from './app/(tabs)/Mainapp';
import styles from './app/styles/styles';

const FashionWardrobeApp = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleGetStarted = () => {
    setShowLanding(false);
    setShowAuth(true);
  };

  const handleBackToLanding = () => {
    setShowAuth(false);
    setShowLanding(true);
  };

  const handleAuthSuccess = () => {
    setShowAuth(false);
    // Reset form
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFullName('');
  };

  const handleAuthModeSwitch = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
  };

  let content;
  if (showLanding) {
    content = <LandingPage onGetStarted={handleGetStarted} />;
  } else if (showAuth) {
    content = (
      <AuthPage
        authMode={authMode}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        fullName={fullName}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onConfirmPasswordChange={setConfirmPassword}
        onFullNameChange={setFullName}
        onBack={handleBackToLanding}
        onAuthSuccess={handleAuthSuccess}
        onAuthModeSwitch={handleAuthModeSwitch}
      />
    );
  } else {
    content = <MainApp />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#808000" />
      {content}
    </SafeAreaView>
  );
};

export default FashionWardrobeApp;