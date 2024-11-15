import { View, Text, Image, ScrollViewComponent, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useTheme } from '../context/ThemeContext';
import Topnav from '../components/home/Topnav';
import SearchArea from '../components/home/SearchArea';
import { SearchAreaContext } from '../context/SearchAreaContext';
import FilterArea from '../components/home/FilterArea';
import Employees from '../components/home/Employees';
import Feather from '@expo/vector-icons/Feather';
import SearchResult from '../components/home/employees/SearchResult';
import DropdownList from '../components/home/filterArea/dropDown/DropdownList';

const Home = () => {
    const { theme } = useTheme();
    const { isFocusSearch, setIsFocusSearch, isFilterShow, setIsFilterShow, isSearchEmpty } = useContext(SearchAreaContext);

    return (
        <View className={`${theme.bg_3} flex-1 items-center relative`}>
            <Topnav />
            <SearchArea />
            <>
                <ScrollView className={`flex-1 ${(!isSearchEmpty && isFocusSearch) && "absolute top-28 h-full"} w-full`}>
                    <View className={`flex-1 w-full items-center`}>
                        {
                            (isFilterShow && !isFocusSearch) && (
                                <FilterArea />
                            )
                        }

                        {
                            !isFocusSearch && (
                                <Employees />
                            )
                        }
                    </View>
                </ScrollView>
                <View className={`absolute top-28 h-full w-full items-center`}>
                {
                    (!isSearchEmpty && isFocusSearch) && (
                        <>
                        {
                            isFilterShow && (
                                <FilterArea />
                            )
                        }
                        <SearchResult />
                        </>
                    )
                }
                </View>
                {
                    (!isFocusSearch) && (
                        <View className={`absolute w-full h-12 ${theme.bg_3} border-t-2 border-[#d4d4d4] bottom-0 shadow-lg shadow-black z-20 flex-row justify-evenly items-center`}>
                            <TouchableOpacity className={`items-center`}>
                                <Feather name="home" size={18} color={theme.color_1} />
                                <Text className={`text-[10px] font-semibold ${theme.tx_3}`}>Home</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className={`items-center opacity-40`}>
                                <Feather name="message-square" size={18} color="black" />
                                <Text className={`text-[10px] font-semibold`}>Messages</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className={`items-center opacity-40`}>
                                <Feather name="heart" size={18} color="black" />
                                <Text className={`text-[10px] font-semibold`}>Favorites</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className={`items-center opacity-40`}>
                                <Feather name="user" size={18} color="black" />
                                <Text className={`text-[10px] font-semibold`}>Profile</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }

            </>
            {/* <DropdownList/> */}
        </View>
    )
}

export default Home