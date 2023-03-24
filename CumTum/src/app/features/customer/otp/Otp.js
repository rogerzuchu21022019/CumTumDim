import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import SafeKeyComponent from './../../../components/safe_area/SafeKeyComponent';
import StyleOTP from './StylesOtp';

const Otp = () => {
  let textInput = useRef(null);
  const lengthInput = 4;
  const [internalVal, setInternalVal] = useState('');
  const onChangText = val => {
    setInternalVal(val);
  };
  useEffect(() => {
    textInput.focus();
  }, []);

  return (
    <SafeKeyComponent>
      <View style={StyleOTP.container}>
        <View style={StyleOTP.header}>
          <View style={StyleOTP.Logo}>
            <Image
              style={StyleOTP.image}
              source={require('../../../../assets/Logo_CumTumDim.png')}
            />
          </View>
        </View>
        <View style={StyleOTP.body}>
          <View style={StyleOTP.itemOtp}>
            <View style={StyleOTP.itemOtp1}>
              <Text style={StyleOTP.itemSend1}>Hello Phước</Text>
            </View>
            <View style={StyleOTP.itemOtp2}>
              <Text style={StyleOTP.itemSend2}>
                Chúng tôi sẽ gửi bạn mã OTP qua số điện thoại này
              </Text>
            </View>
            <View style={StyleOTP.itemOtp3}>
              <Text style={StyleOTP.itemSend3}>0342128462</Text>
            </View>
          </View>
          <View style={StyleOTP.itemBorder}>
            <KeyboardAvoidingView behavior={'padding'}>
              <View>
                <TextInput
                  ref={input => (textInput = input)}
                  onChangeText={onChangText}
                  value={internalVal}
                  style={{height: 0, width: 0}}
                  maxLength={lengthInput}
                  returnKeyType="done"
                />
              </View>
              <View style={StyleOTP.itemBorder}>
                {Array(lengthInput)
                  .fill()
                  .map((data, index) => (
                    <View style={StyleOTP.itemBorder1} key={index}>
                      <Text
                        style={StyleOTP.itemcircle}
                        onPress={() => textInput.focus()}>
                        {internalVal && internalVal.length > 0
                          ? internalVal[index]
                          : ''}
                      </Text>
                    </View>
                  ))}
              </View>
            </KeyboardAvoidingView>
          </View>
          <View style={StyleOTP.itemTimeSend}>
            <Text style={StyleOTP.itemTimeSend1}>00:30</Text>
            <Text style={StyleOTP.itemTimeSend2}>
              Không nhận được mã ? OTP
              <Text style={{color: '#FFA149'}}> Gửi lại OTP</Text>
            </Text>
          </View>
          <View style={StyleOTP.buttonAccepct}>
            <TouchableOpacity>
              <Text style={StyleOTP.buttonConfirm}>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default Otp;
