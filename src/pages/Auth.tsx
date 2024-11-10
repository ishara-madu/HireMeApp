import React from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Entypo from '@expo/vector-icons/Entypo';
export default function Auth() {
  const { theme } = useTheme();

  return (
    <View className={`flex-1 items-center justify-end pb-10 bg-white h-full`}>
      <View className='flex mb-10'>
      <Entypo name="image" size={90} color="black" />
      </View>
      <View className='flex w-full items-center'>
        <Text className={`${theme.tx_2} text-xl font-bold mb-10`}>
          Welcome to My App
        </Text>
        <TouchableOpacity className={`flex w-3/4 rounded-xl h-10 mb-5 justify-center items-center`}>
        <Text className={`color-white text-sm font-bold`}>
          Get Started
        </Text>
        </TouchableOpacity>
        <Text className={`text-xs`}>Do you have an account? <Text className={`font-bold`}>Log In</Text></Text>
      </View>
    </View>
  );
}
