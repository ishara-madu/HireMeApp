import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const Welcome = () => {
    const [slide, setSlide] = useState(0);
    const [hideSlides, setHideSlides] = useState(false);
    const { theme } = useTheme();
    const translateX = useSharedValue(0);
    const opacity = useSharedValue(1);

    const titles = ['Welcome to Hire Me', 'Find the Best Employee', 'Sell Your Knowledge'];
    const descriptions = [
        "Your go-to platform for hiring the best talent quickly and easily. Explore a variety of options to find the right employee for your needs.",
        "Discover a wide range of skilled professionals ready to help you grow your business. From developers to designers, we have the perfect candidates for every role.",
        "Share your expertise and earn by offering your skills to those who need them. Whether you're a consultant, freelancer, or expert in your field, start making an impact and income."
    ];
    const images = [
        require('../../assets/welcome-1.png'),
        require('../../assets/welcome-2.png'),
        require('../../assets/welcome-3.png')
    ];


    const fadeIn = () => {
        setTimeout(() => {
            opacity.value = withTiming(1, { duration: 500 });
        }, 500);
    };

    const fadeOut = () => {
        opacity.value = withTiming(0, { duration: 250 });
    };

    const fadeAnimatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    const click = (index?: any) => {
        translateX.value = -800;
        setTimeout(() => {
            translateX.value = 800;
            setHideSlides(true);
        }, 200);
        setTimeout(() => {
            translateX.value = 0;
            if (index != undefined) {
                setSlide(index)
            } else {
                setSlide((prev) => (prev + 1) % titles.length)
            }
            setHideSlides(false);
        }, 500);
    };

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: withTiming(translateX.value, { duration: 500 }) }],
    }));

    const renderDots = () => (
        titles.map((_, index) => (
            <TouchableOpacity
                key={index}
                onPress={() => { click(index) }}
                className={`${slide === index ? `w-10 h-2 ${theme.bg_1}` : `w-2 h-2 ${theme.bg_2}`} rounded-full`}
            />
        ))
    );

    return (
        <View className={`${theme.bg_3} flex-1 items-center`}>
            <View className={`${theme.bg_2} h-[55%] w-full`}>
                {!hideSlides && (
                    <Animated.Image
                        style={animatedStyle}
                        source={images[slide]}
                        resizeMode='contain'
                        className="flex items-center justify-center w-full h-full"
                    />
                )}
            </View>
            <View className="flex-1 items-center justify-between w-full">
                <View className="flex items-center w-full mt-3 flex-row justify-center gap-x-3">
                    {renderDots()}
                </View>
                <Animated.View style={fadeAnimatedStyle} className="flex w-11/12 items-center">
                    <Text className={`font-bold text-base text-center ${theme.tx_1}`}>
                        {titles[slide]}
                    </Text>
                    <Text className={`text-xs opacity-40 text-center ${theme.tx_1}`}>
                        {descriptions[slide]}
                    </Text>
                </Animated.View>

                <View className="w-full flex items-center">
                    <TouchableOpacity
                        className={`${theme.bg_1} w-11/12 h-11 rounded-lg justify-center items-center`}
                        onPress={() => {
                            click();
                            fadeOut();
                            fadeIn();
                        }}
                    >
                        <Text className={`text-white font-bold ${theme.tx_2}`}>Next</Text>
                    </TouchableOpacity>
                    {
                        slide != images.length-1 ? (
                            <TouchableOpacity className="w-11/12 h-11 rounded-lg justify-center items-center">
                                <Text className={`text-black font-bold opacity-40 ${theme.tx_1}`}>Skip</Text>
                            </TouchableOpacity>
                        ):(
                            <View className={`w-11/12 h-11 rounded-lg justify-center items-center`}></View>
                        )
                    }
                </View>
            </View>
        </View>
    );
};

export default Welcome;
