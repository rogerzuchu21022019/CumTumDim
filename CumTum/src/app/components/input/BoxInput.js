import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import styleBox from './StyleBox';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import {constants} from '../../shared/constants';
import SafeKeyComponent from '../safe_area/SafeKeyComponent';

const BoxInputCus = props => {
  const {
    name,
    placeholder,
    value,
    onChangeText,
    title,
    icon,
    handleNextPress,
    returnKeyType,
    keyboardType,
    inputRef,
    editable,
    isPhone,
    isFailValue,
    isName,
  } = props;
  return (
    <SafeKeyComponent>
      <View style={styleBox.container}>
        <View style={styleBox.boxTitle}>
          <Text style={styleBox.textTitle}>{title}</Text>
        </View>
        <View style={isFailValue ? styleBox.bodyFail : styleBox.body}>
          {/* <View style={styleBox.bodyFail}> */}
          <View>{icon}</View>
          <View style={styleBox.boxInput}>
            {isPhone ? <Text style={styleBox.textIsPhone}>(+84)</Text> : null}
            <TextInput
              ref={inputRef}
              style={styleBox.input}
              placeholder={placeholder}
              placeholderTextColor={constants.COLOR.BLACK}
              value={value}
              disableFullscreenUI={true}
              keyboardAppearance="dark"
              keyboardType={keyboardType}
              returnKeyType={returnKeyType}
              onSubmitEditing={handleNextPress}
              onChangeText={onChangeText}
              editable={editable}
            />
          </View>
        </View>
        {isName ? (
          <View style={styleBox.boxLengthPhone}>
            {value.length < 3 || value.length > 50 ? (
              <View>
                <Text
                  style={
                    styleBox.textLengthPhone
                  }>{`Độ dài tối thiểu của tên = 3 : ${value.length} /3`}</Text>
                <Text
                  style={
                    styleBox.textLengthPhone
                  }>{`Độ dài tối đa của tên = 50 `}</Text>
              </View>
            ) : null}
           
          </View>
        ) : null}

        {isPhone ? (
          <View style={styleBox.boxLengthPhone}>
            {value.length != 10 ? (
              <Text
                style={
                  styleBox.textLengthPhone
                }>{`Độ dài số điện thoại ${value.length}`}</Text>
            ) : null}
          </View>
        ) : null}
      </View>
    </SafeKeyComponent>
  );
};

export default BoxInputCus;
