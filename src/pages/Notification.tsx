import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import TopLeft from '../components/topnav/TopLeft'
import { useTheme } from '../context/ThemeContext'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
const Notification = () => {
  const { theme } = useTheme();
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const [notifyDismissed, setNotifyDismissed] = useState(false);
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


  const handleDelete = (id: string) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
    setOpenItemId(null);
    setNotifyDismissed(true);
    setTimeout(() => {
      setNotifyDismissed(false);
    }, 1000);
  };

  const renderRightActions = () => (
    <View className="flex-1 justify-center bg-red-500 px-4 items-end">
      <Text className="text-white font-semibold text-xs">Delete</Text>
    </View>
  );
  const renderItem = ({ item }: { item: any }) => (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={renderRightActions}
        onSwipeableOpen={() => handleDelete(item.id)}
        onSwipeableClose={() => setOpenItemId(null)}
      >
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
              )
            }
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>

  );
  return (
    <View className={`w-full h-full ${theme.bg_3} items-center`}>
      <TopLeft title="Notification" />
      <View className={`w-full flex-1 items-center`}>
        {
          notifications.length > 0 ? (
            <FlatList
              className={`flex-1 w-full`}
              data={notifications}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              extraData={openItemId}
            />
          ) : (
            <View className={`w-full flex-1 items-center justify-center opacity-40`}>
              <Text className={`text-xs ${theme.tx_1} `}>No new notifications</Text>
            </View>
          )
        }
      </View>
      {
        notifyDismissed && (
          <View className={`w-11/12 h-10 bg-black opacity-80 rounded-md justify-center pl-5 mb-2`}>
            <Text className={`text-[10px] ${theme.tx_2}`}>Notification dismissed!</Text>
          </View>
        )
      }

    </View>
  )
}

export default Notification