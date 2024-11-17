import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../../context/ThemeContext';

const ProfileContact = () => {
    const { theme } = useTheme();
    return (
        <View className={`w-full h-40 ${theme.bg_3} items-center justify-center mb-1 shadow-md shadow-black`}>
            <View className={`w-11/12 h-[90%]`}>
            <Text className={`text-xs font-semibold ${theme.tx_3}`}>Details</Text>
            <View className={`w-full flex-row justify-between`}>
            <View className={`items-center mt-2`}>
                <Text className={`text-[10px] font-semibold`}>
                    Compleated Jobs
                </Text>
                <Text className={`text-[10px] font-semibold opacity-60`}>
                    20 Jobs
                </Text>
            </View>
            <View className={`items-center mt-2`}>
                <Text className={`text-[10px] font-semibold`}>
                    Followings
                </Text>
                <Text className={`text-[10px] font-semibold opacity-60`}>
                    20 Followers
                </Text>
            </View>
            <View className={`items-center mt-2`}>
                <Text className={`text-[10px] font-semibold`}>
                    Rank
                </Text>
                <Text className={`text-[10px] font-semibold opacity-60`}>
                    20
                </Text>
            </View>
            </View>
            <View className={`w-full flex-row justify-start`}>
            <View className={`items-start mt-3`}>
                <Text className={`text-[10px] font-semibold`}>
                    Category
                </Text>
                <Text className={`text-[10px] font-semibold opacity-60`}>
                    Electrical
                </Text>
            </View>
            </View>
            <View className={`w-full flex-row justify-start`}>
            <View className={`items-start mt-2`}>
                <Text className={`text-[10px] font-semibold`}>
                    Skills
                </Text>
                <Text className={`text-[10px] font-semibold opacity-60`}>
                    Electrical,Electronic
                </Text>
            </View>
            </View>
            </View>
        </View>
    )
}

export default ProfileContact