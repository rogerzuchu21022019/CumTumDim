import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
  RefreshControl,
  ActivityIndicator,
  ViewBase,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './StyleStatistic';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';

import {constants} from '../../../../shared/constants';
import FastImage from 'react-native-fast-image';
import IconOcticons from 'react-native-vector-icons/Octicons';

import DatePicker from 'react-native-date-picker';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {formatTime} from '../../../../shared/utils/Moment';
import {useDispatch, useSelector} from 'react-redux';
import {cartSelector} from '../../../carts/sliceOrder';
import {LOG} from '../../../../../../logger.config';
import {
  formatCodeOrder,
  convertMoney,
} from '../../../../shared/utils/CreateCodeOrder';
import socketServices from '../../../../shared/utils/Socket';
import {fetchOrders} from '../../../carts/apiOrder';
const log = LOG.extend(`STATISTIC.JS`);
import {isToday} from 'date-fns';

const Statistic = ({navigation}) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('Tab 1');
  const handleTabPress = tabName => {
    setActiveTab(tabName);
  };

  const cartSelect = useSelector(cartSelector);
  // log.info(
  //   '🚀 ~ file: Statistic.js:36 ~ Statistic ~ cartSelector:',
  //   cartSelect,
  // );

  const {isLoading} = cartSelect;

  let orders = cartSelect.orders;
  // console.log('🚀 ~ file: Statistic.js:43 ~ Statistic ~ orders:', orders);

  const [showDatePicker, setShowDatePicker] = useState(false); // Ẩn hoặc hiển thị date picker

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isRefresh, setIsRefresh] = useState(false);

  // const isLoading = cartSelect
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const filteredProducts = orders.filter(product => {
    const timeCreated = new Date(product.createdAt);

    /* Check today */
    const createdToday = isToday(timeCreated);
    const startToday = isToday(startDate);
    const endToday = isToday(endDate);

    if (startToday && endToday && createdToday) {
      return product;
    } else {
      return timeCreated >= startDate && timeCreated <= endDate;
    }
  });

  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
  };

  const data = {
    labels: ['Tháng1', 'Tháng2', 'Tháng3', 'Tháng4', 'Tháng5', 'Tháng6'],
    datasets: [
      {
        data: [0, 20, 40, 60, 80, 100, 120],
        color: (opacity = 2) => `rgba(30,144,255, ${opacity})`, // optional
      },
    ],
    legend: ['Doanh Thu'], // optional
  };

  const totalIncome = filteredProducts.reduce((total, order) => {
    if (order.orderStatus === 'Chấp nhận') {
      return total + order.moneyToPaid;
    } else {
      return total;
    }
  }, 0);

  useEffect(() => {
    socketServices.initializeSocket();
    socketServices.on(constants.SOCKET.FIND_ORDER_BY_USER_ID, userId => {
      log.info('🚀 ~ file: Statistic.js:119 ~ useEffect ~ userId:', userId);
      // log.info('🚀 ~ file: History.js:17 ~ History ~ user:', userId);
      dispatch(fetchOrders());
    });
    return () => {
      socketServices.socket.disconnect();
    };
  }, [orders.length]);

  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
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
        <View style={styles.body}>
          {/* tab */}
          <View style={styles.tabsIncome}>
            <View style={styles.tabRevenue}>
              <TouchableOpacity
                style={[styles.tab1, activeTab === 'Tab 1' && styles.activeTab]}
                onPress={() => handleTabPress('Tab 1')}>
                <View>
                  <Text style={styles.textTab}>Doanh Thu</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.tabChart}>
              <TouchableOpacity
                style={[styles.tab2, activeTab === 'Tab 2' && styles.activeTab]}
                onPress={() => handleTabPress('Tab 2')}>
                <View style={styles.itemText1}>
                  <Text style={styles.textTab1}>Biểu Đồ</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* them du lieu  */}
          {activeTab === 'Tab 1' && (
            <View style={styles.bodyTabRevenue}>
              <View style={styles.dateRangePickerContainer}>
                {/* Tu ngay */}
                <View style={styles.dateRangePickerText}>
                  <TouchableOpacity onPress={() => setOpenStart(true)}>
                    <View style={styles.dateRangePickerText1}>
                      <Text style={styles.dateRangePickerText2}>Từ ngày</Text>
                      <DatePicker
                        modal
                        open={openStart}
                        date={startDate}
                        onConfirm={date => {
                          setOpenStart(false);
                          setStartDate(date);
                        }}
                        onCancel={() => {
                          setOpenStart(false);
                        }}
                        locale="vi-VN"
                        mode="date"
                      />
                    </View>
                  </TouchableOpacity>
                  <View style={styles.dateRangePickerText3}>
                    <Text style={styles.dateRangePickerText4}>
                      {formatTime(startDate)}
                    </Text>
                  </View>
                </View>

                {/* Den ngay */}
                <View style={styles.dateRangePickerText}>
                  <TouchableOpacity onPress={() => setOpenEnd(true)}>
                    <View style={styles.dateRangePickerText1}>
                      <Text style={styles.dateRangePickerText2}>Đến ngày</Text>
                      <DatePicker
                        modal
                        open={openEnd}
                        date={endDate}
                        onConfirm={date => {
                          setOpenEnd(false);
                          setEndDate(date);
                        }}
                        onCancel={() => {
                          setOpenEnd(false);
                        }}
                        locale="vi-VN"
                        mode="date"
                      />
                    </View>
                  </TouchableOpacity>
                  <View style={styles.dateRangePickerText3}>
                    <Text style={styles.dateRangePickerText4}>
                      {formatTime(endDate)}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.strikethrough}></View>
              <View style={styles.boxIncome}>
                <Text style={styles.itemText1}>
                  Doanh thu: {convertMoney(totalIncome)}
                </Text>
                <Text style={styles.itemText1}>
                  Tổng đơn: {filteredProducts.length}
                </Text>
              </View>
              <TouchableNativeFeedback>
                {isLoading ? (
                  <ActivityIndicator
                    size="large"
                    color={constants.COLOR.WHITE}
                  />
                ) : (
                  <FlashList
                    estimatedItemSize={100}
                    data={filteredProducts}
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
                    renderItem={({item, index}) => (
                      <SafeKeyComponent>
                        <View style={styles.itemOder}>
                          <View>
                            <Text style={styles.itemText}>{index + 1}</Text>
                            {/* <Text style={styles.itemText}>{item.datee}</Text> */}
                          </View>
                          <View>
                            <Text style={styles.itemText}>
                              Mã đơn: {formatCodeOrder(item._id)}
                            </Text>
                            <Text style={styles.itemText1}>
                              Ngày mua : {formatTime(item.createdAt)}
                            </Text>
                          </View>
                          <View style={styles.itemText1}>
                            <Text style={styles.itemText}>
                              {item.orderStatus}
                            </Text>
                            <Text style={styles.itemText1}>
                              {convertMoney(item.moneyToPaid)}
                            </Text>
                          </View>
                        </View>
                      </SafeKeyComponent>
                    )}
                  />
                )}
              </TouchableNativeFeedback>
            </View>
          )}
          {/* bieu do */}
          {activeTab === 'Tab 2' && (
            <View style={styles.bodyTabRevenue}>
              <View>
                <View style={styles.dateRangePickerText}>
                  <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <View style={styles.dateRangePickerText1}>
                      <Text style={styles.dateRangePickerText2}>Từ ngày</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.dateRangePickerText3}>
                    <Text style={styles.dateRangePickerText4}>
                      {formatTime(startDate)}
                    </Text>
                  </View>
                </View>
                <View style={styles.dateRangePickerText}>
                  <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <View style={styles.dateRangePickerText1}>
                      <Text style={styles.dateRangePickerText2}>Đến ngày</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.dateRangePickerText3}>
                    <Text style={styles.dateRangePickerText4}>
                      {formatTime(endDate)}
                    </Text>
                  </View>
                </View>
                <View></View>
              </View>
              <View>
                <LineChart
                  data={data}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default Statistic;
