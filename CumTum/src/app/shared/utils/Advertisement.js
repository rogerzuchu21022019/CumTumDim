import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState, useEffect } from 'react';


const Advertisement = () => {

    const [imageIndex, setImageIndex] = useState(0);
    const images = [require('../../../assets/panel.png'),require('../../../assets/pannel1.jpg'),require('../../../assets/pannel2.jpg')];
  
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
    <View style={{  alignItems:'center',justifyContent:'center'}}>
      <Image source={images[imageIndex]} style={{ width: "80%", height: "80%",borderRadius:10}} />
    </View>
  )
}

export default Advertisement

const styles = StyleSheet.create({})