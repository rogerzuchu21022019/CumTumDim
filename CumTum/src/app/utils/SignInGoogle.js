import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import {useEffect, useState} from 'react';
import {View, Text, Linking, Image, Button, Platform, StyleSheet} from 'react-native';
import SafariView from 'react-native-safari-view';


const SignInGoogle = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then(url => {
      if (url) {
        handleOpenURL({url});
      }
    });

    return () => {
      // Remove event listener
      Linking.removeEventListener('url', handleOpenURL);
    };
  }, []);

  const handleOpenURL = ({url}) => {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/);
    setUser(JSON.parse(decodeURI(user_string)));
    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    }
  };

  const loginWithGoogle = () => openURL('http://192.168.1.15:3000/api/auth/google');

  const openURL = url => {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      SafariView.show({
        url: url,
        fromBottom: true,
      });
    }
    // Or Linking.openURL on Android
    else {
      Linking.openURL(url);
    }
  };

  return (
    <View >
      <View style={styles.buttons}>
        <Button title="Sign in with google" onPress={loginWithGoogle} />
      </View>
    </View>
  );
};


export default SignInGoogle;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      margin: 20,
    },
    avatarImage: {
      borderRadius: 50,
      height: 100,
      width: 100,
    },
    header: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    text: {
      textAlign: 'center',
      color: '#333',
      marginBottom: 5,
    },
    buttons: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      margin: 20,
      marginBottom: 30,
    },
  });
