import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import { useTheme } from '../../context/ThemeContext';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SearchAreaContext } from '../../context/SearchAreaContext';

const Topnav = () => {
    const { theme } = useTheme();
    const { isFocusSearch } = useContext(SearchAreaContext);

    return (
        <View className={`${theme.bg_1} flex w-full ${!isFocusSearch ? ("h-[10%]"):("h-28 absolute")} items-center`}>
            {
                !isFocusSearch && (
                    <View className={`flex w-11/12 h-full flex-row justify-between items-center`}>
                        <View className={`flex-row h-full items-center gap-x-2`}>
                            <Image source={require('../../../assets/profile.png')} className={`w-9 h-9`} />
                            <View className={`justify-center h-full`}>
                                <Text className={`text-[11px] font-semibold ${theme.tx_2}`}>Hello Isharamadu</Text>
                                <View className={`flex-row items-center`}>
                                    <Text className={`text-[10px] ${theme.tx_2}`}>Nochchiyagama &nbsp;</Text>
                                    <View className={`flex justify-center`}>
                                        <SimpleLineIcons name="arrow-down" size={10} color="white" />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View className={``}>
                            <Ionicons name="notifications-outline" size={20} color="white" />
                        </View>
                    </View>
                )
            }

        </View>
    )
}

export default Topnav