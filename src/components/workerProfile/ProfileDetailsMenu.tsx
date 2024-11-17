import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const ProfileDetailsMenu = () => {
    const {theme} = useTheme();
    return (
        <View className={`w-full h-10 items-center ${theme.bg_3} shadow-sm shadow-black z-20`}>
            <View className={`w-11/12 h-full flex-row justify-between items-center`}>
                <TouchableOpacity className={`border-b-4 ${theme.border_2} h-full justify-center`}>
                    <Text className={`text-xs ${theme.tx_3} font-semibold`}>Overview</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`border-b-4 border-transparent h-full justify-center opacity-60`}>
                    <Text className={`text-xs font-semibold`}>Jobs</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`border-b-4 border-transparent h-full justify-center opacity-60`}>
                    <Text className={`text-xs font-semibold`}>Employees</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`border-b-4 border-transparent h-full justify-center opacity-60`}>
                    <Text className={`text-xs font-semibold`}>Reviews</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

export default ProfileDetailsMenu