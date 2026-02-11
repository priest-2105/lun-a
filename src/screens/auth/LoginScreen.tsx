import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { Text, TextInput, Button, useTheme, IconButton } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthNavigator';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();
    const { login, isLoading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        if (email && password) {
            login(email, password);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[styles.container, { backgroundColor: theme.colors.background }]}
        >
            <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top + 40 }]}>
                <View style={styles.header}>
                    <Text variant="displaySmall" style={styles.title}>Lunéa</Text>
                    <Text variant="bodyLarge" style={styles.subtitle}>Welcome back to your wellness journey</Text>
                </View>

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
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        mode="outlined"
                        secureTextEntry={!showPassword}
                        style={styles.input}
                        left={<TextInput.Icon icon="lock-outline" />}
                        right={
                            <TextInput.Icon
                                icon={showPassword ? "eye-off" : "eye"}
                                onPress={() => setShowPassword(!showPassword)}
                            />
                        }
                    />

                    <Button
                        mode="text"
                        onPress={() => navigation.navigate('ForgotPassword')}
                        style={styles.forgotPassword}
                        textColor={theme.colors.primary}
                    >
                        Forgot Password?
                    </Button>

                    <Button
                        mode="contained"
                        onPress={handleLogin}
                        loading={isLoading}
                        disabled={isLoading || !email || !password}
                        style={styles.loginButton}
                        contentStyle={styles.buttonContent}
                    >
                        Login
                    </Button>

                    <View style={styles.footer}>
                        <Text variant="bodyMedium">Don't have an account? </Text>
                        <Button
                            mode="text"
                            onPress={() => navigation.navigate('SignUp')}
                            compact
                            textColor={theme.colors.primary}
                        >
                            Sign Up
                        </Button>
                    </View>
                </View>
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
        color: '#C48A9A', // Dusty Rose
    },
    subtitle: {
        marginTop: 8,
        textAlign: 'center',
        opacity: 0.7,
    },
    form: {
        width: '100%',
    },
    input: {
        marginBottom: 16,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 24,
    },
    loginButton: {
        borderRadius: 12,
        marginBottom: 24,
    },
    buttonContent: {
        height: 52,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
