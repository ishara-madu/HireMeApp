import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../../../context/ThemeContext';

const ProfileContact = () => {
    const { theme } = useTheme();
    return (
        <View className={`w-full h-40 ${theme.bg_3} items-center justify-center mb-1 shadow-md shadow-black`}>
            <View className={`w-11/12 h-[90%]`}>
                <Text className={`text-xs font-semibold ${theme.tx_3}`}>Contatct</Text>
                <View className={`w-full flex-row justify-between items-center`}>
                    <View className={`items-start mt-3`}>
                        <Text className={`text-[10px] font-semibold`}>
                            Email
                        </Text>
                        <Text className={`text-[10px] font-semibold opacity-60`}>
                            Isharamadu@gmail.com
                        </Text>
                    </View>
                    <TouchableOpacity className={`mt-3 ${theme.bg_1} justify-center w-20 h-6 items-center rounded-md`}>
                            <Text className={`text-[10px] font-semibold ${theme.tx_2}`}>
                                Email me
                            </Text>
                    </TouchableOpacity>
                </View>
                <View className={`w-full flex-row justify-between`}>
                    <View className={`items-start mt-2`}>
                        <Text className={`text-[10px] font-semibold`}>
                            Phone
                        </Text>
                        <Text className={`text-[10px] font-semibold opacity-60`}>
                            0789365102
                        </Text>
                    </View>
                    <TouchableOpacity className={`mt-3 ${theme.bg_1} justify-center w-20 h-6 items-center rounded-md`}>
                            <Text className={`text-[10px] font-semibold ${theme.tx_2}`}>
                                Call me
                            </Text>
                    </TouchableOpacity>
                </View>
                <View className={`w-full flex-row justify-between`}>
                    <View className={`items-start mt-2`}>
                        <Text className={`text-[10px] font-semibold`}>
                            WhatsApp
                        </Text>
                        <Text className={`text-[10px] font-semibold opacity-60`}>
                            0789365102
                        </Text>
                    </View>
                    <TouchableOpacity className={`mt-3 ${theme.bg_1} justify-center w-20 h-6 items-center rounded-md`}>
                            <Text className={`text-[10px] font-semibold ${theme.tx_2}`}>
                                Text me
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProfileContact