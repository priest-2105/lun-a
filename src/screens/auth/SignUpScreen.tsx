import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Text, TextInput, Button, useTheme, Checkbox } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthNavigator';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

export const SignUpScreen: React.FC<Props> = ({ navigation }) => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();
    const { signUp, isLoading } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSignUp = () => {
        if (name && email && password && agreed) {
            signUp(name, email, password);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[styles.container, { backgroundColor: theme.colors.background }]}
        >
            <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top + 40 }]}>
                <View style={styles.header}>
                    <Text variant="displaySmall" style={styles.title}>Join Lunéa</Text>
                    <Text variant="bodyLarge" style={styles.subtitle}>Start your personalized wellness journey</Text>
                </View>

                <View style={styles.form}>
                    <TextInput
                        label="Full Name"
                        value={name}
                        onChangeText={setName}
                        mode="outlined"
                        style={styles.input}
                        left={<TextInput.Icon icon="account-outline" />}
                    />
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
                        secureTextEntry
                        style={styles.input}
                        left={<TextInput.Icon icon="lock-outline" />}
                    />

                    <View style={styles.termsContainer}>
                        <Checkbox.Android
                            status={agreed ? 'checked' : 'unchecked'}
                            onPress={() => setAgreed(!agreed)}
                            color={theme.colors.primary}
                        />
                        <Text variant="bodySmall" style={styles.termsText}>
                            I agree to the Terms of Service and Privacy Policy
                        </Text>
                    </View>

                    <Button
                        mode="contained"
                        onPress={handleSignUp}
                        loading={isLoading}
                        disabled={isLoading || !name || !email || !password || !agreed}
                        style={styles.signUpButton}
                        contentStyle={styles.buttonContent}
                    >
                        Create Account
                    </Button>

                    <View style={styles.footer}>
                        <Text variant="bodyMedium">Already have an account? </Text>
                        <Button
                            mode="text"
                            onPress={() => navigation.navigate('Login')}
                            compact
                            textColor={theme.colors.primary}
                        >
                            Login
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
        color: '#C48A9A',
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
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
        paddingRight: 16,
    },
    termsText: {
        flex: 1,
        marginLeft: 8,
        opacity: 0.7,
    },
    signUpButton: {
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
