//googlesignin in client-side
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {View, Text, Linking, Button, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AxiosInstance} from './AxiosInstance';
import Router from '../../navigation/Router';
import {constants} from '../constants';
import {saveToken} from './AsyncStorage';
import {LOG} from '../../../../logger.config';
import {useDispatch, useSelector} from 'react-redux';
import {adminSelector} from '../../features/admin/sliceAdmin';
import {fetchLogin} from '../../features/admin/apiAdmin';
const log = LOG.extend(`GOOGLE_SIGNIN.JS`);

const GoogleSignIn = ({navigation}) => {
  const data = useSelector(adminSelector);
  const isLoading = data.isLoading;
  // console.log(
  //   '🚀 ~ file: GoogleSignIn.js:23 ~ GoogleSignIn ~ isLoading:',
  //   isLoading,
  // );
  // console.log('🚀 ~ file: GoogleSignIn.js:23 ~ GoogleSignIn ~ data:', data);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: [constants.SCOPES.PROFILE, constants.SCOPES.EMAIL],
      webClientId: constants.GOOGLE_CONSOLE.WEB_CLIENT,
      offlineAccess: true,
      iosClientId: constants.GOOGLE_CONSOLE.IOS_CLIENT,
      profileImageSize: 120,
    });

    return () => {};
  }, []);
  const dispatch = useDispatch();
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      const {idToken} = await GoogleSignin.signIn();
      log.info('🚀 ~ file: GoogleSignIn.js:34 ~ signIn ~ idToken:', idToken);

      const {accessToken} = await GoogleSignin.getTokens();
      dispatch(fetchLogin(idToken, accessToken));
      // navigation.replace(Router.ADMIN_STACK)
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
      {isLoading && <ActivityIndicator size={'large'} />}
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
