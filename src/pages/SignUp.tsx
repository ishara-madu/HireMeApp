import { View, Text, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const SignUp = () => {
  const { theme } = useTheme();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    // Add event listeners for keyboard show and hide
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    // Clean up the listeners on component unmount
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View className={`${theme.bg_3} flex-1 items-start`}>
      {
        !isKeyboardVisible && (
          <View className={`${theme.bg_2} h-[27%] w-full flex items-center relative`}>
            <Image source={require('../../assets/employee.jpg')} className={`w-full h-full opacity-40`} />
            <View className={`w-36 h-36 ${theme.bg_3} absolute bottom-[-40%] rounded-full flex items-center justify-center`}>
              <Image source={require('../../assets/signuplogo.png')} className={`w-5/6 h-5/6`} resizeMode='contain' />
            </View>
          </View>
        )
      }
      <View className={`flex-1 justify-end mb-3 items-center w-full`}>
        {
          !isKeyboardVisible && (
            <View className={`w-full flex items-center mb-3`}>
              <Text className={`font-bold ${theme.tx_1} text-xl opacity-80`}>Register</Text>
              <Text className={`text-xs ${theme.tx_1} opacity-80`}>Welcome please create your account</Text>
            </View>
          )
        }
        <View className={`flex w-full items-center`}>
          <View className={`w-full flex items-center gap-y-3`}>
            <View className={`flex-row justify-center items-center relative w-11/12`}>
              <View className={`absolute z-20 left-2 opacity-60`}>
                <MaterialCommunityIcons name="email-outline" size={20} color="black" />
              </View>
              <TextInput
                placeholder="Enter email address"
                className={`w-full h-10 ${theme.bg_3} rounded-lg shadow-lg shadow-black pl-10 text-xs`}
              />
            </View>
            <View className={`flex-row justify-center items-center relative w-11/12`}>
              <View className={`absolute z-20 left-2 opacity-60`}>
                <MaterialCommunityIcons name="form-textbox-password" size={20} color="black" />
              </View>
              <TextInput
                placeholder="Enter password"
                className={`w-full h-10 ${theme.bg_3} rounded-lg shadow-lg shadow-black pl-10 text-xs`}
              />
            </View>
            <View className={`flex-row justify-center items-center relative w-11/12`}>
              <View className={`absolute z-20 left-2 opacity-60`}>
                <MaterialCommunityIcons name="form-textbox-password" size={20} color="black" />
              </View>
              <TextInput
                placeholder="Enter password"
                className={`w-full h-10 ${theme.bg_3} rounded-lg shadow-lg shadow-black pl-10 text-xs`}
              />
            </View>
            <View className={`w-full items-center`}>
              <Text className={`mb-1`}>or</Text>
              <View className={`flex w-full justify-center flex-row gap-x-3`}>
                <TouchableOpacity className={`w-8 h-8 rounded-full justify-center items-center ${theme.bg_2}`}>
                  <FontAwesome name="google" size={20} color="red" />
                </TouchableOpacity>
                <TouchableOpacity className={`w-8 h-8 rounded-full justify-center items-center ${theme.bg_2}`}>
                  <FontAwesome name="facebook" size={20} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity className={`w-8 h-8 rounded-full justify-center items-center ${theme.bg_2}`}>
                  <FontAwesome name="twitter" size={20} color="#36bfbd" />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              className={`${theme.bg_1} w-11/12 h-11 rounded-lg justify-center items-center mb-1`}
              onPress={() => {
              }}
            >
              <Text className={`text-white font-bold ${theme.tx_2}`}>Register</Text>
            </TouchableOpacity>
          </View>
          <Text className={`text-xs ${theme.tx_1}`}>Already have an account? <Text className={`font-bold`}>Login here</Text></Text>
        </View>
      </View>
    </View>
  )
}

export default SignUp