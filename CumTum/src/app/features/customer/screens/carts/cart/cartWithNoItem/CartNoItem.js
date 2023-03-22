import {View, Text} from 'react-native';
import React from 'react';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import styles from './StyleCartNoItem';

const CartNoItem = () => {
  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Giỏ hàng</Text>
        </View>
        <View style={styles.body}>
          <Text style={{color: 'white'}}>Cart No Item</Text>
        </View>
        <View style={styles.footer}></View>
      </View>
    </SafeKeyComponent>
  );
};

export default CartNoItem;
