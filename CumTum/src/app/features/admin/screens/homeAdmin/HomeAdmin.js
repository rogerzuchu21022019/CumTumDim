import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {AxiosInstance} from '../../../../shared/utils/AxiosInstance';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import Router from '../../../../navigation/Router';
import { removeToken } from '../../../../shared/utils/AsyncStorage';

const HomeAdmin = ({route, navigation}) => {
  // const user = route.params.user;
  const handleLogout = async () => {
    try {
      
      await GoogleSignin.revokeAccess();
       await GoogleSignin.signOut();
      navigation.replace(Router.LOGIN);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeKeyComponent>
      <View>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </SafeKeyComponent>
  );
};

export default HomeAdmin;
