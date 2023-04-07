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
          <View style={styles.imageCartToonTop}>
            <Image
            style={styles.imageCartToonHead}
               source={require('../../../../../assets/cartToon.png')}
            
            />
          </View>
          <View style={styles.itemSupport}>
          
              <View style={styles.viewImage}>
                <Image
                style={styles.image}
                  source={require('../../../../../assets/ZaloImages.png')}
                />
                <View>
                <Text style={styles.itemText}>0879175310</Text>
              </View>
              </View>
              <View style={styles.viewImage}>
                <Image
                style={styles.image}
                  source={require('../../../../../assets/GmailImages.png')}
                />
                 <Text style={styles.itemText}>
                  vuthanhnam21022019@gmail.com
                </Text>
              </View>
              <View style={styles.viewImage}>
                <Image
                style={styles.image}

                  source={require('../../../../../assets/PhonesImages.png')}
                />
                 <View>
                <Text style={styles.itemText}>0879175310</Text>
              </View>
            </View>
        <View style={styles.groupBTN}>
          <TouchableOpacity onPress={signOut}>
              <View style={styles.viewButtonCreate}>
                <Text style={styles.btnCreate}>Đăng xuất</Text>
              </View>
            </TouchableOpacity>
            </View>
          
          </View>
        
          <View style={styles.cartToon}>
          <Image style={styles.imageCartToon}
               source={require('../../../../../assets/cartToon2.png')}
            
            />
          </View>
        </View>
      
      </View>
    </SafeKeyComponent>
  );
};

export default CustomerSupport;
