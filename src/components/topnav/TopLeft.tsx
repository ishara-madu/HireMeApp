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
        <TouchableOpacity className={`absolute right-3 w-10 h-10 rounded-full justify-center items-center`}>
        <Ionicons name="heart-outline" size={20} color={theme.color_2} />
        {/* <Ionicons name="heart-sharp" size={20} color="black" /> */}
      </TouchableOpacity>
    </View>
  )
}

export default TopLeft