import { View, Text } from 'react-native'
import React from 'react'
import TopCenter from '../../topnav/TopCenter'
import Jobs from './Jobs'
import JobProfile from './jobProfile/jobProfileOverview/JobProfile'
import JobProfileHistory from './jobProfile/jobProfileHistory/JobProfileHistory'

const JobsArea = () => {
    return (
        <View className={`w-full h-full`}>
            <TopCenter title='Jobs'/>
            {/* <Jobs/> */}
            {/* <JobProfile/> */}
            <JobProfileHistory/>
        </View>
    )
}

export default JobsArea