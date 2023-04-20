import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './StyleButtonCus';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {constants} from '../../shared/constants';

const ButtonCus = props => {
  const {onHandleClick, title, styleBtn, styleText, icon} = props;
  const handleClick = () => {
    onHandleClick();
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styleBtn ? styleBtn : styles.boxBtnSave}>
        {icon ? (
          <View style={styles.icon}>
            <IconMaterialIcons
              name="add-circle-outline"
              size={25}
              color={constants.COLOR.WHITE}
            />
          </View>
        ) : null}

        <Text style={styleText ? styleText : styles.textSave || styleText}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCus;
