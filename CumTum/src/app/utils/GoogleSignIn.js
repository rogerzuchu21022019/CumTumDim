//googlesignin in client-side
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {View, Text, Linking} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AxiosInstance} from '../api/AxiosInstance';

const GoogleSignIn = ({navigation}) => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['profile', 'email'],
      webClientId:
        '8392071542-gql34f16dq5snk9vpk9sobs51m55bndj.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId:
        '8392071542-6jau34qpcu594et1vbt2uukakso783au.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });

    return () => {};
  }, []);

  const signIn = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    // Get the users ID token
    const {idToken, user} = await GoogleSignin.signIn();
    const res = await AxiosInstance().get(`/auth/google`);
    // await AxiosInstance().get(`/auth/google/callback?idToken=${idToken}`);
    console.log('🚀 ~ file: GoogleSignIn.js:39 ~ signIn ~ res:', res);
    navigation.replace('Home');
  };

  // const openWebView = async () => {
  //   // const url = "https://cumtum.becofoodstore.click/api/auth/google"
  //   const url = "https://accounts.google.com/ServiceLogin/signinchooser?elo=1&ifkv=AWnogHejI-oVSwW1qx9xmapVyYxl6BfIDgw1B8tUgzIonpd3TviDE4-jwFFDGsKN80tZKtq1WcH_zA&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
  //   navigation.navigate('Web', {url: url})
  // };

  return (
    <View>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
      <View></View>
    </View>
  );
};

export default GoogleSignIn;
