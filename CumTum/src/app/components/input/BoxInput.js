import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import styleBox from './StyleBox';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import { constants } from '../../shared/constants';

const BoxInputCus = props => {
  const {name, placeholder, value, onChangeText, title, icon} = props;
  return (
    <View style={styleBox.container}>
      <View style={styleBox.boxTitle}>
        <Text style={styleBox.textTitle}>{title}</Text>
      </View>
      <View style={styleBox.body}>
        <View>{icon}</View>
        <View style={styleBox.boxInput}>
          <TextInput
            style={styleBox.input}
            placeholder={placeholder}
            placeholderTextColor={constants.COLOR.BLACK}
            value={value}
            onChangeText={onChangeText}
          />
        </View>
      </View>
    </View>
  );
};

export default BoxInputCus;
