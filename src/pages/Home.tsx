import { View, Text, Image, ScrollViewComponent, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useTheme } from '../context/ThemeContext';
import Topnav from '../components/home/Topnav';
import SearchArea from '../components/home/SearchArea';
import { SearchAreaContext } from '../context/SearchAreaContext';
import FilterArea from '../components/home/FilterArea';
import Employees from '../components/home/Employees';
import SearchResult from '../components/home/employees/SearchResult';
import DropdownList from '../components/home/filterArea/dropDown/DropdownList';
import { MapContext } from '../context/MapContext';
import Map from '../components/home/map/Map';
import MainScreenFooter from '../components/footer/MainScreenFooter';

const Home = () => {
    const { theme } = useTheme();
    const { isFocusSearch, isFilterShow, isSearchEmpty } = useContext(SearchAreaContext);
    const { isOpenMapArea } = useContext(MapContext);

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
                                {
                                    isOpenMapArea ? (
                                        <Map/>
                                    ) : (
                                        <SearchResult />
                                    )
                                }
                            </>
                        )
                    }
                </View>
                <MainScreenFooter/>

            </>
            {/* <DropdownList/> */}
        </View>
    )
}

export default Home