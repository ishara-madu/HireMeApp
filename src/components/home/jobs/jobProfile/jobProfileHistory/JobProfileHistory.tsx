import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../../context/ThemeContext';
import ReqestService from '../ReqestService';
import HistoryComponent from './jobProfileHistoryContent/HistoryComponent';

const JobProfileHistory = () => {
    const { theme } = useTheme();
    return (
        <View className={`w-full flex-1 items-center z-0`}>
            <ScrollView className={`w-full h-full ${theme.bg_3}`}>
                <HistoryComponent/>
            </ScrollView>
        </View>
    )

}

export default JobProfileHistory