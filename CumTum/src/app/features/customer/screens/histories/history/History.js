/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  RefreshControl,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import messaging from '@react-native-firebase/messaging';

import styles from './StylesHistory';
import {constants} from '../../../../../shared/constants';
import {useDispatch, useSelector} from 'react-redux';
import {FlashList} from '@shopify/flash-list';
import ItemView from './item/ItemView';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import {authSelector} from '../../../../admin/sliceAuth';
import {LOG} from '../../../../../../../logger.config';
import {fetchUserById} from '../../../../admin/apiUser';
import {onDisplayNotiAccepted} from '../../../../../shared/utils/ShowNotificationAccepted';
const log = LOG.extend(`HISTORY.JS`);
const History = ({navigation}) => {
  // const data = useSelector(cartSelector);
  const user = useSelector(authSelector);
  const userId = user.user._id;
  const fcmTokenDevice = user.fcmTokenDevice;

  const [isRefresh, setIsRefresh] = useState(false);
  const dispatch = useDispatch();
  let orderHistory = user.user.orders;

  const getNotification = async () => {
    await messaging().onMessage(remoteMessage => {
      const title = remoteMessage.notification.title;
      const body = remoteMessage.notification.body;
      const data = remoteMessage.data;
      const orderStatus = data.orderStatus;
      const order = data.order;
      const moneyToPaid = data.moneyToPaid;
      onDisplayNotiAccepted({
        title,
        order,
        orderStatus,
        moneyToPaid,
      });
      dispatch(fetchUserById(userId));
    });
  };
  useEffect(() => {
    getNotification();
  }, [getNotification]);

  return (
    <SafeKeyComponent>
      <TouchableNativeFeedback>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Lịch sử </Text>
          </View>
          <View style={styles.divideLine}></View>
          <View style={styles.body}>
            <View style={styles.viewFlashList}>
              <FlashList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={orderHistory}
                estimatedItemSize={200}
                renderItem={({item, index}) => {
                  return (
                    <ItemView
                      item={item}
                      index={index}
                      navigation={navigation}
                    />
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
                refreshControl={
                  <RefreshControl
                    refreshing={isRefresh}
                    onRefresh={() => {
                      dispatch(fetchUserById(user.user._id));
                    }}
                    title="Pull to refresh..."
                    titleColor={constants.COLOR.RED}
                    tintColor={constants.COLOR.RED}
                  />
                }
              />
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </SafeKeyComponent>
  );
};

export default History;
