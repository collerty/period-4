import React from 'react';
import {ScrollView} from 'react-native';
import {
  Box,
  Text,
  Input,
  InputField,
  VStack,
  HStack,
  Center,
  Pressable,
} from '@gluestack-ui/themed';
import { PrimaryButton } from '../ui/button';
import { AntDesign } from '@expo/vector-icons';

interface AuthPageProps {
  authMode: 'signin' | 'signup';
  email: string;
  password: string;
  confirmPassword?: string;
  fullName?: string;
  onEmailChange: (text: string) => void;
  onPasswordChange: (text: string) => void;
  onConfirmPasswordChange?: (text: string) => void;
  onFullNameChange?: (text: string) => void;
  onAuthSuccess: () => void;
  onAuthModeSwitch: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({
                                             authMode,
                                             email,
                                             password,
                                             confirmPassword,
                                             fullName,
                                             onEmailChange,
                                             onPasswordChange,
                                             onConfirmPasswordChange,
                                             onFullNameChange,
                                             onAuthSuccess,
                                             onAuthModeSwitch
                                           }) => {
  return (
        <Box flex={1} bg={"$backgroundLight0"}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box px="$6" py="$8">
              <VStack space="lg">
                {/* Header */}
                <VStack space="sm" alignItems="center" py="$6">
                  <Text fontSize="$2xl" fontWeight="$heading" color="$textLight900" textAlign="center">
                    {authMode === 'signin' ? 'Welcome Back!' : 'Join Tailored'}
                  </Text>
                  <Text fontSize="$md" color="$textLight900" textAlign="center" opacity={0.9}>
                    {authMode === 'signin'
                        ? 'Sign in to continue your style journey'
                        : 'Create your account and discover your perfect style'
                    }
                  </Text>
                </VStack>

                {/* Form */}
                <VStack space="md" py="$4">
                  {authMode === 'signup' && (
                      <VStack space="xs">
                        <Text fontSize="$sm" fontWeight="$button" color="$textLight900">
                          Full Name
                        </Text>
                        <Input>
                          <InputField
                              placeholder="Enter your full name"
                              placeholderTextColor="#999"
                              value={fullName}
                              onChangeText={onFullNameChange}
                          />
                        </Input>
                      </VStack>
                  )}

                  <VStack space="xs">
                    <Text fontSize="$sm" fontWeight="$button" color="$textLight900">
                      Emailaaaa
                    </Text>
                    <Input>
                      <InputField
                          placeholder="Enter your email"
                          placeholderTextColor="#999"
                          value={email}
                          onChangeText={onEmailChange}
                          keyboardType="email-address"
                          autoCapitalize="none"
                          borderColor="$textLight500"
                          borderRadius="$xl"
                          _focus={{
                            borderColor: "$primary500",
                          }}
                      />
                    </Input>
                  </VStack>

                  <VStack space="xs">
                    <Text fontSize="$sm" fontWeight="$button" color="$textLight900">
                      Password
                    </Text>
                    <Input>
                      <InputField
                          placeholder="Enter your password"
                          placeholderTextColor="#999"
                          value={password}
                          onChangeText={onPasswordChange}
                          secureTextEntry
                      />
                    </Input>
                  </VStack>

                  {authMode === 'signup' && (
                      <VStack space="xs">
                        <Text fontSize="$sm" fontWeight="$button" color="$textLight900">
                          Confirm Password
                        </Text>
                        <Input>
                          <InputField
                              placeholder="Confirm your password"
                              placeholderTextColor="#999"
                              value={confirmPassword}
                              onChangeText={onConfirmPasswordChange}
                              secureTextEntry
                          />
                        </Input>
                      </VStack>
                  )}

                  <PrimaryButton 
                    onPress={onAuthSuccess} 
                    size="lg"
                    fullWidth
                  >
                    {authMode === 'signin' ? 'Sign In' : 'Create Account'}
                  </PrimaryButton>

                  {authMode === 'signin' && (
                      <Center>
                        <Pressable onPress={() => {
                        }}>
                          <Text fontSize="$sm" color="$textLight900" mt="$2" opacity={0.9}>
                            Forgot Password?
                          </Text>
                        </Pressable>
                      </Center>
                  )}
                </VStack>



                {/* Social Auth */}
                <VStack space="md" py="$4">
                  <Center>
                    <Text fontSize="$md" color="$textLight900" opacity={0.9}>
                      Or continue with
                    </Text>
                  </Center>

                  <Center>
                    <Pressable>
                      <Box
                          borderWidth={1}
                          borderColor="$textLight300"
                          bg="$backgroundLight0"
                          px="$6"
                          py="$3"
                          borderRadius="$lg"
                          flexDirection="row"
                          alignItems="center"
                          space="sm"
                      >
                        <AntDesign name="google" size={20} color="#4285F4" />
                        <Text fontSize="$sm" fontWeight="$button" color="$textLight900" ml="$2">
                          Continue with Google
                        </Text>
                      </Box>
                    </Pressable>
                  </Center>

                  {/* Auth Mode Switch */}
                  <Center py="$4">
                    <HStack space="xs" alignItems="center">
                      <Text fontSize="$md" color="$textLight900" opacity={0.9}>
                        {authMode === 'signin'
                            ? "Don't have an account? "
                            : "Already have an account? "
                        }
                      </Text>
                      <Pressable onPress={onAuthModeSwitch}>
                        <Text fontSize="$md" color="$textLight900" fontWeight="$button">
                          {authMode === 'signin' ? 'Sign Up' : 'Sign In'}
                        </Text>
                      </Pressable>
                    </HStack>
                  </Center>
                </VStack>
              </VStack>
            </Box>
          </ScrollView>
        </Box>
  );
};

export default AuthPage;
