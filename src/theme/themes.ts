import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#C48A9A', // Dusty Rose
    onPrimary: '#FFFFFF',
    primaryContainer: '#E6C2CB', // Primary Soft
    secondary: '#B6A6D6', // Lavender Mist
    onSecondary: '#FFFFFF',
    background: '#FAF7F6', // Warm off-white
    surface: '#FFFFFF',
    onSurface: '#2E2E2E', // Primary Text
    onSurfaceVariant: '#6E6E6E', // Secondary Text
    outline: '#E6E4E8',
  },
};

export const softDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#C48A9A',
    onPrimary: '#FFFFFF',
    primaryContainer: '#3D2B30', // Custom dark variant of primary
    secondary: '#B6A6D6',
    onSecondary: '#1C1A1F',
    background: '#1C1A1F', // Deep plum-gray
    surface: '#26232A',
    onSurface: '#E6E4E8', // Primary Text
    onSurfaceVariant: '#A9A6AD', // Secondary Text
    outline: '#38353B',
  },
};
