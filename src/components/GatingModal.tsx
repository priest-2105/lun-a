import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { Text, Button, Portal, useTheme } from 'react-native-paper';

interface GatingModalProps {
    visible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export const GatingModal: React.FC<GatingModalProps> = ({ visible, onConfirm, onCancel }) => {
    const theme = useTheme();

    return (
        <Portal>
            <Modal visible={visible} transparent animationType="fade">
                <View style={styles.overlay}>
                    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
                        <Text variant="headlineSmall" style={styles.title}>
                            Age Verification
                        </Text>
                        <Text variant="bodyMedium" style={styles.description}>
                            Lunéa includes features related to fertility and wellness. Please confirm you are 18 years or older and agree to our terms of service to proceed.
                        </Text>

                        <Button
                            mode="contained"
                            onPress={onConfirm}
                            style={styles.button}
                            labelStyle={styles.buttonLabel}
                        >
                            I am 18+ and I agree
                        </Button>

                        <Button
                            mode="text"
                            onPress={onCancel}
                            textColor={theme.colors.onSurfaceVariant}
                        >
                            Exit
                        </Button>
                    </View>
                </View>
            </Modal>
        </Portal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    container: {
        width: '100%',
        padding: 24,
        borderRadius: 16,
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    title: {
        fontFamily: 'Inter_700Bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    description: {
        fontFamily: 'Inter_400Regular',
        textAlign: 'center',
        marginBottom: 24,
        lineHeight: 20,
    },
    button: {
        width: '100%',
        borderRadius: 8,
        marginBottom: 8,
    },
    buttonLabel: {
        fontFamily: 'Inter_600SemiBold',
    },
});
