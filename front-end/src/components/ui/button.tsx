import React from 'react';
import { Button as GluestackButton, ButtonText } from '@gluestack-ui/themed';

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}

export function Button({
  children,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  loading = false,
}: ButtonProps) {
  return (
    <GluestackButton
      onPress={onPress}
      disabled={disabled || loading}
      bg={variant === 'primary' ? '$primary500' : 
          variant === 'secondary' ? '$secondary400' : 'transparent'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor={variant === 'outline' ? '$primary500' : undefined}
      px={size === 'sm' ? '$2' : size === 'lg' ? '$4' : '$3'}
      py={size === 'sm' ? '$1' : size === 'lg' ? '$3' : '$2'}
      borderRadius="$lg"
      width={fullWidth ? '100%' : undefined}
    >
      <ButtonText
        color={variant === 'primary' || variant === 'secondary' ? '$textLight50' : 
               variant === 'outline' ? '$primary500' : '$textLight900'}
        fontSize="$sm"
        fontWeight="$semibold"
      >
        {loading ? 'Loading...' : children}
      </ButtonText>
    </GluestackButton>
  );
}

// Export specific button variants for convenience
export function PrimaryButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant="primary" />;
}

export function SecondaryButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant="secondary" />;
}

export function OutlineButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant="outline" />;
}

export function GhostButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant="ghost" />;
} 