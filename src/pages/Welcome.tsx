import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View className={`bg-[#e6edeb] flex-1 items-center`}>
      <View className={`bg-[#a6cac1] h-[55%] w-full`}>
      <Image source={require('../../assets/welcome-1.png')} resizeMode='contain' className={`flex items-center justify-center w-full h-full`}/>
      </View>
      <View className={`flex-1 items-center justify-between w-full`}>
        <View className={`flex items-center w-full mt-3 flex-row justify-center gap-x-2`}>
            <TouchableOpacity className={`w-10 h-2 bg-[#22826a] rounded-full`}></TouchableOpacity>
            <TouchableOpacity className={`w-2 h-2 bg-[#a6cac1] rounded-full`}></TouchableOpacity>
            <TouchableOpacity className={`w-2 h-2 bg-[#a6cac1] rounded-full`}></TouchableOpacity>
        </View>
        <View className={`flex w-full items-center`}>
        <Text className={`font-bold text-base text-center`}>Welcome to Hire Me</Text>
        <Text className={`text-xs opacity-40 text-center`}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </Text>
        </View>
        <View className={`w-full flex items-center`}>
        <TouchableOpacity className={`bg-[#22826a] w-11/12 h-11 rounded-lg justify-center items-center`}>
            <Text className={`color-white font-bold`}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity className={`w-11/12 h-11 rounded-lg justify-center items-center`}>
            <Text className={`color-black font-bold opacity-40`}>Skip</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Welcome