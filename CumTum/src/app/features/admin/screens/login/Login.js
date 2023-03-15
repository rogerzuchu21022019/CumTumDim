import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import GoogleSignIn from '../../../../shared/utils/GoogleSignIn';
import StyleLogin from '../login/StyleLogin'

const LoginScreen = ({ navigation }) => {
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
                onPress={(GoogleSignIn) => <GoogleSignIn navigation={navigation} />}
              >
                <Image
                  style={StyleLogin.imageBody1}
                  source={require('../../../../../../src/assets/image/chugg.png')} />
                <Image
                  style={StyleLogin.imageBody2}
                  source={require('../../../../../../src/assets/image/logogg.png')} />

              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default LoginScreen;
