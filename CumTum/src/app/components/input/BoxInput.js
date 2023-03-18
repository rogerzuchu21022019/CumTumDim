import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import styleBox from './StyleBox';
import IconFontisto from 'react-native-vector-icons/Fontisto';

const BoxInputCus = (props) => {
  const {name, placeholder, value, onChangeText, title, icon} = props;
  return (
    <View style={styleBox.box}>
      <View>
        <Text style={styleBox.title}>{title}</Text>
      </View>
      <View style={styleBox.container}>
        <View>{icon}</View>
        <View>
          <TextInput
            style={styleBox.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
          />
        </View>
      </View>
    </View>
  );
};

export default BoxInputCus;
