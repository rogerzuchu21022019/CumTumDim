import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './StylesManageBanner';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';

import FastImage from 'react-native-fast-image';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Router from '../../../../../navigation/Router';
import {constants} from '../../../../../shared/constants';
const ManageBanner = ({navigation}) => {
  const moveToScreen = nameScreen => {
    navigation.navigate(nameScreen);
  };

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>
              <TouchableOpacity onPress={goBack}>
                <IconIonicons
                  style={styles.imageReturn}
                  name="arrow-back"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </TouchableOpacity>
              {/* Code back to HomeScreen */}
              <TouchableOpacity onPress={() => moveToScreen(Router.HOME_ADMIN)}>
                <View style={styles.viewLogo}>
                  <FastImage
                    style={styles.imageLogo}
                    source={require('../../../../../../assets/Logo_CumTumDim.png')}
                  />
                  <Text style={styles.textTitle}>Cum tứm đim</Text>
                </View>
              </TouchableOpacity>
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
        <View style={styles.body}>
          <View style={styles.groupBody}>
            <TouchableOpacity onPress={() => moveToScreen(Router.ADD_BANNER)}>
              <View style={styles.btnAll}>
                <Image
                  source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
                />
                <Text style={styles.textAll}>Thêm quảng cáo</Text>
              </View>
            </TouchableOpacity>
           
            {/* <TouchableOpacity onPress={() => moveToScreen(Router.UPDATE_BANNER)}>
              <View style={styles.btnAll}>
                <Image
                  source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
                />
                <Text style={styles.textAll}>Sửa quảng cáo</Text>
              </View>
            </TouchableOpacity> */}
  
            <TouchableOpacity onPress={() => moveToScreen(Router.DELETE_BANNER)}>
              <View style={styles.btnAll}>
                <Image
                  source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
                />
                <Text style={styles.textAll}>Xoá quảng cáo</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}></View>
      </View>
    </SafeKeyComponent>
  );
};

export default ManageBanner;
