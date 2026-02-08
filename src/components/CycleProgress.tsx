import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

interface CycleProgressProps {
    currentDay: number;
    totalDays: number;
    periodInDays: number;
}

const SIZE = 250;

export const CycleProgress: React.FC<CycleProgressProps> = ({ currentDay, totalDays, periodInDays }) => {
    const theme = useTheme();

    return (
        <View style={styles.container}>
            {/* Outer Circle acting as progress track */}
            <View
                style={[
                    styles.circle,
                    {
                        borderColor: theme.colors.surfaceVariant,
                        backgroundColor: theme.colors.surface,
                    }
                ]}
            >
                {/* Inner Content */}
                <View style={styles.content}>
                    <Text variant="headlineLarge" style={{ color: theme.colors.primary, fontWeight: 'bold' }}>
                        Day {currentDay}
                    </Text>
                    <Text variant="bodyMedium" style={{ color: theme.colors.secondary }}>
                        Period in {periodInDays} days
                    </Text>
                    <Text variant="labelSmall" style={{ color: theme.colors.outline, marginTop: 4 }}>
                        Low chance of pregnancy
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 24,
    },
    circle: {
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        borderWidth: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    content: {
        alignItems: 'center',
    },
});
