import {View, Text, Image, Button,TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './StyleCustomerSupport';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import FastImage from 'react-native-fast-image';
import {constants} from '../../../../shared/constants';
import {fetchSignOut} from '../../apiAdmin';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Router from '../../../../navigation/Router';

const CustomerSupport = ({navigation}) => {
const dispatch = useDispatch();


const signOut = async () => {
  dispatch(fetchSignOut());
  moveTo();
};

const moveTo = async () => {
  navigation.navigate(Router.LOGIN);
};

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>
              <FastImage
                style={styles.imageLogo}
                source={require('../../../../../assets/iconLogo_CumTumDim.jpg')}
              />
              <Text style={styles.textTitle}>Cum tứm đim</Text>
            </View>
          </View>
        </View>
        <View style={styles.divideLine}></View>
        <View style={styles.body}>
          <View style={styles.itemSupport}>
            <View style={styles.itemSupport1}>
              <View style={styles.image}>
                <Image
                  source={require('../../../../../assets/ZaloImages.png')}
                />
              </View>
              <View style={styles.image}>
                <Image
                  source={require('../../../../../assets/GmailImages.png')}
                />
              </View>
              <View style={styles.image}>
                <Image
                  source={require('../../../../../assets/PhonesImages.png')}
                />
              </View>
            </View>
            <View style={styles.itemSupport2}>
              <View>
                <Text style={styles.itemText}>0879175310</Text>
              </View>
              <View>
                <Text style={styles.itemText}>
                  vuthanhnam21022019@gmail.com
                </Text>
              </View>
              <View>
                <Text style={styles.itemText}>0879175310</Text>
              </View>
            </View>
          </View>
          <View>
          <TouchableOpacity onPress={signOut}>
              <View style={styles.viewButtonCreate}>
                <Text style={styles.btnCreate}>Đăng xuất</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      
      </View>
    </SafeKeyComponent>
  );
};

export default CustomerSupport;
