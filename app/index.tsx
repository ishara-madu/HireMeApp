import { View, Text, TouchableOpacity, Platform, Image } from 'react-native'
import React, { useState } from 'react'
import '../global.css'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { removeValue } from '@/fetures/welcomeSlice';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';


const App = () => {
    const [slide, setSlide] = useState(0);
    const [hideSlides, setHideSlides] = useState(false);
    const translateX = useSharedValue(0);
    const opacity = useSharedValue(1);

    const values = useSelector((state: any) => state.values.values);
    const dispatch = useDispatch();



    const fadeIn = () => {
        setTimeout(() => {
            opacity.value = withTiming(1, { duration: 700 });
        }, 700);
    };

    const fadeOut = () => {
        opacity.value = withTiming(0, { duration: 350 });
    };

    const fadeAnimatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    const click = (index?: any) => {
        translateX.value = -800;
        setTimeout(() => {
            setHideSlides(true);
            translateX.value = 800;
        }, 300);
        setTimeout(() => {
            if (index != undefined) {
                setSlide(index)
            }
            else if(slide != (values.length-1)) {
                setSlide((prev) => (prev + 1) % values.length)
            }
            else{
                router.replace('/auth');
            }
            setHideSlides(false);
            translateX.value = 0;
        }, 600);
    };

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: withTiming(translateX.value, { duration: 500 }) }],
    }));

    const renderDots = () => (
        values.map((_: any, index: any) => (
            <TouchableOpacity
                key={index}
                onPress={() => { click(index) }}
                className={`${slide === index ? `w-10 h-2 bg-[#22826a]` : `w-2 h-2 bg-[#22826aac]`} rounded-full`}
            />
        ))
    );

    return (
        <View className={`flex-1 items-center bg-[#ebebeb]`} >
            <StatusBar style="dark" />
            <View className={`h-[55%] w-full bg-[#22826aac] overflow-hidden justify-center items-center`}>
                {!hideSlides && (
                    <Animated.Image
                        style={[animatedStyle, { height: '100%', width: '100%', }]}
                        source={values[slide].image}
                        resizeMode='contain'
                        className="flex-1 items-center justify-center"
                    />
                )}
            </View>
            <View className="flex-1 items-center justify-between w-full">
                <View className="flex items-center w-full mt-3 flex-row justify-center gap-x-3">
                    {renderDots()}
                </View>
                <Animated.View style={[fadeAnimatedStyle, { width: Platform.OS == 'web' ? '95%' : undefined }]} className="flex w-11/12 items-center">
                    <Text className={`font-bold text-base text-center`}>
                        {values[slide].title}
                    </Text>
                    <Text className={`text-xs opacity-40 text-center`}>
                        {values[slide].description}
                    </Text>
                </Animated.View>

                <View className="w-full flex items-center">
                    <TouchableOpacity
                        className={`bg-[#22826a] w-11/12 h-11 rounded-lg justify-center items-center`}
                        onPress={() => {
                            click();
                            fadeOut();
                            fadeIn();
                        }}
                    >
                        <Text className={`text-white font-bold text-base`}>Next</Text>
                    </TouchableOpacity>
                    {
                        slide != values.length - 1 ? (
                            <TouchableOpacity onPress={() => { router.replace('/auth'); }} className="w-11/12 h-11 rounded-lg justify-center items-center">
                                <Text className={`font-bold opacity-40 text-black`}>Skip</Text>
                            </TouchableOpacity>
                        ) : (
                            <View className={`w-11/12 h-11 rounded-lg justify-center items-center`}></View>
                        )
                    }
                </View>
            </View>
        </View>
    );
}

export default App