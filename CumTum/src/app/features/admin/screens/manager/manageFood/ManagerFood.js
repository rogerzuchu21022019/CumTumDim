import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './StyleManagerFood';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Router from '../../../../../navigation/Router';
import {constants} from '../../../../../shared/constants';
const ManagerFood = () => {
  const navigation = useNavigation();

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(Router.MANAGE);
                }}>
                <IconIonicons
                  style={styles.imageReturn}
                  name="arrow-back"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </TouchableOpacity>
              {/* Code back to HomeScreen */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(Router.HOME_ADMIN);
                }}>
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
            {/* Thêm loại món ăn */}
            <TouchableOpacity onPress={() => navigation.navigate('AddDish')}>
              <View style={styles.btnAll}>
                <Image
                  source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
                />
                <Text style={styles.textAll}>Thêm món ăn</Text>
              </View>
            </TouchableOpacity>
            {/* Sửa loại món ăn */}
            <TouchableOpacity onPress={() => navigation.navigate('EditDish')}>
              <View style={styles.btnAll}>
                <Image
                  source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
                />
                <Text style={styles.textAll}>Sửa món ăn</Text>
              </View>
            </TouchableOpacity>
            {/* xóa loại món ăn */}
            <TouchableOpacity onPress={() => navigation.navigate('DeleteDish')}>
              <View style={styles.btnAll}>
                <Image
                  source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
                />
                <Text style={styles.textAll}>Xoá món ăn</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}></View>
      </View>
    </SafeKeyComponent>
  );
};

export default ManagerFood;
