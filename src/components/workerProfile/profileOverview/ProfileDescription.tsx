import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../../context/ThemeContext';

const ProfileDescription = () => {
    const { theme } = useTheme();
    return (
        <View className={`w-full h-48 ${theme.bg_3} items-center justify-center shadow-md shadow-black`}>
            <View className={`w-11/12 h-[90%]`}>
                <Text className={`text-xs font-semibold ${theme.tx_3}`}>Details</Text>
                <View className={`w-full flex-row justify-start`}>
                    <View className={`items-start mt-2`}>
                        <Text className={`text-[10px] opacity-60 text-justify`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileDescription