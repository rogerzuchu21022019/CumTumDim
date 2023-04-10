//HomeAdmin.js
import {
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
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



import {
  fetchOrders,
} from '../../../carts/apiOrder';
import {authSelector} from '../../sliceAuth';
import socketServices from '../../../../shared/utils/Socket';
// import io from 'socket.io-client';

import {showNotifyLocal} from '../../../../shared/utils/Notifies';

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
    showNotifyLocal(dataMap);
  };

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch, data.orders.length]);



  const getCurrentTime = () => {
    const date = new Date();
    const time = format(date, 'dd-MM-yyyy');
    return time;
  };

  
  const movoRingBell = () => {
    navigation.navigate(Router.RING_BELL_ADMIN)
  }

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
            <TouchableOpacity onPress={movoRingBell}>
              <View style={styles.rightHeader}>
                <View>
                  <IconOcticons
                    name="bell-fill"
                    color={constants.COLOR.WHITE}
                    size={20}
                  />
                </View>
                <View style={styles.viewTextRingBell}>
                  <Text style={styles.textRingBell}>
                    9
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
