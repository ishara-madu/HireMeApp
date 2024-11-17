import { View, Text, Animated, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'

const Loading = () => {
    const { theme } = useTheme();

    return (
        <View className={`justify-center items-center flex w-full h-screen absolute z-50`}>
            <View className={`flex w-full h-screen absolute bg-black opacity-20`}></View>
            <View className={`w-10/12 h-32 rounded-lg flex justify-center items-center ${theme.bg_3}`}>
                <ActivityIndicator size={"large"} color={"#22826a"} />
                <Text className={`text-xs font-bold ${theme.tx_3}`}>Please wait</Text>
            </View>
        </View>
    )
}

export default Loading