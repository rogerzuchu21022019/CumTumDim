import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import styleUpdateInformation from './StyleUpdateInformation';
import BoxInputCus from '../../../components/input/BoxInput';
import SafeKeyComponent from '../../../components/safe_area/SafeKeyComponent';
import Router from '../../../navigation/Router';

const UpdateInformation = ({navigation}) => {
  const moveTo = () => {
    navigation.navigate(Router.CUSTOMER_STACK);
  };
  return (
    <SafeKeyComponent>
      <View style={styleUpdateInformation.container}>
        <View style={styleUpdateInformation.header}>
          <View style={styleUpdateInformation.imageView}>
            <Image
              style={styleUpdateInformation.imageHeader}
              source={require('../../../../assets/logo.png')}
            />
          </View>
          <View style={styleUpdateInformation.viewText}>
            <Text style={styleUpdateInformation.textHello}>Hello</Text>
            <Text style={styleUpdateInformation.text}>
              Vui lòng cập nhật thông tin chính xác để thuận tiện cho việc giao
              hàng
            </Text>
          </View>
        </View>
        <View style={styleUpdateInformation.body}>
          <View>
            <BoxInputCus placeholder="name" title="Họ và tên" value="Nam1" />
          </View>
          <View>
            <BoxInputCus placeholder="name" title="Họ và tên" value="Nam1" />
          </View>
          <View>
            <BoxInputCus placeholder="name" title="Họ và tên" value="Nam1" />
          </View>
          <View>
            <BoxInputCus placeholder="name" title="Họ và tên" value="Nam1" />
          </View>
        </View>
        <View style={styleUpdateInformation.footers}>
          <View style={styleUpdateInformation.viewBtn}>
            <View style={styleUpdateInformation.viewTextBtn}>
              <TouchableOpacity onPress={moveTo}>
                <Text style={styleUpdateInformation.textBtn}>Xác nhận</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default UpdateInformation;
