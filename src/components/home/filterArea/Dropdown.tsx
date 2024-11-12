import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../../../context/ThemeContext'
import AntDesign from '@expo/vector-icons/AntDesign';

const Dropdown = (props:any) => {
    const {theme} = useTheme();
    const filters = ["Industry","Skills","Ratings","Availability"]
    return (
        <TouchableOpacity className={`h-8 w-[48%] rounded-md shadow-lg ${theme.bg_3} shadow-black flex items-center justify-center`}>
            <View className={`w-10/12 flex-row justify-between items-center opacity-40`}>
            <Text className={`text-[10px] font-semibold`}>{filters[props.id]}</Text>
            <AntDesign name="caretdown" size={9} color="black" />
            </View>
        </TouchableOpacity>
    )
}

export default Dropdown