import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../context/ThemeContext'
import Ionicons from '@expo/vector-icons/Ionicons';

const DropdownList = () => {
    const { theme } = useTheme();
    const industryList = ["Auto AC", "Programming", "Development", "Education"]

    return (
        <View className={`absolute w-full h-full z-50`}>
            <View className={`absolute w-full h-full bg-black opacity-60`}></View>
            <View className={`absolute w-full h-5/6 ${theme.bg_3} bottom-0 items-center rounded-t-2xl`}>
                <Text className={`text-xs font-bold ${theme.tx_3} py-4`}>Industry</Text>
                <View className={`w-11/12 h-10 ${theme.bg_3} rounded-lg shadow-lg shadow-black flex-row items-center pl-2`}>
                    <Ionicons name="search" size={20} color="#959595" />
                    <TextInput
                        placeholder="Select industry"
                        className={`pl-3 text-[10px]`}
                    />
                </View>
                <FlatList
                    className={`flex-1 w-11/12`}
                    data={industryList}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <TouchableOpacity className={`w-full items-center border-b border-[#c9c9c9] flex py-3`}>
                            <Text
                                className={`text-[10px] ${theme.tx_1}`}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

export default DropdownList