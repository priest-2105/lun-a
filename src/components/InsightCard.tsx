import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, useTheme, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface InsightCardProps {
    title: string;
    description: string;
    icon?: keyof typeof MaterialCommunityIcons.glyphMap;
    actionLabel?: string;
    onAction?: () => void;
}

export const InsightCard: React.FC<InsightCardProps> = ({ title, description, icon, actionLabel, onAction }) => {
    const theme = useTheme();

    return (
        <Card style={styles.card} mode="elevated">
            <Card.Content style={styles.content}>
                <View style={styles.header}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={24}
                            color={theme.colors.primary}
                            style={styles.icon}
                        />
                    )}
                    <Text variant="titleMedium" style={styles.title}>{title}</Text>
                </View>
                <Text variant="bodyMedium" style={styles.description}>
                    {description}
                </Text>
            </Card.Content>
            {actionLabel && onAction && (
                <Card.Actions>
                    <Button onPress={onAction}>{actionLabel}</Button>
                </Card.Actions>
            )}
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 16,
        marginVertical: 8,
    },
    content: {
        paddingBottom: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    icon: {
        marginRight: 8,
    },
    title: {
        fontWeight: 'bold',
    },
    description: {
        opacity: 0.8,
    },
});
