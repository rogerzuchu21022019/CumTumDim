import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './StyleDropdownCus';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {constants} from '../../shared/constants';

const DropdownCus = props => {
  const { showHide, title, handleShowHide} = props;

  const onHandleClick = () => {
    handleShowHide();
  };
  return (
    <TouchableOpacity onPress={onHandleClick}>
      <View style={styles.boxMainDish}>
        <Text style={styles.textMainDish}>{title}</Text>
        {showHide ? (
          <MaterialIcons
            style={{
              marginRight: 10,
            }}
            name="keyboard-arrow-up"
            color={constants.COLOR.WHITE}
            size={20}
          />
        ) : (
          <MaterialIcons
            style={{
              marginRight: 10,
            }}
            name="keyboard-arrow-down"
            color={constants.COLOR.WHITE}
            size={20}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default DropdownCus;
