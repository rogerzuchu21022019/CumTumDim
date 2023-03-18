import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LOG} from '../../../../../logger.config';
import SafeKeyComponent from '../../../components/safe_area/SafeKeyComponent';
import Router from '../../../navigation/Router';
import {constants} from '../../../shared/constants';
import {fetchLogin} from '../../admin/apiAdmin';
import {authSelector} from '../../admin/sliceAuth';
import StyleLogin from './StyleLogin';

import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const log = LOG.extend(`GOOGLE_SIGNIN.JS`);
  const data = useSelector(authSelector);
  console.log('🚀 ~ file: GoogleSignIn.js:22 ~ GoogleSignIn ~ data:', data);
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
    if (data.user.role) {
      moveTo();
    }
  }, [data.user.role]);

  const dispatch = useDispatch();

  const moveTo = async () => {
    data.user.role === constants.ROLE.ADMIN
      ? navigation.navigate(Router.ADMIN_STACK)
      : navigation.navigate(Router.CUSTOMER_STACK);
  };
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      // console.log("🚀 ~ file: Login.js:44 ~ signIn ~ currentUser:", currentUser)
      console.log('🚀 ~ file: Login.js:38 ~ signIn ~ idToken:', idToken);
      // log.info('🚀 ~ file: GoogleSignIn.js:34 ~ signIn ~ idToken:', idToken);

      const {accessToken} = await GoogleSignin.getTokens();
      // console.log(
      //   '🚀 ~ file: Login.js:44 ~ signIn ~ accessToken:',
      //   accessToken,
      // );

      dispatch(fetchLogin(idToken, accessToken));
      
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(
          '🚀 ~ file: Login.js:50 ~ signIn ~ error: SIGN_IN_CANCELLED',
          error,
        );
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(
          '🚀 ~ file: Login.js:53 ~ signIn ~ error: IN_PROGRESS',
          error,
        );
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(
          '🚀 ~ file: Login.js:55 ~ signIn ~ error: PLAY_SERVICES_NOT_AVAILABLE',
          error,
        );
      } else {
        console.log(
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
          <Text style={StyleLogin.Textheader}>Đăng nhập</Text>
          <Image
            style={StyleLogin.imageHeader}
            source={require('../../../../assets/logo.png')}
          />
        </View>
        {/* body */}
        <View style={StyleLogin.body}>
          {isLoading && <ActivityIndicator size={'large'} />}

          <View style={StyleLogin.TouchableOpacitybody}>
            <TouchableOpacity onPress={signIn}>
              <View>
                <Image
                  style={StyleLogin.imagebody1}
                  source={require('../../../../assets/chugg.png')}
                />
                <Image
                  style={StyleLogin.imagebody2}
                  source={require('../../../../assets/logogg.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default LoginScreen;
