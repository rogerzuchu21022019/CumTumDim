import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import Router from '../../../navigation/Router';
import styleSplashScreen from './StyleSplashScreen';

const SplashScreen = props => {
  const {navigation} = props;
  const nextScreen = () => {
    navigation.replace(Router.LOGIN);
  };
  useEffect(() => {
    setTimeout(nextScreen, 3000);
  }, []);
  return (
    <View style={styleSplashScreen.container}>
      <View style={styleSplashScreen.header}></View>
      <View style={styleSplashScreen.body}>
        <Image
          style={styleSplashScreen.imageBody}
          source={require('../../../../assets/logo.png')}
        />
      </View>
      <View style={styleSplashScreen.footers}></View>
    </View>
  );
};

export default SplashScreen;
