import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
export default function ChoosePath() {
    const [isHiring,setIsHiring] = useState<any>(null);
    const { theme } = useTheme();

    return (
        <View className={`${theme.bg_3} flex-1 items-center justify-start`}>
            <View className={`h-2/6 w-full ${theme.bg_2} flex items-center justify-center p-5`}>
            <Image
                source={require('../../assets/lookingfor.png')}
                className="w-full h-full"
            />
            </View>
            <Text className={`font-bold text-xl mt-5 ${theme.tx_1}`}>What are you looking for?</Text>
            <View className={`flex w-full items-center gap-y-4 mt-3`}>
            <TouchableOpacity
            onPress={()=>{setIsHiring(true)}}
                className={`w-8/12 h-16 rounded-lg justify-center items-center ${isHiring ? theme.bg_1 : theme.bg_2}`}
            >
                <Text className={`${isHiring ? theme.tx_2 : (`${theme.tx_1} opacity-40` )} text-base font-bold`}>Hire Someone</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{setIsHiring(false)}}
                className={`w-8/12 h-16 rounded-lg justify-center items-center ${isHiring === false ? theme.bg_1 : theme.bg_2}`}
            >
                <Text className={`${isHiring === false ? theme.tx_2 : (`${theme.tx_1} opacity-40` )} text-base font-bold`}>Find Work</Text>
            </TouchableOpacity>
            </View>
            {
                isHiring !== null && (
                    <TouchableOpacity
                        className={`${theme.bg_1} w-11/12 h-11 rounded-lg justify-center items-center bottom-10 absolute`}
                        onPress={() => {
                        }}
                    >
                        <Text className={`text-white font-bold ${theme.tx_2}`}>Next</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    );
}
