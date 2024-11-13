import { View, Text, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { SearchAreaContext } from '../../context/SearchAreaContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SearchArea = () => {
    const { theme } = useTheme();
    const { isFocusSearch, setIsFocusSearch, isFilterShow, setIsFilterShow,isSearchEmpty } = useContext(SearchAreaContext);

    // const searchHideHandler = () => {
    //     const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
    //         setIsFocusSearch(true)
    //     })
    //     const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
    //         setIsFocusSearch(false)
    //     })
    //     return () => {
    //         keyboardDidShowListener.remove();
    //         keyboardDidHideListener.remove();
    //     };
    // }

    return (
        <View className={`w-full h-[25%] relative items-center`}>
            {
                isFocusSearch && (
                    <View className={`flex-row items-center w-11/12 pt-3 z-30`}>
                        <TouchableOpacity
                            onPress={() => { Keyboard.dismiss() }}
                            className={`w-5 h-5 z-30 rounded-full flex justify-center mr-3`}>
                            <Ionicons name="arrow-back" size={18} color="white" />
                        </TouchableOpacity>
                        <Text className={`text-xs font-semibold ${theme.tx_2}`}>Search</Text>
                    </View>
                )
            }
            {
                !isFocusSearch && (
                    <>
                        <Image source={require('../../../assets/employee.jpg')} className={`w-full h-full`} />
                        <View className={`w-full h-full absolute bg-black opacity-50 z-10`}></View>
                    </>
                )
            }

            <View className={`w-full h-full absolute z-20 flex justify-end items-center gap-y-5`}>
                {
                    !isFocusSearch && <Text className={`font-bold ${theme.tx_2}`}>FIND THE RIGHT EMPLOYEE</Text>
                }
                <View className={`flex-row justify-center relative ${isFocusSearch && "absolute top-14 w-full"}`}>
                    <View className={`absolute z-20 flex justify-center h-full left-2 opacity-60 ${isFocusSearch && "ml-3"}`}>
                        <Ionicons name="search" size={20} color="black" />
                    </View>
                    <TextInput
                        onFocus={() => { setIsFocusSearch(true) }}
                        onBlur={() => { setIsFocusSearch(false) }}
                        placeholder='Search category, name, etc'
                        className={`w-11/12 ${theme.bg_3} rounded-lg h-9 text-[10px] font-semibold pl-9`} />
                    {
                        (!isFocusSearch || !isSearchEmpty) && (
                            <TouchableOpacity
                            onPress={() => setIsFilterShow(!isFilterShow)}
                                className={`absolute z-20 flex justify-center h-full right-2 opacity-60 ${!isSearchEmpty && "mr-3"}`}>
                                {
                                    (isFilterShow) ? (
                                        <MaterialIcons name="filter-list-off" size={20} color="black" />
                                    ) : (
                                        <MaterialIcons name="filter-list" size={20} color="black" />
                                    )
                                }
                            </TouchableOpacity>
                        )
                    }
                </View>
            </View>
        </View>
    )
}

export default SearchArea