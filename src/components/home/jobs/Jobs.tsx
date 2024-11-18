import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../../../context/ThemeContext'

const Jobs = () => {
    const { theme } = useTheme();
    return (
        <ScrollView className={`w-full h-full ${theme.bg_3}`}>
            <View className={`w-full h-40 items-center shadow-black shadow-lg ${theme.bg_2} mb-2`}>
                <View className={`h-24 items-center w-full border-b border-[#a5a5a5]`}>
                    <View className={`w-full h-full flex-row items-center`}>
                        <View className={`h-full w-4/12 bg-black`}>
                        </View>
                        <View className={`h-5/6 flex-1 mx-2`}>
                            <Text className={`text-xs font-bold`}>Network room (Unit No.1)</Text>
                            <Text className={`text-[11px] font-semibold`}>Daikin</Text>
                            <Text className={`text-[10px] opacity-60`}>Daikin FTKM Series (Split AC with inverter technology)</Text>
                        </View>
                    </View>
                </View>
                <View className={`w-11/12 h-12 flex-row`}>
                    <View className={`w-[38%] justify-center`}>
                        <Text className={`text-xs font-semibold`}>Statue</Text>
                        <Text className={`text-[10px] opacity-60`}>Reapir Completed</Text>
                    </View>
                    <View className={`w-[30%] justify-center`}>
                        <Text className={`text-xs font-semibold`}>Next Service</Text>
                        <Text className={`text-[10px] opacity-60`}>2022-01-01</Text>
                    </View>
                    <View className={`flex-1 items-center justify-center`}>
                        <TouchableOpacity className={`w-11/12 px-1 h-7 items-center justify-center ${theme.bg_1} rounded-md`}>
                            <Text className={`text-[10px] flex-wrap text-center leading-3 ${theme.tx_2}`}>Service Reqest</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default Jobs