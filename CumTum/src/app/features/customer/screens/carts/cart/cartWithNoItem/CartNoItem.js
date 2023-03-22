import {View, Text,TouchableOpacity} from 'react-native';
import React from 'react';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import styles from './StyleCartNoItem';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import { constants } from '../../../../../../shared/constants';
const CartNoItem = () => {
  return (
    <SafeKeyComponent>
      <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>

          
                <View style={styles.ViewText}>
                <Text style={styles.textHeader}>Giỏ hàng</Text>
                </View>
         
               
             
            </View>
            {/* <View style={styles.rightHeader}>
              <IconOcticons
                name="bell-fill"
                color={constants.COLOR.RED}
                size={20}
              />
            </View> */}
          </View>
        </View>
        <View style={styles.divideLine}></View>
        <View style={styles.body}>
          <Text style={{color: 'white'}}>Cart No Item</Text>
        </View>
        <View style={styles.footer}></View>
      </View>
    </SafeKeyComponent>
  );
};

export default CartNoItem;
