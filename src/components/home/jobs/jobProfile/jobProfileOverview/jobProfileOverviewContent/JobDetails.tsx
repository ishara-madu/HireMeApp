import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../../../context/ThemeContext';

const JobDetails = () => {
    const { theme } = useTheme();
    return (
        <View className={`w-full h-auto ${theme.bg_3} items-center justify-center mb-1 py-2 shadow-md shadow-black`}>
            <View className={`w-11/12 h-auto`}>
                <Text className={`text-xs font-semibold ${theme.tx_3}`}>Details</Text>
                <View className={`w-full flex-row justify-between`}>
                    <View className={`items-start mt-2`}>
                        <Text className={`text-[10px] font-semibold`}>
                            Statue
                        </Text>
                        <Text className={`text-[10px] font-semibold opacity-60`}>
                            Reparing Completed
                        </Text>
                    </View>
                    <View className={`items-start mt-2`}>
                        <Text className={`text-[10px] font-semibold`}>
                            Next Service
                        </Text>
                        <Text className={`text-[10px] font-semibold opacity-60`}>
                            2022-01-01
                        </Text>
                    </View>
                    <View className={`items-start mt-2`}>
                        <Text className={`text-[10px] font-semibold`}>
                            Spend Time
                        </Text>
                        <Text className={`text-[10px] font-semibold opacity-60`}>
                            04D : 04H : 20M
                        </Text>
                    </View>
                </View>
                <View className={`w-full flex-row justify-between gap-x-2 flex-wrap`}>
                    <View className={`items-start mt-3`}>
                        <Text className={`text-[10px] font-semibold`}>
                            Category
                        </Text>
                        <Text className={`text-[10px] font-semibold opacity-60`}>
                            Electrical
                        </Text>
                    </View>
                    <View className={`items-start mt-3`}>
                        <Text className={`text-[10px] font-semibold`}>
                            Spend Time
                        </Text>
                        <Text className={`text-[10px] font-semibold opacity-60`}>
                            04D : 04H : 20M
                        </Text>
                    </View>
                    <View className={`items-start mt-3`}>
                        <Text className={`text-[10px] font-semibold`}>
                            Spend Time
                        </Text>
                        <Text className={`text-[10px] font-semibold opacity-60`}>
                            04D : 04H : 20M
                        </Text>
                    </View>
                    
                </View>

            </View>
        </View>
    )
}

export default JobDetails