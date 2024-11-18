import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useTheme } from '../../../context/ThemeContext'
import Ionicons from '@expo/vector-icons/Ionicons';
const Jobs = () => {
    const { theme } = useTheme();
    return (
        <ScrollView className={`w-full h-full ${theme.bg_3}`}>
            <View className={`w-full h-36 items-center shadow-lg shadow-black ${theme.bg_3} mb-5`}>
                <View className={`h-24 items-center w-full border-b border-[#a5a5a5]`}>
                    <View className={`w-full h-full flex-row items-center`}>
                        <View className={`h-full w-4/12 bg-black rounded-r-md overflow-hidden`}>
                            <Image source={require('../../../../assets/logo1.png')} resizeMode='cover' className={`w-full h-full`} />
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
                        <Text className={`text-[10px] font-semibold ${theme.tx_3}`}>Reapir Completed</Text>
                    </View>
                    <View className={`w-[35%] justify-center`}>
                        <Text className={`text-xs font-semibold`}>Next Service</Text>
                        <Text className={`text-[10px] font-semibold opacity-60`}>2022-01-01</Text>
                    </View>
                    <View className={`flex-1 items-end justify-center`}>
                        <TouchableOpacity className={`w-9 h-9 items-center justify-center ${theme.bg_1} rounded-md`}>
                            <Ionicons name="build-outline" size={18} color="white" />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </ScrollView>
    )
}

export default Jobs