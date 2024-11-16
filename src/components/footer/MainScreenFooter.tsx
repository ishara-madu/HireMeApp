import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { SearchAreaContext } from '../../context/SearchAreaContext';
import Feather from '@expo/vector-icons/Feather';
import { useTheme } from '../../context/ThemeContext';

const MainScreenFooter = () => {
    const { isFocusSearch } = useContext(SearchAreaContext);
    const { theme } = useTheme();

    return (
        <>
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
    )
}

export default MainScreenFooter