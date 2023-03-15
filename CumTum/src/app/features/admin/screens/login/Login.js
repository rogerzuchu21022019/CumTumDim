import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import GoogleSignIn from '../../../../shared/utils/GoogleSignIn';
import StyleLoin from '../login/StyleLogin'

const LoginScreen = ({ navigation }) => {
  return (
    <SafeKeyComponent>
      <View style={StyleLoin.container}>
        {/* header */}
        <View style={StyleLoin.header}>
          <Text style={StyleLoin.Textheader}>Đăng nhập</Text>
          <Image
            style={StyleLoin.imageHeader}
            source={require('../../../../../../src/assets/image/logo.png')}
          />
        </View>
         {/* body */}
        <View style={StyleLoin.body}>
          <View style={StyleLoin.TouchableOpacitybody}>
            <TouchableOpacity
              onPress={(GoogleSignIn) => <GoogleSignIn navigation={navigation} />}
            >
              <Image
                style={StyleLoin.imagebody1}
                source={require('../../../../../../src/assets/image/chugg.png')} />
                 <Image
                style={StyleLoin.imagebody2}
                source={require('../../../../../../src/assets/image/logogg.png')} />
             
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default LoginScreen;
