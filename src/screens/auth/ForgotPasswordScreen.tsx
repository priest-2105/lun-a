import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Text, TextInput, Button, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthNavigator';

type Props = NativeStackScreenProps<AuthStackParamList, 'ForgotPassword'>;

export const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState('');
    const [isSent, setIsSent] = useState(false);

    const handleReset = () => {
        if (email) {
            setIsSent(true);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[styles.container, { backgroundColor: theme.colors.background }]}
        >
            <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top + 40 }]}>
                <View style={styles.header}>
                    <Text variant="displaySmall" style={styles.title}>Reset Password</Text>
                    <Text variant="bodyLarge" style={styles.subtitle}>
                        {isSent
                            ? "Check your email for instructions to reset your password."
                            : "Enter your email address and we'll send you a link to reset your password."}
                    </Text>
                </View>

                {!isSent ? (
                    <View style={styles.form}>
                        <TextInput
                            label="Email"
                            value={email}
                            onChangeText={setEmail}
                            mode="outlined"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            style={styles.input}
                            left={<TextInput.Icon icon="email-outline" />}
                        />

                        <Button
                            mode="contained"
                            onPress={handleReset}
                            disabled={!email}
                            style={styles.resetButton}
                            contentStyle={styles.buttonContent}
                        >
                            Send Reset Link
                        </Button>
                    </View>
                ) : (
                    <Button
                        mode="outlined"
                        onPress={() => navigation.navigate('Login')}
                        style={styles.resetButton}
                        contentStyle={styles.buttonContent}
                    >
                        Back to Login
                    </Button>
                )}

                <Button
                    mode="text"
                    onPress={() => navigation.navigate('Login')}
                    style={styles.backButton}
                    textColor={theme.colors.primary}
                >
                    Back to Login
                </Button>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingBottom: 40,
    },
    header: {
        alignItems: 'center',
        marginBottom: 48,
    },
    title: {
        fontFamily: 'Inter_700Bold',
        color: '#C48A9A',
        textAlign: 'center',
    },
    subtitle: {
        marginTop: 16,
        textAlign: 'center',
        opacity: 0.7,
        lineHeight: 24,
    },
    form: {
        width: '100%',
    },
    input: {
        marginBottom: 24,
    },
    resetButton: {
        borderRadius: 12,
        marginBottom: 16,
    },
    buttonContent: {
        height: 52,
    },
    backButton: {
        marginTop: 8,
    },
});
