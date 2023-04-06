//HomeAdmin.js
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {
  fetchFindNotifications,
  fetchNotifies,
  fetchOrders,
} from '../../../carts/apiOrder';
import {authSelector} from '../../sliceAuth';
import {fetchUserById} from '../../apiAdmin';
import socketServices from '../../../../shared/utils/Socket';
// import io from 'socket.io-client';

import ConfigSocket from '../../../../shared/utils/SocketConfig';
import {showNotifyLocal} from '../../../../shared/utils/Notifies';
import {formatTime} from '../../../../shared/utils/Moment';
import {format, isToday} from 'date-fns';
const log = LOG.extend(`HOME_ADMIN.JS`);
// const socket = io(constants.SOCKET.URL, {
//   transports: ['websocket'],
// });
const HomeAdmin = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(cartSelector);
  const user = useSelector(authSelector);

  const [isRefresh, setIsRefresh] = useState(false);


  // log.info('🚀 ~ file: HomeAdmin.js:19 ~ HomeAdmin ~ data:', data);

  useEffect(() => {
    socketServices.initializeSocket();

    // socketServices.socket.on(constants.SOCKET.CONNECT, () => {
    //   console.log('connect', socket);
    // });
    // socketServices.socket.on(constants.SOCKET.DISCONNECT, () => {
    //   console.log('DISCONNECT');
    // });

    socketServices.on(constants.SOCKET.CREATE_ORDER, orderData => {
      // console.log('connect to create order', orderData);
      log.error('create order success', orderData);
      onDisplayNotification(orderData);
      dispatch(fetchOrders());
    });

    return () => {
      socketServices.socket.disconnect();
    };
  }, [dispatch]);

  const onDisplayNotification = async orderData => {
    const idOrder = orderData._id;
    const total = orderData.moneyToPaid;

    const title = 'Notification';
    const content = `Đơn hàng số ${idOrder} có tổng giá tiền ${total}K đang chờ bạn xác nhận!`;
    // console.log("🚀 ~ file: Payment.js:45 ~ onDisplayNotification ~ content:", content)
    const dataMap = {
      title,
      content,
    };
    // Display a notification
    showNotifyLocal(dataMap);
  };

  useEffect(() => {
    dispatch(fetchOrders());
    // dispatch(fetchNotifies());
    // dispatch(fetchFindNotifications());
  }, [dispatch, data.orders.length]);

  // useEffect(() => {
  //   const time = setTimeout(() => {
  //     dispatch(fetchUserById(user.user._id));
  //   }, 15000);
  //   return () => {
  //     clearTimeout(time);
  //   };
  // }, [user.user.notifications]);

  const getCurrentTime = () => {
    const date = new Date();
    const time = format(date, 'dd-MM-yyyy');
    return time;
  };

 

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>
              {/* Code back to HomeScreen */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(Router.HOME_ADMIN);
                }}>
                <View style={styles.viewLogo}>
                  <FastImage
                    style={styles.imageLogo}
                    source={require('../../../../../assets/Logo_CumTumDim.png')}
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
          <View>
            {/* <Text style={{color: 'white'}}>{timeDiffInDays()}</Text> */}
          </View>
          <View style={styles.viewFlashList}>
            <View style={styles.viewToday}>
              <Text style={styles.textToday}>Today: {getCurrentTime()}</Text>
              <Text style={styles.textToday}>
                Số lượng đơn: {data.orderToday.length}
              </Text>
            </View>
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
                  <ItemView item={item} index={index} navigation={navigation} />
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
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default HomeAdmin;
