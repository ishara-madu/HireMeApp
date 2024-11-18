import { View, Text } from 'react-native'
import React from 'react'
import TopCenter from '../topnav/TopCenter'
import Jobs from './jobs/Jobs'

const JobsArea = () => {
    return (
        <View className={`w-full h-full`}>
            <TopCenter title='Jobs'/>
            <Jobs/>
        </View>
    )
}

export default JobsArea