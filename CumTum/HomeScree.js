import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {AxiosInstance} from './src/app/api/AxiosInstance';
import SafeKeyComponent from './src/app/components/safe_area/SafeKeyComponent';

const HomeScreen = ({route, navigation}) => {
  // const user = route.params.user;
  const handleLogout = async () => {
    try {
      // Sign the user out of their Google account
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      // Remove the user's token and other data from storage or state
      // Other relevant logout code here...

      // Send a logout request to your backend
      const response = await AxiosInstance().post('/logout');
      navigation.replace('Login');
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
