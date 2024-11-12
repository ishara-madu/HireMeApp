import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import { useTheme } from '../context/ThemeContext';
import Topnav from '../components/home/Topnav';
import SearchArea from '../components/home/SearchArea';
import { SearchAreaContext } from '../context/SearchAreaContext';


const Home = () => {
    const { theme } = useTheme();
    const {isFocusSearch, setIsFocusSearch} = useContext(SearchAreaContext);

    return (
        <View className={`${theme.bg_3} flex-1 items-center`}>
          <Topnav/>
          <SearchArea/>  
        </View>
    )
}

export default Home