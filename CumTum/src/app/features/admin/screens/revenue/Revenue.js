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
} from 'react-native';
import React, {useState} from 'react';
import StylesRevenue from './StylesRevenue';
import DatePicker from 'react-native-date-picker';
import {LineChart} from 'react-native-chart-kit';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import {Dimensions} from 'react-native';

const Revenue = () => {
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
    labels: [
      'Tháng 1',
      'Tháng 2',
      'Tháng 3',
      'Tháng 4',
      'Tháng 5',
      'Tháng 6',
      'Tháng 7',
      'Tháng 8',
      'Tháng 9',
      'Tháng 10',
      'Tháng 11',
      'Tháng 12',
    ],
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
      <View style={StylesRevenue.container}>
        <View style={StylesRevenue.header}>
          <View style={StylesRevenue.groupFinal}>
            <View style={StylesRevenue.groupItemHeader}>
              <Image
                source={require('../../../../../assets/iconLogo_CumTumDim.jpg')}
              />
              <Text style={StylesRevenue.textTitle}>Cum tứm đim</Text>
            </View>
          </View>
          <View style={StylesRevenue.strikethrough}></View>
        </View>
        <View style={StylesRevenue.body}>
          {/* tab */}
          <View style={StylesRevenue.tabsIncome}>
            <View style={StylesRevenue.tabDoanhThu}>
              <TouchableOpacity
                style={[
                  StylesRevenue.tab1,
                  activeTab === 'Tab 1' && StylesRevenue.activeTab,
                ]}
                onPress={() => handleTabPress('Tab 1')}>
                <View>
                  <Text style={StylesRevenue.textTab}>Danh Thu</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={StylesRevenue.tabBieuDo}>
              <TouchableOpacity
                style={[
                  StylesRevenue.tab2,
                  activeTab === 'Tab 2' && StylesRevenue.activeTab,
                ]}
                onPress={() => handleTabPress('Tab 2')}>
                <View style={StylesRevenue.itemText1}>
                  <Text style={StylesRevenue.textTab}>Biểu Đồ</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* them du lieu  */}
          {activeTab === 'Tab 1' && (
            <View style={StylesRevenue.bodyTabRevenue}>
              <View style={StylesRevenue.dateRangePickerContainer}>
                <View style={StylesRevenue.dateRangePickerText}>
                  <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <View style={StylesRevenue.dateRangePickerText1}>
                      <Text style={StylesRevenue.dateRangePickerText2}>
                        Từ ngày
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View style={StylesRevenue.dateRangePickerText3}>
                    <Text style={StylesRevenue.dateRangePickerText4}>
                      {startDate.toLocaleDateString('vi-VN')}
                    </Text>
                  </View>
                </View>
                <View style={StylesRevenue.dateRangePickerText}>
                  <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <View style={StylesRevenue.dateRangePickerText1}>
                      <Text style={StylesRevenue.dateRangePickerText2}>
                        Đến ngày
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View style={StylesRevenue.dateRangePickerText3}>
                    <Text style={StylesRevenue.dateRangePickerText4}>
                      {endDate.toLocaleDateString('vi-VN')}
                    </Text>
                  </View>
                </View>
                <View>
                  <Modal visible={showDatePicker}>
                    <View>
                      <View style={StylesRevenue.datePickerContainer}>
                        <DatePicker
                          date={startDate}
                          mode="date"
                          onDateChange={date => setStartDate(date)}
                          locale="vi-VN"
                        />
                      </View>
                      <View style={StylesRevenue.datePickerContainer}>
                        <DatePicker
                          date={endDate}
                          mode="date"
                          onDateChange={date => setEndDate(date)}
                          locale="vi-VN"
                        />
                      </View>
                      <TouchableOpacity
                        onPress={() => setShowDatePicker(false)}>
                        <Text style={StylesRevenue.buttonTouch}>OK</Text>
                      </TouchableOpacity>
                    </View>
                  </Modal>
                </View>
              </View>
              <View style={StylesRevenue.strikethrough}></View>
              <FlatList
                data={filteredProducts}
                renderItem={({item}) => (
                  <View style={StylesRevenue.itemOder}>
                    <View>
                      <Text style={StylesRevenue.itemText}>{item.id}</Text>
                      <Text style={StylesRevenue.itemText}>{item.datee}</Text>
                      <Text style={StylesRevenue.itemText1}>{item.time}</Text>
                    </View>
                    <View style={StylesRevenue.itemText1}>
                      <Text style={StylesRevenue.itemText}>{item.done}</Text>
                      <Text style={StylesRevenue.itemText1}>{item.price}</Text>
                    </View>
                  </View>
                )}
              />
            </View>
          )}
          {/* bieu do */}
          {activeTab === 'Tab 2' && (
            <View style={StylesRevenue.bodyTabRevenue}>
              <View>
                <View style={StylesRevenue.dateRangePickerText}>
                  <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <View style={StylesRevenue.dateRangePickerText1}>
                      <Text style={StylesRevenue.dateRangePickerText2}>
                        Từ ngày
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View style={StylesRevenue.dateRangePickerText3}>
                    <Text style={StylesRevenue.dateRangePickerText4}>
                      {startDate.toLocaleDateString('vi-VN')}
                    </Text>
                  </View>
                </View>
                <View style={StylesRevenue.dateRangePickerText}>
                  <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <View style={StylesRevenue.dateRangePickerText1}>
                      <Text style={StylesRevenue.dateRangePickerText2}>
                        Đến ngày
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View style={StylesRevenue.dateRangePickerText3}>
                    <Text style={StylesRevenue.dateRangePickerText4}>
                      {endDate.toLocaleDateString('vi-VN')}
                    </Text>
                  </View>
                </View>
                <View>
                  <Modal visible={showDatePicker}>
                    <View>
                      <View style={StylesRevenue.datePickerContainer}>
                        <DatePicker
                          date={startDate}
                          mode="date"
                          onDateChange={date => setStartDate(date)}
                          locale="vi-VN"
                        />
                      </View>
                      <View style={StylesRevenue.datePickerContainer}>
                        <DatePicker
                          date={endDate}
                          mode="date"
                          onDateChange={date => setEndDate(date)}
                          locale="vi-VN"
                        />
                      </View>
                      <TouchableOpacity
                        onPress={() => setShowDatePicker(false)}>
                        <Text style={StylesRevenue.buttonTouch}>OK</Text>
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
export default Revenue;
