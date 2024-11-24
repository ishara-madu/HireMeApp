import { View, Text, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';


const SignUp = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showAltLogin, setShowAltLogin] = useState(true);
  const [textGreen, setTextGreen] = useState(false);



  const validatePassword = (input: any) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (strongPasswordRegex.test(input)) {
      setErrorMessage('Strong password! 👍');
      setTextGreen(true);
      setTimeout(() => {
        setShowAltLogin(true);
      }, 1000);
    } else {
      setErrorMessage('Password must be at least 8 characters long, with one uppercase, one lowercase, one number, and one special character.');
      setShowAltLogin(false);
      setTextGreen(false);
    }
  };

  const handlePasswordChange = (input: any) => {
    setPassword(input);
    validatePassword(input);
  };


  const handleCofirmPasswordChange = (input: any) => {
    setConfirmPassword(input);
    if (password === input && input !== '') {
      setErrorMessage('Passwords match!');
      setTextGreen(true);
      setTimeout(() => {
        setShowAltLogin(true);
      }, 1000);
    } else {
      setErrorMessage('Passwords do not match.');
      setTextGreen(false);
      setShowAltLogin(false);
    }
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);


  return (
    <SafeAreaView className={`bg-[#ebebeb] flex-1 items-start`}>
      <StatusBar style="dark" backgroundColor='#22826a' />
      {
        !isKeyboardVisible && (
          <View className={`bg-[#22826aac] h-[27%] w-full flex items-center relative`}>
            <TouchableOpacity
              onPress={() => router.push('/auth')}
              className={`w-10 h-10 flex justify-center items-center absolute left-0 rounded-full z-20`}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Image source={require('@/assets/images/employee.jpg')} className={`w-full h-full opacity-40`} />
            <View className={`w-36 h-36 bg-[#ebebeb] absolute bottom-[-40%] rounded-full flex items-center justify-center`}>
              <Image source={require('@/assets/images/signuplogo.png')} className={`w-5/6 h-5/6`} resizeMode='contain' />
            </View>
          </View>
        )
      }
      <View className={`flex-1 justify-end mb-3 items-center w-full`}>
        {
          !isKeyboardVisible && (
            <View className={`w-full flex items-center mb-3`}>
              <Text className={`font-bold  text-xl opacity-80`}>Register</Text>
              <Text className={`text-xs opacity-80`}>Welcome please create your account</Text>
            </View>
          )
        }
        <View className={`flex w-full items-center`}>
          <View className={`w-full flex items-center gap-y-3`}>
            <View className={`flex-row bg-[#ebebeb] justify-center items-center rounded-lg shadow-lg shadow-black relative w-11/12 z-0`}>
              <TextInput
                placeholder="Enter email address"
                className={`w-full h-10 pl-10 text-xs`}
                textContentType="emailAddress"
              />
              <View className={`absolute z-20 left-2 opacity-60`}>
                <MaterialCommunityIcons name="email-outline" size={20} color="black" />
              </View>
            </View>
            <View className={`flex-row bg-[#ebebeb] justify-center items-center rounded-lg shadow-lg shadow-black relative w-11/12 z-0`}>
              <View className={`absolute z-20 left-2 opacity-60`}>
                <MaterialCommunityIcons name="form-textbox-password" size={20} color="black" />
              </View>
              <TextInput
                onChangeText={handlePasswordChange}
                value={password}
                secureTextEntry={true}
                placeholder="Enter password"
                className={`w-full h-10 pl-10 text-xs`}
              />
            </View>
            <View className={`flex-row bg-[#ebebeb] justify-center items-center rounded-lg shadow-lg shadow-black relative w-11/12 z-0`}>
              <View className={`absolute z-20 left-2 opacity-60`}>
                <MaterialCommunityIcons name="form-textbox-password" size={20} color="black" />
              </View>
              <TextInput
                onChangeText={handleCofirmPasswordChange}
                value={confirmPassword}
                secureTextEntry={true}
                placeholder="Confirm password"
                className={`w-full h-10 pl-10 text-xs`}
              />
            </View>
            <View className={`w-full items-center`}>
              {
                (!showAltLogin) ? (
                  <View className={`w-full h-14 justify-center items-center z-10`}>
                    <Text className={`text-xs ${textGreen ? 'text-[#22826a]':'text-red-600'} text-center`}>{errorMessage}</Text>
                  </View>
                ) : (
                  <>
                    <Text className={`mb-1`}>or</Text>
                    <View className={`flex w-full justify-center flex-row gap-x-3 z-0`}>
                      <TouchableOpacity className={`w-8 h-8 rounded-full justify-center items-center shadow-lg shadow-black bg-[#ebebeb]`}>
                        <FontAwesome name="google" size={20} color="red" />
                      </TouchableOpacity>
                      <TouchableOpacity className={`w-8 h-8 rounded-full justify-center items-center shadow-lg shadow-black bg-[#ebebeb]`}>
                        <FontAwesome name="facebook" size={20} color="blue" />
                      </TouchableOpacity>
                      <TouchableOpacity className={`w-8 h-8 rounded-full justify-center items-center shadow-lg shadow-black bg-[#ebebeb]`}>
                        <FontAwesome name="twitter" size={20} color="#36bfbd" />
                      </TouchableOpacity>
                    </View>
                  </>
                )
              }
            </View>
            <TouchableOpacity
              className={`bg-[#22826a] w-11/12 h-11 rounded-lg justify-center items-center mb-1`}
              onPress={() => {
              }}
            >
              <Text className={`text-white font-bold `}>Register</Text>
            </TouchableOpacity>
          </View>
          <View className={`h-10 w-full justify-center items-center flex-row`}>
            <Text className={`text-xs`}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => router.push('/auth/SignIn')}
              className={`justify-center items-center`}><Text className={`text-xs font-bold text-[#22826a]`}>Login here</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp