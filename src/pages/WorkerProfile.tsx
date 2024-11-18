import { View, Text } from 'react-native'
import React from 'react'
import TopLeft from '../components/topnav/TopLeft'
import ProfileDetailsMenu from '../components/topnav/ProfileDetailsMenu'
import ProfileOverview from '../components/workerProfile/ProfileOverview'
import Reviews from '../components/workerProfile/Reviews'

const WorkerProfile = () => {
    return (
        <View className={`h-full w-full`}>
            <TopLeft title='PixelEye Production'/>
            <ProfileDetailsMenu/>
            {/* <ProfileOverview/> */}
            <Reviews/>
        </View>
    )
}

export default WorkerProfile