import { View, Text } from 'react-native'
import React from 'react'
import TopLeft from '../components/topnav/TopLeft'
import ProfileDetailsMenu from '../components/workerProfile/ProfileDetailsMenu'
import ProfileOverview from '../components/workerProfile/ProfileOverview'

const WorkerProfile = () => {
    return (
        <View className={`h-full w-full`}>
            <TopLeft title='PixelEye Production'/>
            <ProfileDetailsMenu/>
            <ProfileOverview/>
        </View>
    )
}

export default WorkerProfile