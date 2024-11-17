import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopLeft from '../components/topnav/TopLeft'
import { useTheme } from '../context/ThemeContext'
import SelectImage from '../components/editProfile/SelectImage';
import Ionicons from '@expo/vector-icons/Ionicons';
const EditProfile = () => {
    const { theme } = useTheme();
    const [isFocusInput, setIsFocusInput] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setIsFocusInput(true)
        })
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setIsFocusInput(false)
        })
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [])

    return (
        <View className={`w-full h-full ${theme.bg_3} items-center`}>
            <TopLeft title='Edit profile' />
            <View className={`w-full flex-1 items-center`}>
                {
                    !isFocusInput && (
                        <View className={`w-32 h-32 mt-8 rounded-full relative shadow-lg shadow-black`}>
                            <Image source={require('../../assets/profile.jpg')} resizeMode='cover' className={`w-full h-full rounded-full`} />
                            <View className={`${theme.bg_3} w-9 h-9 absolute z-20 bottom-0 right-0 rounded-full justify-center items-center shadow-md shadow-black`}>
                                <TouchableOpacity className={`w-7 h-7 ${theme.bg_1} rounded-full justify-center items-center`}>
                                    <Ionicons name="camera-outline" size={18} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }
                <ScrollView showsHorizontalScrollIndicator={false} className={`w-full flex-1 ${!isFocusInput && "mt-10"}`}>
                    <View className={`w-full items-center h-full mb-12`}>
                        <View className={`w-11/12 h-auto gap-y-2 mb-5`}>
                            <Text className={`text-xs font-semibold`}>
                                Username
                            </Text>
                            <View className={`w-full h-10 ${theme.bg_3} shadow-lg shadow-black rounded-lg`}>
                                <TextInput
                                    value=''
                                    className={`w-full h-full text-xs pl-3`} />
                            </View>
                        </View>
                        <View className={`w-11/12 h-auto gap-y-2 mb-5`}>
                            <Text className={`text-xs font-semibold`}>
                                Email address
                            </Text>
                            <View className={`w-full h-10 ${theme.bg_3} shadow-lg shadow-black rounded-lg`}>
                                <TextInput
                                    value=''
                                    className={`w-full h-full text-xs pl-3`} />
                            </View>
                        </View>
                        <View className={`w-11/12 h-auto gap-y-2 mb-5`}>
                            <Text className={`text-xs font-semibold`}>
                                Password
                            </Text>
                            <View className={`w-full h-10 ${theme.bg_3} shadow-lg shadow-black rounded-lg`}>
                                <TextInput
                                    value='ffffere'
                                    className={`w-full h-full text-xs pl-3`} />
                            </View>
                        </View>

                    </View>
                </ScrollView>
                <View className={`w-11/12 absolute h-14 bottom-0 justify-center`}>
                    <TouchableOpacity className={`w-full h-12 ${theme.bg_1} justify-center items-center rounded-lg`}>
                        <Text className={`text-xs font-bold ${theme.tx_2}`}>Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <SelectImage />
        </View>
    )
}

export default EditProfile