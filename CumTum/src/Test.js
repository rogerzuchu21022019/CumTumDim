import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

const data = [
  {
    name: 'Món chính',
    items: [
      {name: 'Sườn', price: 100},
      {name: 'Thịt', price: 120},
      {name: 'Cá', price: 150},
    ],
  },
  {
    name: 'Món thêm',
    items: [
      {name: 'Canh', price: 30},
      {name: 'Rau', price: 40},
    ],
  },
  {
    name: 'Toppings',
    items: [
      {name: 'Tương ớt', price: 5},
      {name: 'Tương cà', price: 5},
    ],
  },
  {
    name: 'Khác',
    items: [
      {name: 'Nước ngọt', price: 10},
      {name: 'Tráng miệng', price: 15},
    ],
  },
];

const Test = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const renderItem = ({item}) => {
    return (
      <View style={{padding: 10, flexDirection: 'row'}}>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
          <Text style={{fontSize: 16, color: 'gray'}}>Giá: {item.price} đ</Text>
        </View>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
          <Text style={{fontSize: 16, color: 'gray'}}>Giá: {item.price} đ</Text>
        </View>
      </View>
    );
  };

  const renderTab = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
          padding: 10,
          backgroundColor: selectedTab === index ? 'lightblue' : 'white',
          borderBottomWidth: selectedTab === index ? 2 : 0,
          borderColor: 'blue',
        }}
        onPress={() => setSelectedTab(index)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const filteredData = data[selectedTab].items;

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTab}
      />
    </View>
  );
};

export default Test;
