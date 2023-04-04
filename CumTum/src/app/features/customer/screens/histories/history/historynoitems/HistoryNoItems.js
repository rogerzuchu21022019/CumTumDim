
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {constants} from '../../../../../../shared/constants';
import FastImage from 'react-native-fast-image';
import Router from '../../../../../../navigation/Router';
import styles from './StylesHistoryNoItems';
const HistoryNoItems = ({navigation}) => {
    const goToHome = () => {
        navigation.navigate(Router.HOME_CUSTOMER);
      };
    return (
        <SafeKeyComponent>
          
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.textHeader}>Lịch sử</Text>
            </View>
            <View style={styles.divideLine}></View>
            <View style={styles.body}>
              <View style={styles.groupItem}>
                <View>
                  <FastImage
                    style={styles.iconCart}
                    source={require('../../../../../../../assets/history.png')}
                  />
                </View>
                <View>
                  <Text style={styles.textDescription}>Không có lịch sử </Text>
                </View>
              </View>
            </View>
          </View>
        </SafeKeyComponent>
  )
}

export default HistoryNoItems