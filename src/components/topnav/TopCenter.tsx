import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const TopCenter = (props:any) => {
  const {theme} =useTheme();
  return (
    <View className={`${theme.bg_1} h-[10%] flex w-full justify-center items-center`}>
      <Text className={`${theme.tx_2} text-xs font-bold`}>{props.title}</Text>
    </View>
  )
}

export default TopCenter