import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../../../../../../context/ThemeContext'

const HistoryComponent = () => {
    const [isExtended, setIsExtended] = useState(false);
    const { theme } = useTheme();
    return (
        <TouchableOpacity onPress={()=>{setIsExtended(prev=>!prev)}} className={`w-full ${isExtended ? "h-auto" : "h-24"} ${theme.bg_3} shadow-lg shadow-black mb-2 items-center py-2 overflow-hidden`}>
            <View className={`w-11/12 h-auto`}>
                <View className={`flex-row justify-between`}>
                    <Text className={`text-xs font-semibold ${theme.tx_3}`}>Daikin</Text>
                    <Text className={`text-[10px] font-semibold opacity-60`}>2021-12-31</Text>
                </View>
                <Text className={`text-[10px] font-semibold opacity-60`}>Daikin FTKM Series (Split AC with inverter technology)</Text>
                <View className={`w-full flex-row justify-between h-auto`}>
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
                <View className={`mt-3 h-auto`}>
                    <Text className={`text-xs font-semibold ${theme.tx_1}`}>Description</Text>
                    <View className={`w-full flex-row justify-start`}>
                        <View className={`items-start mt-1`}>
                            <Text className={`text-[10px] opacity-60 text-justify`}>
                                Lorem Ipsum is  dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HistoryComponent