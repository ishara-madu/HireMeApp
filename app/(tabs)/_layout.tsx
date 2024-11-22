import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';

const TabIcon = ({ color, focused, name }: any) => {
    return <Ionicons name={name} size={20} color={color} />
}


const TabsLayout = () => {
    return (
        <SafeAreaView className={`flex-1`}>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'gray',
                    
                    tabBarLabel: ({ focused, color, children }) => (
                        <Text
                            style={{ color: color }}
                            className={`text-xs ${focused && 'font-semibold'}`}
                        >
                            {focused ? children : children}
                        </Text>
                    ),
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: 'white',
                        },
                        tabBarIcon: ({ focused, color }) => (
                            <TabIcon color={color} focused={focused} name={"home-outline"} />
                        ),

                    }}
                />
                <Tabs.Screen
                    name="messages"
                    options={{
                        title: 'Messages',
                        headerShown: false,
                        tabBarIcon: ({ focused, color }) => (
                            <TabIcon color={color} focused={focused} name={"notifications-outline"} />
                        ),

                    }}
                />
                <Tabs.Screen
                    name="favorite"
                    options={{
                        title: 'Favorite',
                        headerShown: false,
                        tabBarIcon: ({ focused, color }) => (
                            <TabIcon color={color} focused={focused} name={"heart-outline"} />
                        ),

                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ focused, color }) => (
                            <TabIcon color={color} focused={focused} name={"person-outline"} />
                        ),

                    }}
                />
            </Tabs>
        </SafeAreaView>
    )
}

export default TabsLayout