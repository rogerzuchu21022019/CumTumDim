/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
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
import {Order} from '../../../../shared/types';
import {ChartConfig} from 'react-native-chart-kit/dist/HelperTypes';
import {fetchUserById} from '../../apiUser';
import {authSelector} from '../../sliceAuth';
export enum TabEnum {
  TAB_1 = 'Tab 1',
  TAB_2 = 'Tab 2',
}

const Statistic = ({navigation}: any) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('Tab 1');
  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
  };

  const cartSelect = useSelector(cartSelector);
  const authSelect = useSelector(authSelector);

  // log.info(
  //   '🚀 ~ file: Statistic.js:36 ~ Statistic ~ cartSelector:',
  //   cartSelect,
  // );

  const {isLoading} = cartSelect;

  let orders = cartSelect.orders;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isRefresh, setIsRefresh] = useState(false);

  // const isLoading = cartSelect
  const currentDate = new Date();
  const currentYear = new Date();

  currentDate.setHours(0, 0, 0, 0);

  const filteredProducts: Order[] = orders.filter((product: Order) => {
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

  const totalIncome = filteredProducts.reduce((total: number, order: Order) => {
    if (order.orderStatus === 'Chấp nhận') {
      return total + order.moneyToPaid;
    } else {
      return total;
    }
  }, 0);
  const getTotalMoneyToPaidByMonth = (data: Order[], targetMonth: number) => {
    // Filter the data to get only the orders from the target month
    const filteredData = data.filter(
      order => order.orderStatus === 'Chấp nhận' && order.createdAt,
    );

    // Use reduce to calculate the total moneyToPaid for the target month
    const totalMoneyToPaid = filteredData.reduce(
      (total: number, order: Order) => {
        const orderMonth = new Date(order.createdAt).getMonth() + 1; // Months are 0-indexed in JavaScript, so we add 1
        if (orderMonth === targetMonth) {
          return total + order.moneyToPaid;
        } else {
          return total;
        }
      },
      0,
    );

    return totalMoneyToPaid;
  };

  useEffect(() => {
    socketServices.initializeSocket();
    socketServices.on(
      constants.SOCKET.FIND_ORDER_BY_USER_ID,
      (userId: string) => {
        // log.info('🚀 ~ file: Statistic.js:119 ~ useEffect ~ userId:', userId);
        // log.info('🚀 ~ file: History.js:17 ~ History ~ user:', userId);
        dispatch(fetchOrders());
      },
    );
    return () => {
      socketServices.socket.disconnect();
    };
  }, [orders.length]);

  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  const chartConfig: ChartConfig = {
    backgroundGradientFrom: constants.COLOR.WHITE,
    backgroundGradientTo: constants.COLOR.WHITE,
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    // strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
  };

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
    legend: ['Doanh Thu', 'Tháng'], // optional

    datasets: [
      {
        data: [
          getTotalMoneyToPaidByMonth(orders, 1),
          getTotalMoneyToPaidByMonth(orders, 2),
          getTotalMoneyToPaidByMonth(orders, 3),
          getTotalMoneyToPaidByMonth(orders, 4),
          getTotalMoneyToPaidByMonth(orders, 5),
          getTotalMoneyToPaidByMonth(orders, 6),
          getTotalMoneyToPaidByMonth(orders, 7),
          getTotalMoneyToPaidByMonth(orders, 8),
          getTotalMoneyToPaidByMonth(orders, 9),
          getTotalMoneyToPaidByMonth(orders, 10),
          getTotalMoneyToPaidByMonth(orders, 11),
          getTotalMoneyToPaidByMonth(orders, 12),
        ],
        // color: (opacity = 3) => `rgba(134, 65, 244, ${opacity})`, // optional
        // strokeWidth: 2, // optional
      },
      {
        data: [
          getTotalMoneyToPaidByMonth(orders, 11),
          getTotalMoneyToPaidByMonth(orders, 3),
          getTotalMoneyToPaidByMonth(orders, 3),
          getTotalMoneyToPaidByMonth(orders, 4),
          getTotalMoneyToPaidByMonth(orders, 5),
          getTotalMoneyToPaidByMonth(orders, 6),
          getTotalMoneyToPaidByMonth(orders, 7),
          getTotalMoneyToPaidByMonth(orders, 8),
          getTotalMoneyToPaidByMonth(orders, 9),
          getTotalMoneyToPaidByMonth(orders, 10),
          getTotalMoneyToPaidByMonth(orders, 11),
          getTotalMoneyToPaidByMonth(orders, 12),
        ],
        // color: (opacity = 1) => `rgba(134, 65, 100, ${opacity})`, // optional
        // strokeWidth: 2, // optional
      },
    ],
  };

  const arrNumber: number[] = Array.from({length: 12});

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
                style={[
                  styles.tab1,
                  activeTab === TabEnum.TAB_1 && {
                    backgroundColor: constants.COLOR.ORANGE,
                    borderRadius: 10,
                  },
                ]}
                onPress={() => handleTabPress('Tab 1')}>
                <View>
                  <Text style={styles.textTab}>Doanh Thu</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.tabChart}>
              <TouchableOpacity
                style={[
                  styles.tab2,
                  activeTab === TabEnum.TAB_2 && {
                    backgroundColor: constants.COLOR.ORANGE,
                    borderRadius: 10,
                  },
                ]}
                onPress={() => handleTabPress('Tab 2')}>
                <View style={styles.itemText1}>
                  <Text style={styles.textTab}>Biểu Đồ</Text>
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
                        title="Cập nhật..."
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
                <LineChart
                  data={data}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                  yAxisSuffix="K"
                />
              </View>
              <View>
                <Text className="text-white text-[20px]">
                  {currentYear.getFullYear()}
                </Text>
                {arrNumber.map((item, index) => {
                  return (
                    <View key={index} className="flex flex-row">
                      <Text className="text-white text-[20px]">
                        Tháng {index + 1} :{' '}
                      </Text>
                      <Text className="text-white text-[20px]">
                        {getTotalMoneyToPaidByMonth(orders, index + 1)} K
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          )}
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default Statistic;
