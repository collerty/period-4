import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

const AuthPage = ({
  authMode,
  email,
  password,
  confirmPassword,
  fullName,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onFullNameChange,
  onBack,
  onAuthSuccess,
  onAuthModeSwitch
}) => {
  return (
    <View style={styles.authContainer}>
      <ScrollView contentContainerStyle={styles.authContent} showsVerticalScrollIndicator={false}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={onBack}
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
                onChangeText={onFullNameChange}
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
              onChangeText={onEmailChange}
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
              onChangeText={onPasswordChange}
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
                onChangeText={onConfirmPasswordChange}
                secureTextEntry
              />
            </View>
          )}

          <TouchableOpacity 
            style={styles.authButton}
            onPress={onAuthSuccess}
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
          <TouchableOpacity onPress={onAuthModeSwitch}>
            <Text style={styles.authSwitchLink}>
              {authMode === 'signin' ? 'Sign Up' : 'Sign In'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialAuth}>
          <Text style={styles.socialAuthText}>Or continue with</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <View style={styles.buttonContent}>
                <Image source={require('../assets/images/mobile_phone.png')} style={styles.socialIcon} />
                <Text style={styles.socialButtonText}>Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <View style={styles.buttonContent}>
                <Image source={require('../assets/images/book.png')} style={styles.socialIcon} />
                <Text style={styles.socialButtonText}>Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthPage;