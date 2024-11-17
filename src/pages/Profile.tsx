import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import MainScreenFooter from '../components/footer/MainScreenFooter'
import { useTheme } from '../context/ThemeContext';
import TopCenter from '../components/topnav/TopCenter';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
const Profile = () => {
  const { theme } = useTheme();

  let numb: any = 0;
  const items = {
    1: {
      icon: <AntDesign name="hearto" size={18} color="black" />,
      title: "Favorites",
      color: "text-black"
    },
    2: {
      icon: <AntDesign name="swap" size={18} color="black" />,
      title: "Switch to Selling",
      color: "text-black"
    },

    3: {
      icon: <AntDesign name="profile" size={18} color="black" />,
      title: "Terms & conditions",
      color: "text-black"
    },
    4: {
      icon: <AntDesign name="infocirlceo" size={18} color="black" />,
      title: "Privacy policy",
      color: "text-black"
    },
    5: {
      icon: <AntDesign name="questioncircleo" size={18} color="black" />,
      title: "Help & support",
      color: "text-black"
    },
    6: {
      icon: <AntDesign name="logout" size={18} color="red" />,
      title: "Logout",
      color: "text-red-600"
    },
    
  }

  return (
    <View className={`w-full h-full ${theme.bg_3}`}>
      <TopCenter title={"Profile"} />

      <View className={`w-full items-center h-[15%] shadow-lg shadow-black ${theme.bg_3}`}>
        <View className={`flex-row items-center justify-between h-full w-11/12`}>
          <View className={`h-full flex-row items-center`}>
            <View className={`w-14 h-14 rounded-full overflow-hidden`}>
              <Image source={require("../../assets/profile.jpg")} resizeMode='cover' className={`w-full h-full`} />
            </View>
            <View className={`ml-2`}>
              <Text className={`text-xs font-semibold`}>Isharamadu</Text>
              <Text className={`text-[10px] font-semibold opacity-60`}>Isharamadu@gmail.com</Text>
            </View>
          </View>
          <TouchableOpacity className={`p-1`}>
            <Feather name="edit" size={18} color={theme.color_1} />
          </TouchableOpacity>
        </View>
      </View>
      <View className={`flex-1 w-full mt-2 items-center`}>
        <ScrollView showsVerticalScrollIndicator={false} className={`w-11/12 mb-12 flex-1`}>
          {
            Object.entries(items).map(([key, item]) => {
              return (
                <TouchableOpacity key={key} className={`w-full h-14 flex-row justify-between`}>
                  <View className={`h-full items-center flex-row gap-x-3 px-2`}>
                    {item.icon}
                    <Text className={`text-xs ${item.color}`}>{item.title}</Text>
                  </View>
                  <View className={`h-full px-2 justify-center`}>
                    <Octicons name="chevron-right" size={18} color="black" />
                  </View>
                </TouchableOpacity>
              )
            })
          }

        </ScrollView>
      </View>

      <MainScreenFooter />
    </View>
  )
}

export default Profile