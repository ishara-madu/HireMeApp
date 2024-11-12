
import { View, Text } from 'react-native'
import React from 'react'
import NearbyYou from './employees/NearbyYou'

const Employees = () => {
    return (
        <View className={`w-11/12 mt-5`}>
            <NearbyYou/>
        </View>
    )
}

export default Employees