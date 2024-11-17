import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import Ionicons from '@expo/vector-icons/Ionicons';

const TopCenter = (props: any) => {
  const { theme } = useTheme();
  return (
    <View className={`${theme.bg_1} h-14 flex w-full justify-center items-center relative`}>
      <Text className={`${theme.tx_2} text-xs font-bold`}>{props.title}</Text>
      <TouchableOpacity className={`absolute right-3 w-10 h-10 rounded-full justify-center items-center`}>
        <Ionicons name="cloudy-night-outline" size={20} color={theme.color_2} />
        {/* <Ionicons name="partly-sunny-outline" size={20} color="black" /> */}
      </TouchableOpacity>
    </View>
  )
}

export default TopCenter