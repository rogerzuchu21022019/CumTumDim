import {Text, View, Image, ScrollView, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import styles from './StylesHome';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ItemView from './item/ItemView';
import {FlashList} from '@shopify/flash-list';
import {constants} from '../../../../shared/constants';
import FastImage from 'react-native-fast-image';
import IconOcticons from 'react-native-vector-icons/Octicons';
import {useDispatch, useSelector} from 'react-redux';
import {cartSelector} from '../../../carts/sliceOrder';
import {LOG} from '../../../../../../logger.config';
import {
  fetchFindNotifications,
  fetchNotifies,
  fetchOrders,
} from '../../../carts/apiOrder';
import {authSelector} from '../../sliceAuth';
import {fetchUserById} from '../../apiAdmin';
import socketServices from '../../../../shared/utils/Socket';
import socket from '../../../../shared/utils/SocketConfig';
import ConfigSocket from '../../../../shared/utils/SocketConfig';
const log = LOG.extend(`HOME_ADMIN.JS`);

const HomeAdmin = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(cartSelector);
  const user = useSelector(authSelector);
  // log.info('🚀 ~ file: HomeAdmin.js:19 ~ HomeAdmin ~ data:', data);

  useEffect(() => {
    socket.on('connect')
    console.log('connect', socket);
  }, []);

  useEffect(() => {
    dispatch(fetchOrders());
    // dispatch(fetchNotifies());
    // dispatch(fetchFindNotifications());
  }, [dispatch]);

  // useEffect(() => {
  //   const time = setTimeout(() => {
  //     dispatch(fetchUserById(user.user._id));
  //   }, 15000);
  //   return () => {
  //     clearTimeout(time);
  //   };
  // }, [user.user.notifications]);

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
            <View style={styles.rightHeader}>
              <IconOcticons
                name="bell-fill"
                color={constants.COLOR.RED}
                size={20}
              />
            </View>
          </View>
        </View>
        <View style={styles.divideLine}></View>
        <View style={styles.body}>
          <View style={styles.viewFlashList}>
            <FlashList
              data={data.orders}
              estimatedItemSize={200}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              // getItemType={(item, index) => {
              //   return item.category;
              // }}
              renderItem={({item, index}) => {
                return (
                  <ItemView item={item} index={index} navigation={navigation} />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default HomeAdmin;
