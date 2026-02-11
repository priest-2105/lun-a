import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Avatar, List, Button, useTheme, Divider } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '../context/AuthContext';

export const ProfileScreen = () => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();
    const { user, logout } = useAuth();

    const sections = [
        {
            title: 'Account Settings',
            items: [
                { icon: 'account-edit-outline', label: 'Edit Profile' },
                { icon: 'bell-outline', label: 'Notifications' },
                { icon: 'shield-check-outline', label: 'Privacy & Security' },
            ]
        },
        {
            title: 'Wellness',
            items: [
                { icon: 'calendar-sync-outline', label: 'Cycle Settings' },
                { icon: 'database-outline', label: 'Export Data' },
            ]
        },
        {
            title: 'Support',
            items: [
                { icon: 'help-circle-outline', label: 'Help Center' },
                { icon: 'information-outline', label: 'About Lunéa' },
            ]
        }
    ];

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
                {/* Header / Profile Info */}
                <View style={[styles.header, { paddingTop: insets.top + 24 }]}>
                    <Avatar.Text
                        size={80}
                        label={user?.name?.[0] || 'U'}
                        style={{ backgroundColor: theme.colors.primaryContainer }}
                        labelStyle={{ color: theme.colors.onPrimaryContainer }}
                    />
                    <Text variant="headlineSmall" style={styles.userName}>{user?.name || 'User'}</Text>
                    <Text variant="bodyMedium" style={styles.userEmail}>{user?.email || 'user@example.com'}</Text>

                    <Button
                        mode="outlined"
                        onPress={() => { }}
                        style={styles.editButton}
                        labelStyle={{ fontSize: 13 }}
                    >
                        Update Goals
                    </Button>
                </View>

                {/* Settings Sections */}
                {sections.map((section, idx) => (
                    <View key={idx} style={styles.section}>
                        <Text variant="labelLarge" style={styles.sectionTitle}>{section.title}</Text>
                        <View style={[styles.sectionContent, { backgroundColor: theme.colors.surface }]}>
                            {section.items.map((item, itemIdx) => (
                                <View key={itemIdx}>
                                    <List.Item
                                        title={item.label}
                                        left={props => <List.Icon {...props} icon={item.icon} color={theme.colors.primary} />}
                                        right={props => <List.Icon {...props} icon="chevron-right" color={theme.colors.outline} />}
                                        onPress={() => { }}
                                        titleStyle={{ fontSize: 15 }}
                                    />
                                    {itemIdx < section.items.length - 1 && <Divider />}
                                </View>
                            ))}
                        </View>
                    </View>
                ))}

                <View style={styles.logoutContainer}>
                    <Button
                        mode="text"
                        onPress={logout}
                        textColor={theme.colors.error}
                        style={styles.logoutButton}
                        icon="logout"
                    >
                        Log Out
                    </Button>
                    <Text variant="labelSmall" style={styles.versionText}>Version 1.0.0</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingBottom: 32,
    },
    userName: {
        marginTop: 16,
        fontFamily: 'Inter_700Bold',
    },
    userEmail: {
        opacity: 0.6,
        marginTop: 4,
    },
    editButton: {
        marginTop: 16,
        borderRadius: 20,
        height: 40,
    },
    section: {
        marginTop: 24,
    },
    sectionTitle: {
        paddingHorizontal: 24,
        marginBottom: 8,
        opacity: 0.6,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    sectionContent: {
        marginHorizontal: 16,
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
    },
    logoutContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    logoutButton: {
        width: '100%',
    },
    versionText: {
        marginTop: 16,
        opacity: 0.3,
    },
});
