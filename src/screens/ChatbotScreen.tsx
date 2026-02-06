import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Text, TextInput, IconButton, useTheme, Card } from 'react-native-paper';

export const ChatbotScreen = () => {
    const theme = useTheme();
    const [message, setMessage] = useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[styles.container, { backgroundColor: theme.colors.background }]}
        >
            <View style={styles.header}>
                <Text variant="titleLarge" style={styles.headerTitle}>Wellness Assistant</Text>
                <Text variant="bodySmall" style={styles.disclaimer}>
                    Educational only. Not medical advice. No diagnosis.
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.chatContent}>
                <Card style={styles.botMessage}>
                    <Card.Content>
                        <Text variant="bodyMedium">
                            Hello! I'm your Lunéa assistant. I can provide general information about menstrual cycles and wellness. How can I help you today?
                        </Text>
                    </Card.Content>
                </Card>
            </ScrollView>

            <View style={[styles.inputContainer, { borderTopColor: theme.colors.outline }]}>
                <TextInput
                    mode="flat"
                    placeholder="Ask a question..."
                    value={message}
                    onChangeText={setMessage}
                    style={styles.input}
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                />
                <IconButton
                    icon="send"
                    mode="contained"
                    containerColor={theme.colors.primary}
                    iconColor="white"
                    onPress={() => setMessage('')}
                />
            </View>

            <View style={styles.footerDisclaimer}>
                <Text variant="labelSmall" style={styles.footerText}>
                    This assistant provides general information, not medical advice. If unsure, consult a professional.
                </Text>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 60,
        paddingHorizontal: 24,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    headerTitle: {
        fontFamily: 'Inter_700Bold',
    },
    disclaimer: {
        fontFamily: 'Inter_400Regular',
        opacity: 0.6,
        marginTop: 4,
    },
    chatContent: {
        padding: 24,
    },
    botMessage: {
        maxWidth: '85%',
        borderRadius: 16,
        borderBottomLeftRadius: 0,
        backgroundColor: '#FFFFFF',
    },
    inputContainer: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
    },
    input: {
        flex: 1,
        backgroundColor: 'transparent',
        marginRight: 8,
    },
    footerDisclaimer: {
        padding: 8,
        alignItems: 'center',
        backgroundColor: '#FAF7F6',
    },
    footerText: {
        textAlign: 'center',
        opacity: 0.5,
        fontSize: 10,
    },
});
