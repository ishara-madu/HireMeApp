import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import Ionicons from '@expo/vector-icons/Ionicons';

const TopLeft = (props: any) => {
  const { theme } = useTheme();
  return (
    <View className={`${theme.bg_1} h-14 flex w-full justify-center items-center`}>
      <View className={`flex-row w-11/12 h-full items-center`}>
        <TouchableOpacity
          onPress={() => { }}
          className={`w-5 h-5 z-30 rounded-full flex justify-center mr-3`}>
          <Ionicons name="arrow-back" size={18} color="white" />
        </TouchableOpacity>
        <Text className={`${theme.tx_2} text-xs font-bold`}>{props.title}</Text>
      </View>
    </View>
  )
}

export default TopLeft