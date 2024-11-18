import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../context/ThemeContext'

const ReqestService = () => {
    const { theme } = useTheme();
    return (
        <View
            className={`h-[70px] w-full justify-center items-center ${theme.bg_3} border-t-2 border-[#cbcbcb]`}>
            <View className={`${theme.bg_1} w-11/12 h-12 rounded-lg justify-center items-center`}>
                <Text className={`tx-xs ${theme.tx_2} font-semibold`}>Request Service</Text>
            </View>
        </View>
    )
}

export default ReqestService