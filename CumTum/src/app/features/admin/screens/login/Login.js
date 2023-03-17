import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LOG} from '../../../../../../logger.config';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import Router from '../../../../navigation/Router';
import {constants} from '../../../../shared/constants';
import {fetchLogin} from '../../apiAdmin';
import {adminSelector} from '../../sliceAdmin';
import StyleLogin from '../login/StyleLogin';

import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const log = LOG.extend(`GOOGLE_SIGNIN.JS`);
  const data = useSelector(adminSelector);
  console.log('🚀 ~ file: GoogleSignIn.js:22 ~ GoogleSignIn ~ data:', data);
  const isLoading = data.isLoading;
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
      // console.log("🚀 ~ file: Login.js:44 ~ signIn ~ currentUser:", currentUser)
      console.log("🚀 ~ file: Login.js:38 ~ signIn ~ idToken:", idToken)
      // log.info('🚀 ~ file: GoogleSignIn.js:34 ~ signIn ~ idToken:', idToken);

      const {accessToken} = await GoogleSignin.getTokens();
      console.log("🚀 ~ file: Login.js:44 ~ signIn ~ accessToken:", accessToken)

      dispatch(fetchLogin(idToken, accessToken));
      // navigation.navigate(Router.ADMIN_STACK)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("🚀 ~ file: Login.js:50 ~ signIn ~ error: SIGN_IN_CANCELLED", error)
        
      } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log("🚀 ~ file: Login.js:53 ~ signIn ~ error: IN_PROGRESS", error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log("🚀 ~ file: Login.js:55 ~ signIn ~ error: PLAY_SERVICES_NOT_AVAILABLE", error)
    } else {
        console.log("🚀 ~ file: Login.js:55 ~ signIn ~ error DEV OR CODE=10 :", error)
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
              source={require('../../../../../../src/assets/image/logo.png')}
            />
          </View>
        </View>
        {/* body */}
        <View style={StyleLogin.body}>
          <View style={StyleLogin.viewbtn}>
            <View style={StyleLogin.touchAbleOpacityBody}>
              <TouchableOpacity
                onPress={GoogleSignIn => (
                  <GoogleSignIn navigation={navigation} />
                )}>
                <Image
                  style={StyleLogin.imageBody1}
                  source={require('../../../../../../src/assets/image/chugg.png')}
                />
                <Image
                  style={StyleLogin.imageBody2}
                  source={require('../../../../../../src/assets/image/logogg.png')}
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
