import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { ChatbotScreen } from '../screens/ChatbotScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { AuthNavigator } from './AuthNavigator';
import { useAuth } from '../context/AuthContext';
import { useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const RootNavigator = () => {
    const theme = useTheme();
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <AuthNavigator />;
    }

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName: keyof typeof MaterialCommunityIcons.glyphMap = 'calendar-month';

                    if (route.name === 'Home') {
                        iconName = 'calendar-month';
                    } else if (route.name === 'Assistant') {
                        iconName = 'message-outline';
                    } else if (route.name === 'Profile') {
                        iconName = 'account-outline';
                    }

                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
                tabBarStyle: {
                    backgroundColor: theme.colors.surface,
                    borderTopColor: theme.colors.outline,
                    paddingBottom: 8,
                    paddingTop: 8,
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontFamily: 'Inter_500Medium',
                    fontSize: 12,
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Assistant" component={ChatbotScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};
