import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Button, ButtonText} from '@/components/ui/button';
import {Input, InputField} from '@/components/ui/input';
import {VStack} from '@/components/ui/vstack';
import {Link, useRouter} from 'expo-router';
import {Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel} from '@/components/ui/checkbox';
import {CheckIcon} from '@/components/ui/icon';
import {login} from '@/lib/api';
import {useSession} from '@/lib/ctx';

export default function SignUp() {
  const router = useRouter();
  const {signIn} = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    setLoading(true);
    try {
      console.log()
      const data = await login({email, password});
      console.log(data);
      if (data.accessToken) {
        signIn(data.accessToken);
        // Navigation is handled by SessionProvider
      } else {
        alert('Registration failed: No accessToken returned');
      }
    } catch (err: any) {
      alert('Registration failed: ' + (err.message || err));
    } finally {
      setLoading(false);
    }
  };

  return (
      <VStack className="flex-1 px-6 py-10 bg-background-0 justify-start">
        <Text className="text-2xl font-bold text-typography-900 mb-8 mt-4">Sign in</Text>
        <VStack className="flex flex-col gap-6">
          <VStack className="space-y-4 mb-4">
            <VStack>
              <Text className="text-typography-900 font-medium text-base mb-1 mt-3">Email</Text>
              <Input className="rounded-xl" variant="outline">
                <InputField
                    placeholder="Your email"
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor="#A0A0A0"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
              </Input>
            </VStack>
            <VStack>
              <Text className="text-typography-900 font-medium text-base mb-1 mt-3">Password</Text>
              <Input className="rounded-xl" variant="outline">
                <InputField
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    placeholderTextColor="#A0A0A0"
                    secureTextEntry
                />
              </Input>
            </VStack>
          </VStack>

          <Button
              size="lg"
              className="w-full rounded-xl mb-4 bg-primary-500"
              onPress={handleSubmit}
              isDisabled={loading}
          >
            <ButtonText className="text-white">Submit</ButtonText>
          </Button>
        </VStack>
        <Text className="text-center text-typography-400 mt-8">
          Don&#39;t have an account?{' '}
          <Link href="/sign-up" className="text-typography-900 font-bold">
            Sign up
          </Link>
        </Text>
      </VStack>
  )
      ;
}