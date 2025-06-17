import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolScale, SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';


// Removed duplicate IconSymbol component to resolve naming conflict

// Define the IconMapping type
// Use React.ComponentProps to infer the prop types for MaterialIcons
type MaterialIconsProps = React.ComponentProps<typeof MaterialIcons>;

type MaterialIconName = NonNullable<MaterialIconsProps['name']>;

// Define the valid icon symbol names used in your mapping
export type IconSymbolName = 'house.fill' | 'paperplane.fill' | 'chevron.left.forwardslash.chevron.right' | 'chevron.right';

type IconMapping = { [key in IconSymbolName]: MaterialIconName };

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING: IconMapping = {
  // See MaterialIcons here: https://icons.expo.fyi
  // See SF Symbols in the SF Symbols app on Mac.
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
};

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
  scale = 'medium',
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
  scale?: SymbolScale;
}) {
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name]}
      style={style}
    />
  );
}

