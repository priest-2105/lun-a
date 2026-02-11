import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { ThemeProvider } from './src/theme/ThemeProvider';
import { HomeScreen } from './src/screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './src/navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/context/AuthContext';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

function MainApp() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ThemeProvider>
          <StatusBar style="dark" translucent={true} backgroundColor="transparent" />
          <MainApp />
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
