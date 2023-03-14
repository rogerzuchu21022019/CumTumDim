import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {AxiosInstance} from './src/app/shared/utils/AxiosInstance';
import SafeKeyComponent from './src/app/components/safe_area/SafeKeyComponent';
import Router from './src/app/navigation/Router';

const HomeScreen = ({route, navigation}) => {
  // const user = route.params.user;
  const handleLogout = async () => {
    try {
      
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // const response = await AxiosInstance().post('/logout');
      navigation.replace(Router.Login);
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

export default HomeScreen;
