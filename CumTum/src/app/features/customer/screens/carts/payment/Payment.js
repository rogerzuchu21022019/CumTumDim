import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import { constants } from '../../../../../shared/constants';
import styles from './StylesPayment';
const Payment = () => {
  return (
    <SafeKeyComponent>


      <View styles={styles.container}>
        <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <IconIonicons
                  style={styles.imageReturn}
                  name="arrow-back"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </TouchableOpacity>

              <View style={styles.ViewText}>
                <Text style={styles.textHeader}>Payment</Text>
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
        <View style={styles.body}></View>
        <View style={styles.footer}></View>

      </View>
    </SafeKeyComponent>
  )
}

export default Payment