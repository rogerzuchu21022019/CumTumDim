import {View, Text,TouchableOpacity} from 'react-native';
import React from 'react';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import styles from './StyleCartNoItem';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { constants } from '../../../../../../shared/constants';
import FastImage from 'react-native-fast-image';


const CartNoItem = () => {
  return (
    <SafeKeyComponent>
      <View style={styles.container}>      
      <View style={styles.header}>
            <Text style={styles.textHeader}>Giỏ hàng</Text>
          </View>
        <View style={styles.divideLine}></View>
       <View style={styles.body}>
          <View style={styles.groupItem}>
            <View style={styles.firt}>
              <FastImage style={styles.iconCart} source={require("../../../../../../../assets/iconCart.png")}/>
            </View>
            <View>
              <Text style={styles.textDescription}>
                Không có đơn hàng
              </Text>
            </View>
            <View style={styles.btnConfirm}>
              <Text style={styles.textConfirm}>
                Đặt hàng
              </Text>
            </View>
          </View>
      
       </View>
      </View>
    </SafeKeyComponent>
  );
};

export default CartNoItem;
