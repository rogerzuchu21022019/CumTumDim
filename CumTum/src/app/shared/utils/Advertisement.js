import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState, useEffect } from 'react';


const Advertisement = () => {

    const [imageIndex, setImageIndex] = useState(0);
    const images = [require('../../../assets/1.png'), require('../../../assets/2.png'), require('../../../assets/3.png')];
  
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
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image source={images[imageIndex]} style={{ width: "90%", height: "80%",}} />
    </View>
  )
}

export default Advertisement

const styles = StyleSheet.create({})