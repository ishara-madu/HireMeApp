import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '../../../context/ThemeContext';
import { SearchAreaContext } from '../../../context/SearchAreaContext';
import FilterArea from '../FilterArea';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SearchResult = () => {
    const { theme } = useTheme();
    const { isFilterShow } = useContext(SearchAreaContext);
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
        <>
            <TouchableOpacity className={`h-32 w-full flex justify-start items-center my-1 rounded-md ${theme.bg_3} shadow-lg shadow-black overflow-hidden`}>
                <View className={`w-full h-full flex-row`}>
                    <View className={`w-3/6 h-full`} >
                        <Image source={{ uri: item.image }} className={`w-full h-full`} />
                        <TouchableOpacity className={`bg-[#acacac] absolute top-0 right-0 h-7 w-7 rounded-tr-md rounded-bl-md flex justify-center items-center`}>
                            <Ionicons name="heart-outline" size={17} color="white" />
                            {/* <Ionicons name="heart-sharp" size={17} color="white" /> */}
                        </TouchableOpacity>
                    </View>
                    <View className={`w-3/6 items-center flex-1`}>
                        <View className={`w-11/12 justify-evenly flex-1`}>
                            <View className={`w-full h-[50%] justify-center`}>
                                <Text className={`text-xs`}>Eranga Auto AC</Text>
                                <Text className={`text-[10px]`}>Air Condition Repiring</Text>
                            </View>
                            <View className={`w-full h-[15%] items-center flex-row gap-x-0.5`}>
                            <FontAwesome name="star" size={13} color={theme.color_1} />
                            <FontAwesome name="star" size={13} color={theme.color_1} />
                            <FontAwesome name="star" size={13} color={theme.color_1} />
                            <FontAwesome name="star-half-o" size={13} color={theme.color_1} />
                            <FontAwesome name="star-o" size={13} color={theme.color_1} />
                            <Text className={`text-[10px] opacity-60`}>(122 review)</Text>
                            </View>
                            <View className={`w-full h-[35%] justify-center`}>
                                <TouchableOpacity className={`w-full h-6 ${theme.bg_1} items-center justify-center rounded-md`}>
                                    <Text className={`text-[10px] ${theme.tx_2}`}>Request</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
    return (
        <>
            <View className={`w-full ${isFilterShow ? "mb-72" : "mb-40"} mt-1`}>
                <FlatList
                    data={users}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    horizontal={false}
                    nestedScrollEnabled={true}
                />
            </View>
        </>
    )
}

export default SearchResult