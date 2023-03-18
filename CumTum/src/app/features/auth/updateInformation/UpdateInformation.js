import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import styleUpdateInformation from './StyleUpdateInformation';
import BoxInputCus from '../../../components/input/BoxInput';
import SafeKeyComponent from '../../../components/safe_area/SafeKeyComponent';

const UpdateInformation = () => {
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
          {/* <View style={styleUpdateInformation.viewBody}>
                    <Text style={styleUpdateInformation.text1}>số điện thoại</Text>
                    <View style={styleUpdateInformation.view1}>
                        <TextInput style={styleUpdateInformation.textInput1}>0867704364</TextInput>
                    </View>

                    <Text style={styleUpdateInformation.text2}>Phường</Text>
                    <View style={styleUpdateInformation.view2}>
                        <TextInput style={styleUpdateInformation.textInput2}>Trung Mỹ Tây</TextInput>
                    </View>

                    <Text style={styleUpdateInformation.text3}>Đường</Text>
                    <View style={styleUpdateInformation.view3}>
                        <TextInput style={styleUpdateInformation.textInput3}>Tố Ký</TextInput>
                    </View>

                    <Text style={styleUpdateInformation.text4}>Số nhà</Text>
                    <View style={styleUpdateInformation.view4}>
                        <TextInput style={styleUpdateInformation.textInput4}>413</TextInput>
                    </View>
                </View> */}
        </View>
        <View style={styleUpdateInformation.footers}>
          <View style={styleUpdateInformation.viewBtn}>
            <TouchableOpacity>
              <View style={styleUpdateInformation.viewTextBtn}>
                <Text style={styleUpdateInformation.textBtn}>Xác nhận</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default UpdateInformation;
