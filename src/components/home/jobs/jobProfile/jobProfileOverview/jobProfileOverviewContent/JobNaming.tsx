import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../../../context/ThemeContext'

const JobNaming = () => {
    const {theme} = useTheme();
    return (
        <View className={`w-full h-24 items-center ${theme.bg_3} shadow-md shadow-black mb-1`}>
            <View className={`w-11/12 h-full items-center flex-row justify-start`}>
                <View className={`h-full justify-center gap-y-1 w-full`}>
                <Text className={`text-xs font-bold`}>Network room (Unit No.1)</Text>
                            <Text className={`text-[11px] font-semibold`}>Daikin</Text>
                            <Text className={`text-[10px] opacity-60`}>Daikin FTKM Series (Split AC with inverter technology)</Text>
                    
                </View>
            </View>
        </View>
    )
}

export default JobNaming