import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, useTheme } from 'react-native-paper';
import { GatingModal } from '../components/GatingModal';
import { getStatusMessage, CycleData } from '../utils/cycleLogic';

export const HomeScreen = () => {
    const theme = useTheme();
    const [isGated, setIsGated] = useState(true);

    // Mock cycle data - in a real app this would come from storage
    const [cycleData] = useState<CycleData>({
        lastPeriodStartDate: new Date(),
        cycleLength: 28,
        periodLength: 5,
    });

    const statusMessage = getStatusMessage(new Date(), cycleData);

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text variant="displaySmall" style={styles.title}>
                    Lunéa
                </Text>

                <Card style={styles.statusCard}>
                    <Card.Content>
                        <Text variant="labelLarge" style={{ color: theme.colors.primary }}>
                            TODAY
                        </Text>
                        <Text variant="headlineMedium" style={styles.statusText}>
                            {statusMessage}
                        </Text>
                    </Card.Content>
                </Card>

                <View style={styles.insights}>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        Insights & Predictions
                    </Text>
                    <Card style={styles.insightCard}>
                        <Card.Content>
                            <Text variant="bodyLarge">
                                Your fertile window is estimated to start in 10 days.
                            </Text>
                            <Text variant="bodySmall" style={{ marginTop: 8, opacity: 0.7 }}>
                                ⚠️ Always label as “estimated”. This assistant provides general information, not medical advice.
                            </Text>
                        </Card.Content>
                    </Card>
                </View>
            </ScrollView>

            <GatingModal
                visible={isGated}
                onConfirm={() => setIsGated(false)}
                onCancel={() => {
                    // Handle exit logic - maybe show a message or close app
                    console.log('User cancelled gating');
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        padding: 24,
        paddingTop: 60,
    },
    title: {
        fontFamily: 'Inter_700Bold',
        marginBottom: 32,
    },
    statusCard: {
        borderRadius: 24,
        padding: 16,
        marginBottom: 32,
    },
    statusText: {
        fontFamily: 'Inter_600SemiBold',
        marginTop: 8,
    },
    insights: {
        marginTop: 16,
    },
    sectionTitle: {
        fontFamily: 'Inter_600SemiBold',
        marginBottom: 16,
    },
    insightCard: {
        borderRadius: 16,
        backgroundColor: 'rgba(182, 166, 214, 0.1)', // Subtle Lavender Mist background
    },
});
