/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useListBannerQuery} from '../../../redux/api/bannersApi';

const Advertisement = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const {data} = useListBannerQuery();
  console.log(
    '🚀 ~ file: Advertisement.tsx:10 ~ Advertisement ~ data:',
    data?.data,
  );
  const images = data?.data ?? [];
  useEffect(() => {
    const interval = setInterval(() => {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [imageIndex]);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={{uri: images[imageIndex] && images[imageIndex].imageUrl}}
        style={{width: '80%', height: '80%', borderRadius: 10}}
      />
    </View>
  );
};

export default Advertisement;
