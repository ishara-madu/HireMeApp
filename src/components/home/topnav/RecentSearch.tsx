import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const RecentSearch = () => {


    const exRecent = [
        { id: '1', title: 'Recent Item 1' },
        { id: '2', title: 'Recent Item 2' },
        { id: '3', title: 'Recent Item 2' },
        { id: '4', title: 'Recent Item 2' },
        // { id: '5', title: 'Recent Item 2' },
        // { id: '6', title: 'Recent Item 2' },
        // { id: '7', title: 'Recent Item 2' },
        // { id: '8', title: 'Recent Item 2' },
        // { id: '9', title: 'Recent Item 2' },
        // { id: '10', title: 'Recent Item 2' },
        // { id: '11', title: 'Recent Item 2' },
        // { id: '12', title: 'Recent Item 2' },
        // { id: '13', title: 'Recent Item 2' },
        // { id: '14', title: 'Recent Item 2' },
    ];
    
    return (
        <View className={`flex h-auto mt-3 w-11/12`}>
            <View className={`flex-row justify-between items-center h-5 w-full`}>
                <Text className={`text-xs font-semibold`}>Recent search</Text>
                <TouchableOpacity>
                <Text className={`text-[10px] opacity-40`}>Clear all</Text>
                </TouchableOpacity>
            </View>
            <View className={`flex-row justify-start items-start h-auto mt-1 w-11/12`}>

                <FlatList
                    data={exRecent}
                    keyExtractor={(item) => item.id}  // Make sure each item has a unique 'id'
                    renderItem={({ item }) => (
                        <>
                            <TouchableOpacity className={`flex-row opacity-50 h-10 items-center gap-x-2 border-b`}>
                                <MaterialIcons name="history" size={18} color="black" />
                                <Text className={`text-xs`}>{item.title}</Text>
                            </TouchableOpacity>
                        </>
                    )}
                />
            </View>
        </View>
    )
}

export default RecentSearch