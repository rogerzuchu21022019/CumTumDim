import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './StyleButtonCus';

const ButtonCus = props => {
  const {onHandleClick, title, styleBtn, styleText} = props;
  const handleClick = () => {
    onHandleClick();
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styleBtn ? styleBtn : styles.boxBtnSave}>
        <Text style={styleText ? styleText : styles.textSave || styleText}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCus;
