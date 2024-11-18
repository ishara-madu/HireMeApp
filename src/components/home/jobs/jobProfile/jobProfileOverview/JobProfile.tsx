import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ProfileImages from '../../../../workerProfile/profileOverview/ProfileImages'
import { useTheme } from '../../../../../context/ThemeContext'
import JobNaming from './jobProfileOverviewContent/JobNaming'
import JobDetails from './jobProfileOverviewContent/JobDetails'
import JobRating from './jobProfileOverviewContent/JobRating'
import JobDescription from './jobProfileOverviewContent/JobDescription'
import ReqestService from '../ReqestService'
import JobProfileHistory from '../jobProfileHistory/JobProfileHistory'

const JobProfile = () => {
    const { theme } = useTheme();
    return (
        <View className={`w-full flex-1 items-center z-0`}>
            <ScrollView className={`w-full h-full ${theme.bg_3}`}>
                <ProfileImages />
                <JobNaming />
                <JobRating />
                <JobDetails />
                <JobDescription />
            </ScrollView>
            <ReqestService/>
        </View>
    )
}

export default JobProfile