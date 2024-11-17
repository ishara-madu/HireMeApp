import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import TopLeft from '../components/topnav/TopLeft'
import { useTheme } from '../context/ThemeContext'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Notification = () => {
  const { theme } = useTheme();
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      image: 'https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg',
      name: "eranga auto AC",
      request: false,
      item: "item1",
      description: "started repairing",
      time: "3 hours ago",
    },
    {
      id: '3',
      image: 'https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg',
      name: "eranga auto AC",
      request: false,
      item: "item1",
      description: "started repairing",
      time: "3 hours ago",
    },
    {
      id: '2',
      image: 'https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr',
      name: "PixelEye studio",
      request: true,
      item: "",
      description: "",
      time: "3 hours ago",
    },
  ]);


  const swipeableRef = useRef<Swipeable | null>(null);
  const handleDelete = (id: string) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
    if (swipeableRef.current) {
      swipeableRef.current.close();
    }
  };

  const renderRightActions = () => (
    <View className="flex-1 justify-center bg-red-500 px-4 items-end">
      <Text className="text-white font-semibold text-xs">Delete</Text>
    </View>
  );
  const renderItem = ({ item }: { item: any }) => (

    <View className={`shadow-lg shadow-black ${theme.bg_3} justify-center items-center`}>
      <View className={`w-11/12`}>
        {
          item.request ? (
            <View className={`flex-row h-20 items-center gap-x-4 py-1 ${theme.bg_3}`}>
              <Image
                className={`w-16 h-16 rounded-full`}
                source={
                  item.image
                    ? { uri: item.image }
                    : require('../../assets/profile.png') // Replace with your default image path
                }
              />
              <View className={`h-full justify-center flex-1`}>
                <View className={`mb-1`}>
                  <Text className={`text-xs`}>{item.name}</Text>
                  <Text className={`text-[10px] opacity-60`}>{item.time}</Text>
                </View>
                <View className={`flex h-[30%] flex-row justify-between items-center`}>
                  <TouchableOpacity className={`${theme.bg_1} w-[49%] items-center justify-center h-full rounded-md shadow-md shadow-black`}>
                    <Text className={`text-[10px] font-semibold ${theme.tx_2}`}>Confirm</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className={`bg-[#adadb0] w-[49%] items-center justify-center h-full rounded-md shadow-md shadow-black`}>
                    <Text className={`text-[10px] font-semibold ${theme.tx_2}`}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <GestureHandlerRootView>
              <Swipeable
                ref={(ref) => {
                  if (ref) swipeableRef.current = ref;
                }}
                renderRightActions={renderRightActions}
                onSwipeableOpen={() => handleDelete(item.id)}
              >
                <View className={`flex-row h-20 items-center gap-x-4 ${theme.bg_3} py-3`}>
                  <Image
                    className={`w-20 h-14 rounded-md`}
                    source={
                      item.image
                        ? { uri: item.image }
                        : require('../../assets/profile.png') // Replace with your default image path
                    }
                  />
                  <View className={`h-full justify-between`}>
                    <Text className={`text-xs`}>{item.name}</Text>
                    <Text className={`text-[10px] ${theme.tx_3}`}><Text className={`${theme.tx_1} font-semibold`}>{`${item.item} : `}</Text>{item.description}</Text>
                    <Text className={`text-[10px] opacity-60`}>{item.time}</Text>
                  </View>
                </View>
              </Swipeable>
            </GestureHandlerRootView>
          )
        }
      </View>
    </View>

  );
  return (
    <View className={`w-full h-full ${theme.bg_3}`}>
      <TopLeft title="Notification" />
      <View className={`w-full flex-1 items-center`}>
        {/* <View className={`w-full flex-1 items-center justify-center`}>
          <Text className={`text-xs ${theme.tx_1} opacity-60`}>No new notifications</Text>
        </View> */}
        <FlatList
          className={`flex-1 w-full`}
          data={notifications}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  )
}

export default Notification