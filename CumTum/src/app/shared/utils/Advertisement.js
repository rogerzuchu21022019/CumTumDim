import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState, useEffect } from 'react';


const Advertisement = () => {

    const [imageIndex, setImageIndex] = useState(0);
    const images = [require('../../../assets/panel.png'),require('../../../assets/hinh1.jpg'),require('../../../assets/hinh2.jpg'),require('../../../assets/hinh3.jpg'),require('../../../assets/hinh4.jpg'),require('../../../assets/hinh5.jpeg')];
  
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
    <View style={{  alignItems:'center',justifyContent:'center',}}>
      <Image source={images[imageIndex]} style={{ width: "90%", height: "80%",borderRadius:10}} />
    </View>
  )
}

export default Advertisement

const styles = StyleSheet.create({})