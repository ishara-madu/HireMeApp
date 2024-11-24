import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='SignIn' options={{ headerShown: false }} />
            <Stack.Screen name='SignUp' options={{ headerShown: false }} />
            <Stack.Screen name='Otp' options={{ headerShown: false }} />
        </Stack>
    )
}

export default AuthLayout