import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import Name from './profileOverview/Name';
import ProfileDetails from './profileOverview/ProfileDetails';
import ProfileDescription from './profileOverview/ProfileDescription';
import ProfileContact from './profileOverview/ProfileContact';
import ProfileImages from './profileOverview/ProfileImages';

const ProfileOverview = () => {
    const { theme } = useTheme();
    return (
        <View className={`w-full flex-1 items-center z-0`}>
            <ScrollView className={`w-full h-full ${theme.bg_3}`}>
                <ProfileImages />
                <Name />
                <ProfileDetails />
                <ProfileContact />
                <ProfileDescription />
            </ScrollView>
        </View>
    )
}

export default ProfileOverview