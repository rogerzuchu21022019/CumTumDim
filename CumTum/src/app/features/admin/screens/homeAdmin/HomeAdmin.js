//HomeAdmin.js
import {
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './StylesHome';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import ItemView from './item/ItemView';
import {FlashList} from '@shopify/flash-list';
import {constants} from '../../../../shared/constants';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {cartSelector} from '../../../carts/sliceOrder';
import {LOG} from '../../../../../../logger.config';
import IconOcticons from 'react-native-vector-icons/Octicons';

import {fetchOrders} from '../../../carts/apiOrder';
import {authSelector} from '../../sliceAuth';
import socketServices from '../../../../shared/utils/Socket';
// import io from 'socket.io-client';

import {showNotifyLocal} from '../../../../shared/utils/Notifies';

import {format, isToday} from 'date-fns';
import {
  convertMoney,
  formatCodeOrder,
} from '../../../../shared/utils/CreateCodeOrder';
import Router from '../../../../navigation/Router';
import {fetchPushNotification, fetchUserById} from '../../apiUser';
const log = LOG.extend(`HOME_ADMIN.JS`);
// const socket = io(constants.SOCKET.URL, {
//   transports: ['websocket'],
// });
const HomeAdmin = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(cartSelector);
  // log.info('🚀 ~ file: HomeAdmin.js:36 ~ HomeAdmin ~ data:', data);

  const isLoading = data.isLoading;

  const user = useSelector(authSelector);
  // console.log('🚀 ~ file: HomeAdmin.js:44 ~ HomeAdmin ~ user:', user);
  // log.info(
  //   '🚀 ~ file: HomeAdmin.js:43 ~ HomeAdmin ~ notifications:',
  //   user.notifications,
  // );

  const userId = user.user._id;
  // console.log('🚀 ~ file: HomeAdmin.js:51 ~ HomeAdmin ~ userId:', userId);
  const notifications = user.notifications;

  const [isRefresh, setIsRefresh] = useState(false);

  const totalIncome = data.orderToday.reduce((total, order) => {
    if (order.orderStatus === 'Chấp nhận') {
      return total + order.moneyToPaid;
    } else {
      return total;
    }
  }, 0);

  // log.info('🚀 ~ file: HomeAdmin.js:19 ~ HomeAdmin ~ data:', data);

  useEffect(() => {
    socketServices.initializeSocket();
    socketServices.on(constants.SOCKET.CREATE_ORDER, orderData => {
      onDisplayNotification(orderData);
      dispatch(fetchOrders());
    });
    socketServices.on(constants.SOCKET.PUSH_NOTIFICATION_ADMIN, userId => {
      dispatch(fetchUserById(userId));
    });
    return () => {
      socketServices.socket.disconnect();
    };
  }, [dispatch]);

  const onDisplayNotification = async orderData => {
    let idOrder = formatCodeOrder(orderData._id);
    const total = orderData.moneyToPaid;

    const title = 'Notification';
    const content = `Đơn hàng mã số ${idOrder} có tổng giá tiền ${total}K đang chờ bạn xác nhận!`;

    const notification = {
      title,
      content,
      _id: orderData._id,
      createdAt: orderData.createdAt,
      isRead: false,
    };
    const data = {
      userId: userId,
      notification: notification,
    };

    dispatch(fetchPushNotification(data));

    showNotifyLocal(notification);
  };

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch, data.orders.length, user.notifications.length]);

  const getCurrentTime = () => {
    const date = new Date();
    const time = format(date, 'dd-MM-yyyy');
    return time;
  };

  const moveRingBell = () => {
    navigation.navigate(Router.RING_BELL_ADMIN);
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
            <TouchableOpacity onPress={moveRingBell}>
              <View style={styles.rightHeader}>
                <View>
                  <IconOcticons
                    name="bell-fill"
                    color={constants.COLOR.WHITE}
                    size={20}
                  />
                </View>
                <View style={styles.viewTotalNotifies}>
                  <Text style={styles.textTotalNotifies}>
                    {notifications.length}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <View>
            {/* <Text style={{color: 'white'}}>{timeDiffInDays()}</Text> */}
          </View>
          <View style={styles.viewFlashList}>
            <View style={styles.viewToday}>
              <Text style={styles.textToday}>Today: {getCurrentTime()}</Text>
              <Text style={styles.textToday}>
                Số lượng đơn: {data.orderToday.length}
              </Text>

              <Text style={styles.itemText1}>
                Doanh thu: {convertMoney(totalIncome)}
              </Text>
            </View>
            {isLoading ? (
              <ActivityIndicator size="large" color={constants.COLOR.WHITE} />
            ) : (
              <FlashList
                data={data.orderToday}
                estimatedItemSize={200}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                // getItemType={(item, index) => {
                //   return item.category;
                // }}
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
                      dispatch(fetchOrders());
                    }}
                    title="Pull to refresh..."
                    titleColor={constants.COLOR.RED}
                    tintColor={constants.COLOR.RED}
                  />
                }
              />
            )}
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default HomeAdmin;
