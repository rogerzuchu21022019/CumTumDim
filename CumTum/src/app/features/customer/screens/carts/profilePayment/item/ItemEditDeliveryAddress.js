import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './stylesItemEditDeliveryAddress';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import BoxInputCus from '../../../../../../components/input/BoxInput';
const ItemEditDeliveryAddrees = ({item, navigation, index}) => {
  const [name, setName] = useState(item.name);
  const [phone, setPhone] = useState(item.phone);
  const [ward, setWard] = useState(item.ward);
  const [district, setDistrict] = useState(item.district);
  const [city, setCity] = useState(item.city);
  const [street, setStreet] = useState(item.street);
  const [houseNumber, setHouseNumber] = useState(item.houseNumber);

  return (
    <SafeKeyComponent>
      <View style={styles.groupAll}>
        <BoxInputCus
          title="Họ và tên"
          value={name}
          onChangeText={text => setName(text)}
        />

        <BoxInputCus
          title="Số điện thoại"
          value={phone}
          onChangeText={text => setPhone(text)}
        />

        <BoxInputCus
          title="Phường"
          value={ward}
          onChangeText={text => setWard(text)}
        />

        <BoxInputCus
          title="Đường"
          value={street}
          onChangeText={text => setStreet(text)}
        />

        <BoxInputCus
          title="Số nhà"
          value={houseNumber}
          onChangeText={text => setHouseNumber(text)}
        />

        <BoxInputCus
          title="Quận"
          value={district}
          onChangeText={text => setDistrict(text)}
        />

        <BoxInputCus
          title="Thành phố"
          value={city}
          onChangeText={text => setCity(text)}
        />
      
      </View>
    </SafeKeyComponent>
  );
};

export default ItemEditDeliveryAddrees;
