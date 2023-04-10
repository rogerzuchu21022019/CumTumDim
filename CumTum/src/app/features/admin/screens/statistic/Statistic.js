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
} from 'react-native';
import React, {useState} from 'react';
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

const Statistic = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Tab 1');
  const handleTabPress = tabName => {
    setActiveTab(tabName);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false); // Ẩn hoặc hiển thị date picker

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [productList, setProductList] = useState([
    {
      id: 'ID21220554',
      time: '09:53',
      datee: '03/03/2023',
      price: '20k',
      done: 'Hoàn thành',
      date: new Date('2023-03-21'),
    },
    {
      id: 'ID21220555',
      time: '09:53',
      datee: '03/03/2023',
      price: '30k',
      done: 'Hoàn thành',
      date: new Date('2023-03-22'),
    },
    {
      id: 'ID21220556',
      time: '09:53',
      datee: '03/03/2023',
      price: '40k',
      done: 'Hoàn thành',
      date: new Date('2023-03-23'),
    },
    {
      id: 'ID21220557',
      time: '09:53',
      datee: '03/03/2023',
      price: '40k',
      done: 'Hoàn thành',
      date: new Date('2023-03-23'),
    },
    {
      id: 'ID21220558',
      time: '09:53',
      datee: '03/03/2023',
      price: '40k',
      done: 'Hoàn thành',
      date: new Date('2023-03-23'),
    },
    {
      id: 'ID21220559',
      time: '09:53',
      datee: '03/03/2023',
      price: '40k',
      done: 'Hoàn thành',
      date: new Date('2023-03-23'),
    },
    {
      id: 'ID21220560',
      time: '09:53',
      datee: '03/03/2023',
      price: '40k',
      done: 'Hoàn thành',
      date: new Date('2023-03-23'),
    },
    {
      id: 'ID21220561',
      time: '09:53',
      datee: '03/03/2023',
      price: '40k',
      done: 'Hoàn thành',
      date: new Date('2023-03-23'),
    },
    {
      id: 'ID21220562',
      time: '09:53',
      datee: '03/03/2023',
      price: '40k',
      done: 'Hoàn thành',
      date: new Date('2023-03-23'),
    },
    {
      id: 'ID21220563',
      time: '09:53',
      datee: '03/03/2023',
      price: '40k',
      done: 'Hoàn thành',
      date: new Date('2023-03-23'),
    },
    {
      id: 'ID21220564',
      time: '09:54',
      datee: '03/03/2023',
      price: '40k',
      done: 'Hoàn thành',
      date: new Date('2023-03-23'),
    },
    {
      id: 'ID21220565',
      time: '09:53',
      datee: '03/03/2023',
      price: '40k',
      done: 'Hoàn thành',
      date: new Date('2023-03-23'),
    },
    {
      id: 'ID21220566',
      time: '09:53',
      datee: '03/03/2023',
      price: '40k',
      done: 'Hoàn thành',
      date: new Date('2023-03-23'),
    },
  ]);

  const filteredProducts = productList.filter(product => {
    return product.date >= startDate && product.date <= endDate;
  });

  const handleDateChange = date => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };
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
    legend: ['Danh Thu'], // optional
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
            <View style={styles.rightHeader}>
              <IconOcticons
                name="bell-fill"
                color={constants.COLOR.RED}
                size={20}
              />
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
                  <Text style={styles.textTab}>Danh Thu</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.tabChart}>
              <TouchableOpacity
                style={[styles.tab2, activeTab === 'Tab 2' && styles.activeTab]}
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
                <View style={styles.dateRangePickerText}>
                  <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <View style={styles.dateRangePickerText1}>
                      <Text style={styles.dateRangePickerText2}>Từ ngày</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.dateRangePickerText3}>
                    <Text style={styles.dateRangePickerText4}>
                      {startDate.toLocaleDateString('vi-VN')}
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
                      {endDate.toLocaleDateString('vi-VN')}
                    </Text>
                  </View>
                </View>
                <View>
                  <Modal visible={showDatePicker}>
                    <View>
                      <View style={styles.datePickerContainer}>
                        <DatePicker
                          date={startDate}
                          mode="date"
                          onDateChange={date => setStartDate(date)}
                          locale="vi-VN"
                        />
                      </View>
                      <View style={styles.datePickerContainer}>
                        <DatePicker
                          date={endDate}
                          mode="date"
                          onDateChange={date => setEndDate(date)}
                          locale="vi-VN"
                        />
                      </View>
                      <TouchableOpacity
                        onPress={() => setShowDatePicker(false)}>
                        <Text style={styles.buttonTouch}>OK</Text>
                      </TouchableOpacity>
                    </View>
                  </Modal>
                </View>
              </View>
              <View style={styles.strikethrough}></View>
              <TouchableNativeFeedback>
                <FlashList
                  estimatedItemSize={100}
                  data={filteredProducts}
                  renderItem={({item}) => (
                    <SafeKeyComponent>
                      <View style={styles.itemOder}>
                        <View>
                          <Text style={styles.itemText}>{item._id}</Text>
                          {/* <Text style={styles.itemText}>{item.datee}</Text> */}
                          <Text style={styles.itemText1}>{item.createdAt}</Text>
                        </View>
                        <View style={styles.itemText1}>
                          <Text style={styles.itemText}>
                            {item.orderStatus}
                          </Text>
                          <Text style={styles.itemText1}>
                            {item.moneyToPaid}
                          </Text>
                        </View>
                      </View>
                    </SafeKeyComponent>
                  )}
                />
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
                <View>
                  <Modal visible={showDatePicker}>
                    <View>
                      <View style={styles.datePickerContainer}>
                        <DatePicker
                          date={startDate}
                          mode="date"
                          onDateChange={date => setStartDate(date)}
                          locale="vi-VN"
                        />
                      </View>
                      <View style={styles.datePickerContainer}>
                        <DatePicker
                          date={endDate}
                          mode="date"
                          onDateChange={date => setEndDate(date)}
                          locale="vi-VN"
                        />
                      </View>
                      <TouchableOpacity
                        onPress={() => setShowDatePicker(false)}>
                        <Text style={styles.buttonTouch}>OK</Text>
                      </TouchableOpacity>
                    </View>
                  </Modal>
                </View>
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
