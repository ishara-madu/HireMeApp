import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Reviews = () => {
  const { theme } = useTheme();
  const reviews = [
    {
      name: "John Doe",
      date: "14 feb 2024",
      image: "https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg",
      rating: 4,
      review: "This is a great app! I love the way it helps me manage my projects."
    },
    {
      name: "Jane Smith",
      date: "14 feb 2024",
      image: "https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg",
      rating: 5,
      review: "I've been using this app for a few months now and I absolutely love it! It's helped me save time and money."
    },
    {
      name: "Mike Johnson",
      date: "14 feb 2024",
      image: "https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg",
      rating: 3,
      review: "I've only used this app a few times but I found it useful. It's easy to use and has a good design."
    },

  ]


  const RenderItems = ({ item,index }: any) => {

    const RenderStars = ({ rating }: any) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          stars.push(<FontAwesome key={i} name="star" size={13} color={theme.color_1} />);
        } else {
          stars.push(<FontAwesome key={i} name="star-o" size={13} color={theme.color_1} />);
        }
      }

      return <View className={`flex-row  gap-x-0.5`}>{stars}</View>;
    };
    return (
      <View className={`w-full h-32 ${theme.bg_3} shadow-lg shadow-black items-center mt-2 ${index == (reviews.length)-1 && "mb-2"} justify-center`}>
        <View className={`w-11/12 h-[80%] gap-y-1`}>
          <View className={`w-full flex-row justify-between items-center`}>
            <View className={`flex-row items-center gap-x-2`}>
              <Image source={{ uri: item.image }} resizeMode='cover' className={`w-12 h-12 rounded-full overflow-hidden`} />
              <View>
                <Text className={`text-xs font-semibold`}>{item.name}</Text>
                <Text className={`text-[10px]`}>{item.date}</Text>
              </View>
            </View>
            <View className={`items-center gap-x-0.5`}>
              <RenderStars rating={item.rating} />
            </View>
          </View>
          <View className={`w-full flex-row justify-center items-center`}>
            <Text className={`text-[10px] opacity-60 font-semibold`}>{item.review}</Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View className={`w-full flex-1 ${theme.bg_3}`}>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={reviews}
        keyExtractor={(item, id) => id.toString()}
        renderItem={({ item,index }) => <RenderItems item={item} index={index} />}
      />
    </View>
  )
}

export default Reviews