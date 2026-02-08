import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface QuickActionProps {
    onLogPeriod: () => void;
    onLogSymptoms: () => void;
    onLogMood: () => void;
}

export const QuickActions: React.FC<QuickActionProps> = ({ onLogPeriod, onLogSymptoms, onLogMood }) => {
    const theme = useTheme();

    const renderAction = (icon: keyof typeof MaterialCommunityIcons.glyphMap, label: string, onPress: () => void) => (
        <TouchableOpacity style={styles.actionContainer} onPress={onPress}>
            <View style={[styles.iconContainer, { backgroundColor: theme.colors.primaryContainer }]}>
                <MaterialCommunityIcons name={icon} size={28} color={theme.colors.onPrimaryContainer} />
            </View>
            <Text variant="labelMedium" style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {renderAction('water', 'Log Period', onLogPeriod)}
            {renderAction('emoticon-happy-outline', 'Log Mood', onLogMood)}
            {renderAction('pill', 'Symptoms', onLogSymptoms)}
            {/* Add more actions if needed */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 16,
    },
    actionContainer: {
        alignItems: 'center',
    },
    iconContainer: {
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    label: {
        textAlign: 'center',
    },
});
