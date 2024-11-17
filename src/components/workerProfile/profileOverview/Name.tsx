import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../../../context/ThemeContext'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Name = () => {
    const { theme } = useTheme();
    return (
        <View className={`w-full h-16 items-center ${theme.bg_3} shadow-md shadow-black mb-1`}>
            <View className={`w-11/12 h-full items-center flex-row justify-between`}>
                <View className={`h-full justify-center gap-y-1 w-[64%]`}>
                    <Text className={`text-xs font-semibold`}>Pixel Eye</Text>
                    <View className={`items-center flex-row gap-x-0.5`}>
                        <FontAwesome name="star" size={13} color={theme.color_1} />
                        <FontAwesome name="star" size={13} color={theme.color_1} />
                        <FontAwesome name="star" size={13} color={theme.color_1} />
                        <FontAwesome name="star-half-o" size={13} color={theme.color_1} />
                        <FontAwesome name="star-o" size={13} color={theme.color_1} />
                        <Text className={`text-[10px] opacity-60`}>(122 review)</Text>
                    </View>
                </View>
                <View className={`h-full justify-center w-[35%]`}>
                    <TouchableOpacity className={`h-8 ${theme.bg_1} w-full justify-center items-center rounded-md`}>
                        <Text className={`text-xs ${theme.tx_2} font-semibold`}>
                            Request
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Name