import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TrendingSearch = () => {


    const exRecent = [
        { id: '1', title: 'Trending Item 1' },
        { id: '2', title: 'Trending Item 2' },
        { id: '3', title: 'Trending Item 3' },
        { id: '4', title: 'Trending Item 3' },
        { id: '5', title: 'Trending Item 3' },
    ];

    return (
        <View className={`flex h-auto w-11/12 mt-4`}>
            <View className={`flex-row justify-between items-center h-5 w-full`}>
                <Text className={`text-xs font-semibold`}>Trending search</Text>
            </View>
            <View className={`flex-row justify-start items-start h-auto mt-1 w-11/12`}>

                <FlatList
                    data={exRecent}
                    keyExtractor={(item) => item.id}  // Make sure each item has a unique 'id'
                    renderItem={({ item }) => (
                        <>
                            <TouchableOpacity className={`flex-row opacity-50 h-10 items-center gap-x-2 border-b`}>
                                <MaterialIcons name="trending-up" size={18} color="black" />
                                <Text className={`text-xs`}>{item.title}</Text>
                            </TouchableOpacity>
                        </>
                    )}
                />
            </View>
        </View>
    )
}

export default TrendingSearch