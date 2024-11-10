import { View, Text, Image } from 'react-native'
import React from 'react'
import { useTheme } from '../context/ThemeContext';

const SignUp = () => {
  const { theme } = useTheme();

  return (
    <View className={`${theme.bg_3} flex-1 items-start`}>
      <View className={`${theme.bg_2} h-2/6 w-full flex items-center relative`}>
      <View className={`w-36 h-36 ${theme.bg_3} absolute bottom-[-30%] rounded-full flex items-center justify-center`}>
        <Image source={require('../../assets/signuplogo.png')} className={`w-5/6 h-5/6`} resizeMode='contain'/>
      </View>
      </View>
    </View>
  )
}

export default SignUp