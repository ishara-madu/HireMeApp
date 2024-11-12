import { View, Text, Image, ScrollViewComponent, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { useTheme } from '../context/ThemeContext';
import Topnav from '../components/home/Topnav';
import SearchArea from '../components/home/SearchArea';
import { SearchAreaContext } from '../context/SearchAreaContext';
import FilterArea from '../components/home/FilterArea';
import Employees from '../components/home/Employees';


const Home = () => {
    const { theme } = useTheme();
    const { isFocusSearch, setIsFocusSearch } = useContext(SearchAreaContext);

    return (
        <View className={`${theme.bg_3} flex-1 items-center`}>
            <Topnav />
            <SearchArea />
            {
                !isFocusSearch && (
                    <ScrollView className={`flex-1 w-full`}>
                        <View className={`flex-1 w-full items-center`}>
                        <FilterArea />
                        <Employees />
                        </View>
                    </ScrollView>
                )
            }
        </View>
    )
}

export default Home