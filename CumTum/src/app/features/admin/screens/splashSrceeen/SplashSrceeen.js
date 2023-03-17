import { View, Text,Image } from 'react-native'
import React, {useEffect} from 'react'
import Router from '../../../../navigation/Router';
import stylesplashSrceeen from './StyleSplashSrceeen'
const SplashSrceeen = (props) => {
     const { navigation } = props;
     const nextScreen = () => {
         navigation.replace(Router.LOGIN);
     }
     useEffect(() => {
         setTimeout(nextScreen, 3000);
     }, []);
  return (
   <View style={stylesplashSrceeen.container}>
       <View style={stylesplashSrceeen.header}></View>
       <View style={stylesplashSrceeen.body}>
       <Image
            style={stylesplashSrceeen.imageBody}
            source={require('../../../../../../src/assets/image/logo.png')}
          /> 
       </View>
       <View style={stylesplashSrceeen.foosters}></View>


   </View>
  )
}

export default SplashSrceeen