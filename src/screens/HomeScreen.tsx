import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { useAppTheme } from '../theme/ThemeProvider';
import { DateStrip } from '../components/DateStrip';
import { CycleProgress } from '../components/CycleProgress';
import { QuickActions } from '../components/QuickActions';
import { InsightCard } from '../components/InsightCard';
import { format } from 'date-fns';

export const HomeScreen = () => {
    const theme = useTheme();
    const { themeMode } = useAppTheme();
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Mock data for now
    const cycleData = {
        lastPeriodStartDate: new Date(new Date().setDate(new Date().getDate() - 20)), // 20 days ago
        cycleLength: 28,
        periodLength: 5,
    };

    const periodInDays = 28 - 20; // 8 days
    const currentDay = 21;

    const handleLogPeriod = () => {
        console.log('Log Period');
    };

    const handleLogSymptoms = () => {
        console.log('Log Symptoms');
    };

    const handleLogMood = () => {
        console.log('Log Mood');
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Text variant="titleLarge" style={styles.greeting}>
                        {format(new Date(), 'EEEE, MMMM do')}
                    </Text>
                    <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
                        Welcome back, User
                    </Text>
                </View>

                <DateStrip selectedDate={selectedDate} onSelectDate={setSelectedDate} />

                <CycleProgress
                    currentDay={currentDay}
                    totalDays={cycleData.cycleLength}
                    periodInDays={periodInDays}
                />

                <QuickActions
                    onLogPeriod={handleLogPeriod}
                    onLogSymptoms={handleLogSymptoms}
                    onLogMood={handleLogMood}
                />

                <Text variant="titleMedium" style={styles.sectionTitle}>Today's Insights</Text>

                <InsightCard
                    title="Stay Hydrated"
                    description="Drinking water helps with bloating and energy levels during this phase of your cycle."
                    icon="water-outline"
                />

                <InsightCard
                    title="Yoga for Relaxation"
                    description="Gentle yoga can help alleviate mild cramps and improve mood."
                    icon="yoga"
                    actionLabel="View Session"
                    onAction={() => console.log('View Session')}
                />

                <View style={{ height: 20 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 24,
    },
    header: {
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 8,
    },
    greeting: {
        fontWeight: 'bold',
    },
    sectionTitle: {
        paddingHorizontal: 24,
        marginTop: 16,
        marginBottom: 8,
        fontWeight: 'bold',
    },
});
