
import { View, Text } from 'react-native'
import React from 'react'
import NearbyYou from './employees/NearbyYou'
import RecentlyJoined from './employees/RecentlyJoined'
import TopRated from './employees/TopRated'

const Employees = () => {
    return (
        <View className={`w-11/12 mt-3 mb-12`}>
            <NearbyYou/>
            <RecentlyJoined/>
            <TopRated/>
        </View>
    )
}

export default Employees