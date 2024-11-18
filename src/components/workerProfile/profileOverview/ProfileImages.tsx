import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { useTheme } from '../../../context/ThemeContext'
import Swiper from 'react-native-swiper';

const ProfileImages = () => {
  const { theme } = useTheme();

  const images = [
    'https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg',
    'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2B9LswCEh3jElEIiDsU4C60RTU3Chlv-h2A&s',
  ];




  return (
    <Swiper
      className={`h-40`}
      showsPagination
      autoplay
      autoplayTimeout={4}
      paginationStyle={{ bottom: 5,columnGap:8 }}
      dot={<View className={`w-2 h-2 rounded-full ${theme.bg_2}`} />}
      activeDot={<View className={`w-2.5 h-2.5 rounded-full ${theme.bg_1}`} />}
    >
      {
        images.map((image, index) => (
          <View key={index} className={`w-full h-full`}>
            <Image source={{ uri: image }} className={`w-full h-full`} resizeMode='cover' />
          </View>
        ))
      }
    </Swiper>
  )
}



export default ProfileImages