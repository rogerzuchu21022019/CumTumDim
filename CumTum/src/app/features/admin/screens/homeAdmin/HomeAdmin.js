/* eslint-disable react-hooks/exhaustive-deps */
//HomeAdmin.js
import {
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
  TextInput,
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
import IconAnt from 'react-native-vector-icons/AntDesign';
import {fetchOrders, fetchUpdateIsReceivedOrder} from '../../../carts/apiOrder';
import {authSelector} from '../../sliceAuth';
import socketServices from '../../../../shared/utils/Socket';
// import io from 'socket.io-client';
import messaging from '@react-native-firebase/messaging';

import {showNotifyLocal} from '../../../../shared/utils/Notifies';

import {format, isToday} from 'date-fns';
import {
  convertMoney,
  formatCodeOrder,
} from '../../../../shared/utils/CreateCodeOrder';
import Router from '../../../../navigation/Router';
import {fetchPushNotification, fetchUserById} from '../../apiUser';
import {
  useListOrderQuery,
  useListOrderSortTodayQuery,
} from '../../../../../redux/api/ordersApi';
import {onShowData, onShowNotiWelCome} from '../../../../shared/utils/ShowNotifiWelcome';
const log = LOG.extend(`HOME_ADMIN.JS`);

const HomeAdmin = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(cartSelector);
  const [isOnline, setIsOnline] = useState(true);
  const isLoading = data.isLoading;
  const user = useSelector(authSelector);
  const fcmTokenDevice = user.user.fcmTokenDevice;
  const userId = user.user._id;
  // console.log('🚀 ~ file: HomeAdmin.js:51 ~ HomeAdmin ~ userId:', userId);
  const notifications = user.notifications;

  const [isRefresh, setIsRefresh] = useState(false);
  const [search, setSearch] = useState('');
  const [mainList, setMainList] = useState([]);
  const [subList, setSubList] = useState([]);

  useEffect(() => {
    const filteredList = filterOrders(data, search);
    setMainList(filteredList);
  }, [data, search]);

  const filterOrders = (data, search) => {
    let allOrder = [...data.orderToday];

    if (search.length > 0) {
      allOrder = allOrder.filter((dish, index) => {
        const filterByCodeId = formatCodeOrder(dish._id)
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase());

        const filterByStatus = dish.orderStatus
          .toLowerCase()
          .includes(search.toLowerCase());
        const filterByMoney = dish.moneyToPaid
          .toString()
          .includes(search.toLowerCase());
        const filterByIndex = (index + 1)
          .toString()
          .includes(search.toLowerCase());
        return (
          filterByStatus || filterByMoney || filterByIndex || filterByCodeId
        );
      });
    }

    return allOrder;
  };

  const totalIncome = data.orderToday.reduce((total, order) => {
    if (order.orderStatus === 'Chấp nhận') {
      return total + order.moneyToPaid;
    } else {
      return total;
    }
  }, 0);

  // log.info('🚀 ~ file: HomeAdmin.js:19 ~ HomeAdmin ~ data:', data);
  const resetSearch = () => {
    setSearch('');
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(remoteMessage => {
      const {title, body, data} = remoteMessage.notification;
      data ? onShowData(data) : onShowNotiWelCome(title, body);
      dispatch(fetchUserById(userId));
    });

    dispatch(fetchUserById(userId));

    return () => {
      unsubscribe();
    };
  }, [messaging]);

  useEffect(() => {
    socketServices.initializeSocket();
    socketServices.emit(constants.SOCKET.CONNECT_RABBIT_ADMIN, fcmTokenDevice);
    
    /* connect rabbit mq với file Socket.js trong Server */
    socketServices.on(constants.SOCKET.CREATE_ORDER, async orderData => {
      console.log('🚀 ~ file: HomeAdmin.js:131 ~ useEffect ~ loging:');
      onDisplayNotification(orderData);
      const data = {
        orderId: orderData.orderData._id,
        isReceived: true,
      };
      // dispatch(fetchUpdateIsReceivedOrder(data));
      dispatch(fetchUserById(userId));
      dispatch(fetchOrders());
      // dispatch(fetchGetQueueFromRabbitMQ())
    });
    return () => {
      socketServices.socket.disconnect();
    };
  }, [dispatch,]);

  const onDisplayNotification = async orderData => {
    let idOrder = formatCodeOrder(orderData.orderData._id);
    const total = orderData.orderData.moneyToPaid;

    const title = 'Notification';
    const content = `Đơn hàng có mã ${formatCodeOrder(
      idOrder,
    )} của khách hàng có tên ${orderData.orderData.address.name} với tổng tiền ${
      total
    } K đang chờ bạn xác nhận`;
    const notification = {
      title,
      content,
      _id: orderData._id,
      createdAt: orderData.createdAt,
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

  const beginFilter = text => {
    setSearch(text);
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
              <Text style={styles.textToday}>Hôm nay: {getCurrentTime()}</Text>
              <Text style={styles.textToday}>
                Số lượng đơn: {data.orderToday.length}
              </Text>

              <Text style={styles.itemText1}>
                Doanh thu: {convertMoney(totalIncome)}
              </Text>
              <View style={styles.boxInput} className="mb-[20px]">
                <IconAnt
                  name="search1"
                  color={constants.COLOR.WHITE}
                  size={20}
                  style={styles.iconMargin}
                />
                <TextInput
                  onChangeText={text => {
                    beginFilter(text);
                  }}
                  placeholder="Tìm kiếm"
                  placeholderTextColor={constants.COLOR.WHITE}
                  style={styles.inputStyle}
                  value={search}
                />

                {search.length > 0 && (
                  <TouchableOpacity
                    style={styles.boxClear}
                    onPress={resetSearch}>
                    <IconAnt
                      name="close"
                      color={constants.COLOR.WHITE}
                      size={20}
                      style={styles.iconMargin}
                    />
                  </TouchableOpacity>
                )}
              </View>
              {search.length > 0 && (
                <View className="mt-[20px] w-full">
                  <View>
                    <Text className="text-yellow-500">Tìm kiếm theo:</Text>
                  </View>
                  <View className="inline">
                    <Text className="text-red-500 text-w">
                      Trạng thái: Đang chờ, Chấp nhận, đang, Đang, chờ, Chờ
                    </Text>
                  </View>
                  <View>
                    <Text className="text-blue-500">
                      Đơn hàng: Bất kì kí tự có trong mã đơn hàng
                    </Text>
                  </View>
                  <View>
                    <Text className="text-white">
                      Giá tiền: Giá hiển thị : 50,25,28
                    </Text>
                  </View>
                </View>
              )}
            </View>
            {isLoading ? (
              <ActivityIndicator size="large" color={constants.COLOR.WHITE} />
            ) : (
              <FlashList
                data={mainList}
                estimatedItemSize={200}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                // getItemType={(item, index) => {
                //   return item.category;
                // }}S
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
                    title="Cập nhật..."
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
