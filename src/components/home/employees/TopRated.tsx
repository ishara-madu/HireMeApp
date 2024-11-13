import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '../../../context/ThemeContext';
const TopRated = () => {
    const {theme} = useTheme();
    const users = [
        {
            id: '1',
            name: 'User 1',
            image: 'https://c8.alamy.com/comp/2CC0RP6/simple-vector-eye-pixel-design-in-flat-style-pixel-technology-eye-sign-symbol-vector-illustration-eps8-eps10-2CC0RP6.jpg',
        },
        {
            id: '2',
            name: 'User 1',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJiGQ40oGlLsr-hR3FoVXcSTTbV71tTSNNA&s',
        },
        {
            id: '3',
            name: 'User 1',
            image: 'https://c8.alamy.com/comp/2CC0RP6/simple-vector-eye-pixel-design-in-flat-style-pixel-technology-eye-sign-symbol-vector-illustration-eps8-eps10-2CC0RP6.jpg',
        }
    ]
    const renderItem = ({ item }: any) => (
        <TouchableOpacity className={`h-48 w-48 flex justify-start items-center mr-2 my-3 ml-1 rounded-md ${theme.bg_3} shadow-lg shadow-black overflow-hidden`}>
            <Image source={{ uri: item.image }} className={`w-full h-[60%]`} />
            <TouchableOpacity className={`bg-[#acacac] absolute top-0 right-0 h-7 w-7 rounded-tr-md rounded-bl-md flex justify-center items-center`}>
                <Ionicons name="heart-outline" size={17} color="white" />
                {/* <Ionicons name="heart-sharp" size={17} color="white" /> */}
            </TouchableOpacity>
            <View className={`w-11/12 my-1 justify-around flex-1`}>
            <Text className={`text-xs`}>Eranga Auto AC</Text>
            <Text className={`text-[10px]`}>Air Condition Repiring</Text>
            <TouchableOpacity className={`w-full h-6 ${theme.bg_1} items-center justify-center rounded-md`}>
                <Text className={`text-[10px] ${theme.tx_2}`}>Request</Text>
            </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
    return (
        <>
            <Text className={`text-xs font-semibold mt-5`}>Top-Rated Employees</Text>
            <View className={`w-full`}>
                <FlatList
                    data={users}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </>
    )
}

export default TopRated