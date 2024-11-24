import { View, Text, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
const Otp = () => {
    const theme = '';
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [otp, setOtp] = useState(["", "", "", "", ""]);

    const inputs: any = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleChange = (text: any, index: any) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < inputs.length - 1) {
            inputs[index + 1].current.focus();
        }
    };

    const handleBackspace = (text: any, index: any) => {
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
        <SafeAreaView className={`bg-[#ebebeb] flex-1 items-start`}>
            {
                !isKeyboardVisible && (
                    <View className={`bg-[#22826aac] h-[27%] w-full flex items-center relative`}>
                        <Image source={require('@/assets/images/employee.jpg')} className={`w-full h-full opacity-40`} />
                        <View className={`w-36 h-36 bg-[#ebebeb] absolute bottom-[-40%] rounded-full flex items-center justify-center`}>
                            <Image source={require('@/assets/images/signuplogo.png')} className={`w-5/6 h-5/6`} resizeMode='contain' />
                        </View>
                    </View>
                )
            }
            <View className={`flex-1 justify-center mb-3 items-center w-full`}>
                {
                    !isKeyboardVisible && (
                        <View className={`w-11/12 flex items-center mb-7`}>
                            <Text className={`font-bold text-xl opacity-80`}>OTP verification</Text>
                            <Text className={`text-xs opacity-80`}>OTP has been sent to you on <Text className={`text-[#22826a] underline`}>isharamadushankab@gmail.com</Text></Text>
                        </View>
                    )
                }
                <View className={`flex w-full items-center`}>
                    <View className={`w-full flex items-center gap-y-5`}>
                        <View className={`w-11/12 flex-row justify-around`}>
                            {otp.map((_, index) => (
                                <View className={`w-10 h-10 bg-[#ebebeb] rounded-lg shadow-lg shadow-black`}>
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
                                        className={`text-xs text-center w-full h-full`}
                                    />
                                </View>
                            ))}
                        </View>

                        <Text className={` font-semibold text-xs`}>00:21</Text>

                        <TouchableOpacity
                            className={`bg-[#22826a] w-11/12 h-11 rounded-lg justify-center items-center mb-2`}
                            onPress={() => {
                            }}
                        >
                            <Text className={`text-white font-bold`}>Verify</Text>
                        </TouchableOpacity>
                        <View className={`h-10 w-full justify-center items-center flex-row`}>
                            <Text className={`text-xs`}>Didn't receive code? </Text>
                            <TouchableOpacity
                                className={`justify-center items-center`}><Text className={`text-xs font-bold text-[#22826a]`}>Resend</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Otp