import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux';
import store from '@/store';
// import { SafeAreaView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RootLayout = () => {
    return (
        <Provider store={store}>
            <Stack>
                {/* Define screens */}
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
                <Stack.Screen name="auth" options={{ headerShown: false }} />
            </Stack>
        </Provider>
    );
};

export default RootLayout