import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { useAppTheme } from '../theme/ThemeProvider';

export const HomeScreen = () => {
    const theme = useTheme();
    const { themeMode } = useAppTheme();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.content}>
                <Text variant="displayMedium" style={styles.title}>
                    Lunéa
                </Text>
                <Text variant="bodyLarge" style={styles.subtitle}>
                    Your wellness, simplified.
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    title: {
        fontFamily: 'Inter_700Bold',
        letterSpacing: -1,
        marginBottom: 8,
    },
    subtitle: {
        fontFamily: 'Inter_400Regular',
        opacity: 0.6,
        textAlign: 'center',
    },
});
