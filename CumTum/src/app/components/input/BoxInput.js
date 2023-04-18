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
  } = props;
  return (
    <SafeKeyComponent>
      <View style={styleBox.container}>
        <View style={styleBox.boxTitle}>
          <Text style={styleBox.textTitle}>{title}</Text>
        </View>
        <View style={styleBox.body}>
          <View>{icon}</View>
          <View style={styleBox.boxInput}>
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
      </View>
    </SafeKeyComponent>
  );
};

export default BoxInputCus;
