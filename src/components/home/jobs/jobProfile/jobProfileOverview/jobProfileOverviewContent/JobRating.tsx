import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../../../context/ThemeContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const JobRating = () => {
    const { theme } = useTheme();
    return (
        <View className={`w-full h-56 items-center ${theme.bg_3} shadow-md shadow-black mb-1`}>
            <View className={`w-11/12 h-full items-center flex-row justify-start`}>
                <View className={`h-full justify-start items-center w-full mt-2`}>
                    <Text className={`text-xs font-bold text-center ${theme.tx_3}`}>If you could take a moment to rate us, we’d greatly appreciate it!</Text>
                    <View className={`items-center flex-row justify-center gap-x-3 w-full my-2`}>
                        <TouchableOpacity className={` p-1`}>
                            <FontAwesome name="star-o" size={24} color={theme.color_1} />
                        </TouchableOpacity>
                        <TouchableOpacity className={` p-1`}>
                            <FontAwesome name="star-o" size={24} color={theme.color_1} />
                        </TouchableOpacity>
                        <TouchableOpacity className={` p-1`}>
                            <FontAwesome name="star-o" size={24} color={theme.color_1} />
                        </TouchableOpacity>
                        <TouchableOpacity className={` p-1`}>
                            <FontAwesome name="star-o" size={24} color={theme.color_1} />
                        </TouchableOpacity>
                        <TouchableOpacity className={` p-1`}>
                            <FontAwesome name="star-o" size={24} color={theme.color_1} />
                        </TouchableOpacity>
                    </View>
                    <View className={`w-full h-20`}>
                        <TextInput
                            multiline
                            placeholder='Write your review here...'
                            style={{ textAlignVertical: 'top' }}
                            className={`w-full h-full ${theme.bg_3} shadow-md shadow-black rounded-md text-xs p-2`} />
                    </View>
                    <View className={`w-full flex-1 flex-row justify-end`}>
                        <View className={`w-auto h-full flex-row items-center gap-x-2`}>
                            <TouchableOpacity className={`p-2`}>
                                <Text className={`text-xs font-semibold opacity-60`}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className={`p-2`}>
                                <Text className={`text-xs font-semibold ${theme.tx_3}`}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default JobRating