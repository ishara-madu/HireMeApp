import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Welcome = () => {
    const [slide, setSlide] = React.useState(0)
    const titles = ['Welcome to Hire Me', 'Find the Best Employee', 'Sell Your Knowledge'];
    const descriptions = ["Your go-to platform for hiring the best talent quickly and easily. Explore a variety of options to find the right employee for your needs.", "Discover a wide range of skilled professionals who are ready to help you grow your business. From developers to designers, we have the perfect candidates for every role.", "Share your expertise and earn by offering your skills to those who need them. Whether you're a consultant, freelancer, or expert in your field, start making an impact and income."];
    const images = [require('../../assets/welcome-1.png'), require('../../assets/welcome-2.png'),require('../../assets/welcome-3.png')];
    return (
        <View className={`bg-[#e6edeb] flex-1 items-center`}>
            <View className={`bg-[#a6cac1] h-[55%] w-full`}>
                <Image
                    source={(images[slide])}
                    resizeMode='contain'
                    className="flex items-center justify-center w-full h-full"
                />
            </View>
            <View className={`flex-1 items-center justify-between w-full`}>
                <View className={`flex items-center w-full mt-3 flex-row justify-center gap-x-2`}>
                    <TouchableOpacity onPress={()=>{setSlide(0)}} className={`${slide === 0 ? 'w-10 h-2 bg-[#22826a]':'w-2 h-2 bg-[#a6cac1]'} rounded-full`}></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setSlide(1)}} className={`${slide === 1 ? 'w-10 h-2 bg-[#22826a]':'w-2 h-2 bg-[#a6cac1]'} rounded-full`}></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setSlide(2)}} className={`${slide === 2 ? 'w-10 h-2 bg-[#22826a]':'w-2 h-2 bg-[#a6cac1]'} rounded-full`}></TouchableOpacity>
                </View>
                <View className={`flex w-full items-center`}>
                    <Text className={`font-bold text-base text-center`}>{titles[slide]}</Text>
                    <Text className={`text-xs opacity-40 text-center`}>{descriptions[slide]}</Text>
                </View>
                <View className={`w-full flex items-center`}>
                    <TouchableOpacity 
                    className={`bg-[#22826a] w-11/12 h-11 rounded-lg justify-center items-center`}
                    onPress={()=>{
                        setSlide((prev) => prev + 1)
                        if(slide >= titles.length - 1){
                            setSlide(0)
                        }
                    }}
                    >
                        <Text className={`color-white font-bold`}>Next</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className={`w-11/12 h-11 rounded-lg justify-center items-center`}>
                        <Text className={`color-black font-bold opacity-40`}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Welcome