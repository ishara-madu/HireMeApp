import { View, Text, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext';
const Otp = () => {
    const { theme } = useTheme();
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [otp, setOtp] = useState(["", "", "", "",""]);

    const inputs:any = [useRef(null), useRef(null), useRef(null), useRef(null),useRef(null)];

    const handleChange = (text:any, index:any) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < inputs.length - 1) {
            inputs[index + 1].current.focus();
        }
    };

    const handleBackspace = (text:any, index:any) => {
        if (!text && index > 0) {
            inputs[index - 1].current.focus();
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
            <View className={`flex-1 justify-center mb-3 items-center w-full`}>
                {
                    !isKeyboardVisible && (
                        <View className={`w-full flex items-center mb-7`}>
                            <Text className={`font-bold ${theme.tx_1} text-xl opacity-80`}>OTP verification</Text>
                            <Text className={`text-xs ${theme.tx_1} opacity-80`}>OTP has been sent to you on <Text className={`${theme.tx_3}`}>isharamadushankab@gmail.com</Text></Text>
                        </View>
                    )
                }
                <View className={`flex w-full items-center`}>
                    <View className={`w-full flex items-center gap-y-5`}>
                        <View className={`w-11/12 flex-row justify-around`}>
                        {otp.map((_, index) => (
                                <TextInput
                                    ref={inputs[index]}
                                    value={otp[index]}
                                    onChangeText={(text) => handleChange(text, index)}
                                    onKeyPress={({ nativeEvent }) => {
                                        if (nativeEvent.key === 'Backspace') {
                                            handleBackspace(otp[index], index);
                                        }
                                    }}
                                    keyboardType="number-pad"
                                    maxLength={1} // Limit to one digit
                                    className={`w-10 h-10 ${theme.bg_3} rounded-lg shadow-lg shadow-black text-xs text-center`}
                                />
                        ))}
                        </View>

                        <Text className={`${theme.tx_3} font-semibold text-xs`}>00:21</Text>

                        <TouchableOpacity
                            className={`${theme.bg_1} w-11/12 h-11 rounded-lg justify-center items-center mb-2`}
                            onPress={() => {
                            }}
                        >
                            <Text className={`text-white font-bold ${theme.tx_2}`}>Verify</Text>
                        </TouchableOpacity>
                        <Text className={`text-xs font-semibold`}>Didn't receive code? <Text className={`${theme.tx_3}`}>Resend</Text></Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Otp