import React, { useRef, useEffect } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { format, addDays, isSameDay, startOfWeek } from 'date-fns';

interface DateStripProps {
    selectedDate: Date;
    onSelectDate: (date: Date) => void;
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SCREEN_WIDTH / 7; // Show roughly a week at a time

export const DateStrip: React.FC<DateStripProps> = ({ selectedDate, onSelectDate }) => {
    const theme = useTheme();
    const scrollViewRef = useRef<ScrollView>(null);

    // Generate dates for the strip (e.g., 2 weeks before and after today)
    // For simplicity, let's just generate a range around the selected date or today

    const today = new Date();
    const startDate = addDays(today, -14); // Start 2 weeks ago
    const dates = Array.from({ length: 30 }, (_, i) => addDays(startDate, i));

    useEffect(() => {
        // Scroll to selected date on mount or when it changes significantly
        // This is a simple implementation, could be improved to center the selected date
        const index = dates.findIndex(d => isSameDay(d, selectedDate));
        if (index !== -1 && scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: index * ITEM_WIDTH - SCREEN_WIDTH / 2 + ITEM_WIDTH / 2, animated: true });
        }
    }, [selectedDate]);

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {dates.map((date, index) => {
                    const isSelected = isSameDay(date, selectedDate);
                    const isToday = isSameDay(date, today);

                    return (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.dateItem,
                                { width: ITEM_WIDTH },
                                isSelected && { backgroundColor: theme.colors.primaryContainer, borderRadius: 12 }
                            ]}
                            onPress={() => onSelectDate(date)}
                        >
                            <Text
                                variant="labelSmall"
                                style={{
                                    color: isSelected ? theme.colors.onPrimaryContainer : theme.colors.onSurfaceVariant,
                                    opacity: 0.7,
                                    marginBottom: 4
                                }}
                            >
                                {format(date, 'EEE')}
                            </Text>
                            <Text
                                variant="titleMedium"
                                style={{
                                    fontWeight: isSelected || isToday ? 'bold' : 'normal',
                                    color: isSelected ? theme.colors.onPrimaryContainer : theme.colors.onSurface,
                                }}
                            >
                                {format(date, 'd')}
                            </Text>
                            {isToday && (
                                <View style={[styles.dot, { backgroundColor: theme.colors.primary }]} />
                            )}
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        marginBottom: 16,
    },
    scrollContent: {
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    dateItem: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2,
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        marginTop: 4,
    },
});
