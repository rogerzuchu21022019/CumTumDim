import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import SafeKeyComponent from '../../../components/safe_area/SafeKeyComponent';
import Router from '../../../navigation/Router';
import {constants} from '../../../shared/constants';
import {fetchLogin} from '../../admin/apiUser';
import {authSelector} from '../../admin/sliceAuth';
import StyleLogin from './StyleLogin';

import auth, {firebase} from '@react-native-firebase/auth';
import {LOG} from '../../../../../logger.config';
import {StackActions} from '@react-navigation/native';
import {fetchCategories, fetchDishes} from '../../product/apiProduct';

const LoginScreen = ({navigation}) => {
  const log = LOG.extend(`LOGIN.JS`);
  const data = useSelector(authSelector);
  // log.info("🚀 ~ file: Login.js:30 ~ LoginScreen ~ data:", data);

  const isLoading = data?.isLoading;

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

  useEffect(() => {
    data.user.role ? moveTo() : null;
  }, [data.user.role]);

  const dispatch = useDispatch();

  const moveTo = async () => {
    if (data.user.role === constants.ROLE.ADMIN) {
      navigation.navigate(Router.ADMIN_STACK);
      dispatch(fetchCategories());
      dispatch(fetchDishes());
    } else {
      navigation.navigate(Router.CUSTOMER_STACK);
      dispatch(fetchCategories());
      dispatch(fetchDishes());
    }
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      // log.info('🚀 ~ file: Login.js:38 ~ signIn ~ idToken:', idToken);

      const {accessToken} = await GoogleSignin.getTokens();

      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );

      dispatch(fetchLogin(idToken, accessToken));

      return await auth().signInWithCredential(credential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        log.error(
          '🚀 ~ file: Login.js:50 ~ signIn ~ error: SIGN_IN_CANCELLED',
          error,
        );
      } else if (error.code === statusCodes.IN_PROGRESS) {
        log.error(
          '🚀 ~ file: Login.js:53 ~ signIn ~ error: IN_PROGRESS',
          error,
        );
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        log.info(
          '🚀 ~ file: Login.js:55 ~ signIn ~ error: PLAY_SERVICES_NOT_AVAILABLE',
          error,
        );
      } else {
        log.info(
          '🚀 ~ file: Login.js:55 ~ signIn ~ error DEV OR CODE=10 :',
          error,
        );
      }
    }
  };
  return (
    <SafeKeyComponent>
      <View style={StyleLogin.container}>
        {/* header */}
        <View style={StyleLogin.header}>
          <Text style={StyleLogin.textHeader}>Đăng nhập</Text>
          <View style={StyleLogin.viewImage}>
            <Image
              style={StyleLogin.imageHeader}
              source={require('../../../../assets/logo.png')}
            />
          </View>
        </View>
        {/* body */}
        <View style={StyleLogin.body}>
          <View style={StyleLogin.viewLoad}>
            {isLoading ? (
              <ActivityIndicator size="large" color={constants.COLOR.GREY} />
            ) : null}
          </View>
          <View style={StyleLogin.viewbtn}>
            <View style={StyleLogin.touchAbleOpacityBody}>
              <TouchableOpacity onPress={signIn}>
                <Image
                  style={StyleLogin.imageBody1}
                  source={require('../../../../assets/chugg.png')}
                />
                <Image
                  style={StyleLogin.imageBody2}
                  source={require('../../../../assets/logogg.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default LoginScreen;
