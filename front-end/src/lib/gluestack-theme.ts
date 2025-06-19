import { createConfig } from '@gluestack-ui/themed';
import { config as defaultConfig } from '@gluestack-ui/config';
import { createInput } from '@gluestack-ui/input';
import { styled, AsForwarder } from '@gluestack-style/react';
import { View, Pressable, TextInput } from 'react-native';

const CustomStyledRoot = styled(
  View,
  {
    borderWidth: 1,
    borderColor: '$textLight900', // Unfocused ring color
    borderRadius: '$xl', // More rounded
    flexDirection: 'row',
    overflow: 'hidden',
    alignContent: 'center',
    ':hover': {
      borderColor: '$textLight900',
    },
    ':focus': {
      borderColor: '$primary500',
      ':hover': {
        borderColor: '$primary500',
      },
    },
    ':disabled': {
      opacity: 0.4,
      ':hover': {
        borderColor: '$textLight900',
      },
    },
    _input: {
      py: 'auto',
      px: '$3',
    },
    _icon: {
      color: '$text400',
    },
    variants: {
      size: {
        xl: { h: '$12', _input: { props: { size: 'xl' } }, _icon: { props: { size: 'xl' } } },
        lg: { h: '$11', _input: { props: { size: 'lg' } }, _icon: { props: { size: 'lg' } } },
        md: { h: '$10', _input: { props: { size: 'md' } }, _icon: { props: { size: 'sm' } } },
        sm: { h: '$9', _input: { props: { size: 'sm' } }, _icon: { props: { size: 'xs' } } },
      },
      variant: {
        underlined: {
          _input: { _web: { outlineWidth: 0, outline: 'none' }, px: '$0' },
          borderWidth: 0,
          borderRadius: 0,
          borderBottomWidth: '$1',
          ':focus': { borderColor: '$primary500', _web: { boxShadow: 'inset 0 -1px 0 0 $primary500' } },
        },
        outline: {
          _input: { _web: { outlineWidth: 0, outline: 'none' } },
          ':focus': { borderColor: '$primary500', _web: { boxShadow: 'inset 0 0 0 1px $primary500' } },
        },
        rounded: {
          borderRadius: 999,
          _input: { px: '$4', _web: { outlineWidth: 0, outline: 'none' } },
          ':focus': { borderColor: '$primary500', _web: { boxShadow: 'inset 0 0 0 1px $primary500' } },
        },
      },
    },
    defaultProps: { size: 'md', variant: 'outline' },
  },
  { descendantStyle: ['_input', '_icon'] }
);

const CustomStyledIcon = styled(
  AsForwarder,
  {
    color: '$background800',
    variants: {
      size: {
        '2xs': { h: '$3', w: '$3', props: { size: 12 } },
        'xs': { h: '$3.5', w: '$3.5', props: { size: 14 } },
        'sm': { h: '$4', w: '$4', props: { size: 16 } },
        'md': { h: '$4.5', w: '$4.5', props: { size: 18 } },
        'lg': { h: '$5', w: '$5', props: { size: 20 } },
        'xl': { h: '$6', w: '$6', props: { size: 24 } },
      },
    },
    props: { size: 'md', fill: 'none' },
  },
  { resolveProps: ['stroke', 'fill'], ancestorStyle: ['_icon'] },
  { propertyTokenMap: { stroke: 'colors', fill: 'colors' } }
);

const CustomStyledSlot = styled(
  Pressable,
  {
    justifyContent: 'center',
    alignItems: 'center',
    _web: { ':disabled': { cursor: 'not-allowed' } },
  },
  { descendantStyle: ['_icon'] }
);

const CustomStyledInputField = styled(
  TextInput,
  {
    flex: 1,
    color: '$text900',
    props: { placeholderTextColor: '$text500' },
    _web: { cursor: 'text', ':disabled': { cursor: 'not-allowed' } },
    variants: {
      size: {
        '2xs': { fontSize: '$2xs' },
        'xs': { fontSize: '$xs' },
        'sm': { fontSize: '$sm' },
        'md': { fontSize: '$md' },
        'lg': { fontSize: '$lg' },
        'xl': { fontSize: '$xl' },
        '2xl': { fontSize: '$2xl' },
        '3xl': { fontSize: '$3xl' },
        '4xl': { fontSize: '$4xl' },
        '5xl': { fontSize: '$5xl' },
        '6xl': { fontSize: '$6xl' },
      },
    },
  },
  { ancestorStyle: ['_input'], resolveProps: ['placeholderTextColor'] },
  { propertyTokenMap: { placeholderTextColor: 'colors' } }
);

export const config = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      // Your Design System Colors
      primary0: '#FCFEFB',
      primary50: '#F0F9ED',
      primary100: '#E1F3DB',
      primary200: '#C3E7B7',
      primary300: '#A5DB93',
      primary400: '#87CF6F',
      primary500: '#71D440', // Your primary
      primary600: '#5AB833',
      primary700: '#439C26',
      primary800: '#2C8019',
      primary900: '#15640C',
      
      secondary0: '#FCFEFB',
      secondary50: '#F0F9ED',
      secondary100: '#E1F3DB',
      secondary200: '#C3E7B7',
      secondary300: '#A5DB93',
      secondary400: '#87E393', // Your secondary
      secondary500: '#6ADC81', // Your accent
      secondary600: '#5AB833',
      secondary700: '#439C26',
      secondary800: '#2C8019',
      secondary900: '#15640C',
      
      backgroundLight0: '#FCFEFB', // Your background
      backgroundLight50: '#F0F9ED',
      backgroundLight100: '#E1F3DB',
      backgroundLight200: '#C3E7B7',
      backgroundLight300: '#A5DB93',
      backgroundLight400: '#87CF6F',
      backgroundLight500: '#71D440',
      backgroundLight600: '#5AB833',
      backgroundLight700: '#439C26',
      backgroundLight800: '#2C8019',
      backgroundLight900: '#15640C',
      
      textLight50: '#F0F9ED',
      textLight100: '#E1F3DB',
      textLight200: '#C3E7B7',
      textLight300: '#A5DB93',
      textLight400: '#87CF6F',
      textLight500: '#71D440',
      textLight600: '#5AB833',
      textLight700: '#439C26',
      textLight800: '#2C8019',
      textLight900: '#090E07', // Your text color
    },
    fonts: {
      ...defaultConfig.tokens.fonts,
      heading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    },
    fontSizes: {
      ...defaultConfig.tokens.fontSizes,
      'h1': 36, // 4xl
      'h2': 30, // 3xl
      'h3': 24, // 2xl
      'h4': 20, // xl
      'body': 16, // base
      'body-sm': 14, // sm
      'caption': 12, // xs
      'button': 14, // sm
    },
    fontWeights: {
      ...defaultConfig.tokens.fontWeights,
      'heading': '700',
      'body': '400',
      'button': '600',
    },
    radii: {
      ...defaultConfig.tokens.radii,
      'lg': 12,
      'xl': 16,
    },
  },
  components: {
    ...defaultConfig.components,
    Input: createInput({
      Root: CustomStyledRoot,
      Icon: CustomStyledIcon,
      Slot: CustomStyledSlot,
      Input: CustomStyledInputField,
    }),
  },
});

type ConfigType = typeof config;

declare module '@gluestack-ui/themed' {
  interface UIConfig extends ConfigType {}
} 