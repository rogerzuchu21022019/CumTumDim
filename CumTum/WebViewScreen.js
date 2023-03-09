import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';
import {AxiosInstance} from './src/app/api/AxiosInstance';

const MyWebView = ({route, navigation}) => {
  const url = route.params.url;
  const handleGoogleLoginSuccess = () => {
    // Do something with the user's Google account information

    // Navigate to another screen
    navigation.navigate('Home');
  };
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: url}}
        javaScriptEnabled={true}
        userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
        onNavigationStateChange={state => {
          if (state.url.includes('google.com')) {
            handleGoogleLoginSuccess();
          }
        }}
        
      />
    </View>
  );
};

export default MyWebView;
