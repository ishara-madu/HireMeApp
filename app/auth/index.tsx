import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function ChoosePath() {
    const [isHiring,setIsHiring] = useState<any>(null);
    const  theme  ='';

    return (
        <SafeAreaView className={`flex-1 items-center justify-start bg-[#ebebeb]`}>
            <StatusBar style="dark" backgroundColor='#22826aac'/>
            <View className={`h-2/6 w-full bg-[#22826aac] flex items-center justify-center`}>
            <Image
                source={require('@/assets/images/lookingfor.png')}
                className="w-full h-full"
                resizeMode='cover'
            />
            </View>
            <Text className={`font-bold text-xl mt-5`}>What are you looking for?</Text>
            <View className={`flex w-full items-center gap-y-4 mt-3`}>
            <TouchableOpacity
            onPress={()=>{setIsHiring(true)}}
                className={`w-8/12 h-16 rounded-lg justify-center items-center ${isHiring ? 'bg-[#22826a]' : 'bg-[#22826aac]'}`}
            >
                <Text className={`${isHiring ? 'text-white' : (`text-black opacity-40` )} text-base font-bold`}>Hire Someone</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{setIsHiring(false)}}
                className={`w-8/12 h-16 rounded-lg justify-center items-center ${isHiring === false ? 'bg-[#22826a]' : 'bg-[#22826aac]'}`}
            >
                <Text className={`${isHiring === false ? 'text-white' : (`text-black opacity-40` )} text-base font-bold`}>Find Work</Text>
            </TouchableOpacity>
            </View>
            {
                isHiring !== null && (
                    <TouchableOpacity
                        className={`bg-[#22826a] w-11/12 h-11 rounded-lg justify-center items-center bottom-10 absolute`}
                        onPress={() => {
                            router.push('/auth/SignUp')
                        }}
                    >
                        <Text className={`text-white font-bold`}>Next</Text>
                    </TouchableOpacity>
                )
            }
        </SafeAreaView>
    );
}
