//googlesignin in client-side
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {View, Text, Linking, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AxiosInstance} from './AxiosInstance';
import Router from '../../navigation/Router';

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
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      console.log("🚀 ~ file: GoogleSignIn.js:34 ~ signIn ~ idToken:", idToken)
      
      const {accessToken} = await GoogleSignin.getTokens();
      console.log("🚀 ~ file: GoogleSignIn.js:36 ~ signIn ~ accessToken:", accessToken)
      
      const res = await AxiosInstance().post('/login', {
        idToken,
        accessToken
      });
      console.log('🚀 ~ file: GoogleSignIn.js:35 ~ res ~ res:', res);
      navigation.replace(Router.ADMIN_STACK);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  };

  return (
    <View>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
};

export default GoogleSignIn;
