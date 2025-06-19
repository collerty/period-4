import React, { useState } from 'react';
import { useSession } from '../components/auth/ctx';
import AuthPage from '../components/auth/auth-page';

export default function SignIn() {
  const { signIn } = useSession();
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleAuthSuccess = () => {
    // For now, just sign in with mock data
    // Later you can add validation and API calls here
    if (authMode === 'signin') {
      if (!email || !password) {
        alert('Please fill in all fields');
        return;
      }
      signIn();
    } else {
      if (!email || !password || !confirmPassword || !fullName) {
        alert('Please fill in all fields');
        return;
      }
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      // Here you would typically make an API call to register
      signIn(); // For now, just sign in
    }
  };

  const handleAuthModeSwitch = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
    // Clear form when switching modes
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFullName('');
  };

  return (
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
      onAuthSuccess={handleAuthSuccess}
      onAuthModeSwitch={handleAuthModeSwitch}
    />
  );
}
