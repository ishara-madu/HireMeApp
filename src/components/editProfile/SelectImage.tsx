import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import Ionicons from '@expo/vector-icons/Ionicons';
const SelectImage = () => {
    const { theme } = useTheme();
    return (

        <View className={`absolute w-full h-full`}>
            <View onTouchStart={() => {
                console.log("touched");
            }} className={`absolute bg-black opacity-40 w-full h-full`}>
            </View>
            <View className={`absolute bottom-0 h-48 ${theme.bg_3} w-full rounded-t-lg items-center justify-center`}>
                <View className={`w-11/12 mt-10 h-full`}>
                    <Text className={`text-xs font-semibold mb-5`}>Change profile photo</Text>
                    <View className={`flex-row gap-x-3 items-center mb-5`}>
                        <View className={`h-10 w-10 ${theme.bg_3} shadow-lg shadow-black rounded-full justify-center items-center`}>
                        <Ionicons name="image" size={20} color={theme.color_1} />
                        </View>
                        <Text className={`text-xs`}>Gallery</Text>
                    </View>
                    <View className={`flex-row gap-x-3 items-center`}>
                        <View className={`h-10 w-10 ${theme.bg_3} shadow-lg shadow-black rounded-full justify-center items-center`}>
                        <Ionicons name="trash" size={20} color="red" />
                        </View>
                        <Text className={`text-xs`}>Remove image</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SelectImage