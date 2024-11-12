import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../../../context/ThemeContext'
import AntDesign from '@expo/vector-icons/AntDesign';

const Dropdown = () => {
    const {theme} = useTheme();
    return (
        <TouchableOpacity className={`h-9 w-[48%] rounded-md shadow-lg ${theme.bg_3} shadow-black flex items-center justify-center`}>
            <View className={`w-11/12 `}>
            <Text className={`text-[10px] font-semibold`}>Select category</Text>
            <AntDesign name="caretdown" size={24} color="black" />
            </View>
        </TouchableOpacity>
    )
}

export default Dropdown