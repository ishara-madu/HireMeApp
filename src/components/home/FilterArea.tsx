import { View, Text } from 'react-native'
import React from 'react'
import Dropdown from './filterArea/Dropdown'

const FilterArea = () => {
    return (
        <View className={`w-11/12 h-auto mt-3`}>
            <Text className={`text-xs font-semibold`}>Find employee of your choice</Text>
            <View className={`flex-row justify-between w-full mt-3`}>
                <Dropdown id={0} />
                <Dropdown id={1} />
            </View>
            <View className={`flex-row justify-between w-full mt-3`}>
                <Dropdown id={2} />
                <Dropdown id={3} />
            </View>
        </View>
    )
}

export default FilterArea