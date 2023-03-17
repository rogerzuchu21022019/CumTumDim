import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {AxiosInstance} from './src/app/shared/utils/AxiosInstance';

import Router from '../../../../navigation/Router';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import { removeToken } from '../../../../shared/utils/AsyncStorage';

const HomeCustomer = ({route, navigation}) => {
  // const user = route.params.user;
  const handleLogout = async () => {
    try {
      
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      navigation.replace(Router.LOGIN);
      //oke
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeKeyComponent>
      <View>
        <Text>Home Customer</Text>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </SafeKeyComponent>
  );
};

export default HomeCustomer;
