import {
  View,
  Text,
  SafeAreaViewComponent,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './StylesDeliveryAddress';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {constants} from '../../../../../shared/constants';
import FastImage from 'react-native-fast-image';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import HomeAdmin from '../../../../admin/screens/homeAdmin/HomeAdmin';
import {FlashList} from '@shopify/flash-list';
import ItemViewPayment from './item/itemViewDeliveryAddress';
import Router from '../../../../../navigation/Router';
import AddDeliveryAddrees from './addDeliveryAddress/AddDeliveryAddress';
import {LOG} from '../../../../../../../logger.config';
const log = LOG.extend(`CHOOSE_DELIVERY_ADDRESS.JS`);
const ChooseDeliveryAddress = ({navigation}) => {
  const [checkedItem, setCheckedItem] = useState(0);
  const goBack = () => {
    navigation.goBack();
  };
  const add = () => {
    navigation.navigate(Router.ADD_DELIVERY_ADDRESS);
  };

  const array = [
    {
      id: '234234234',
      name: 'Võ Ngọc Phước',
      phone: '0342128462',
      street: 'Tô Ký',
      houseNumber: '413',
      district: ' Hóc Môn',
      ward: 'Trung Mỹ Tây',
      city: 'Hồ Chí Minh',
      addressDefault: false
    },
    {
      id: '3423234',
      name: 'Vũ Đức Hải',
      phone: '0867704364',
      street: '62',
      houseNumber: '16',
      district: '',
      ward: 'Thảo Điền',
      city: 'Hồ Chí Minh',
      addressDefault: false
    },
    {
      id: '4324234324',
      name: 'Vũ Thành Nam',
      phone: '0879175310',
      street: '111',
      houseNumber: '22',
      district: 'Q12',
      ward: 'Trung Mỹ Tây',
      city: 'Hồ Chí Minh',
      addressDefault: false
    },
  ];

  const radioButtonsData = array.map((item, index) => {
    return {
      ...item,
      idAuto: index,
    };
  });

  const handleCheckedItem = index => {
    setCheckedItem(index);
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.mainHeader}>
            <TouchableOpacity onPress={goBack}>
              <View style={styles.icon}>
                <IconAntDesign
                  name="left"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.leftHeader}>
              <Text style={styles.textTitle}>Chọn địa chỉ nhận hàng</Text>
              {/* <Text style={styles.textTitle}>{urlPaypalCheckout}</Text> */}
            </View>
          </View>
        </View>
        <View style={styles.divideLine}></View>
      </View>
      <View style={styles.body}>
        <View style={styles.viewText}>
          <Text style={styles.textAddress}>Địa chỉ</Text>
        </View>
        <View style={styles.viewFlashList}>
          <FlashList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={radioButtonsData}
            estimatedItemSize={200}
            renderItem={({item, index}) => {
              return (
                <ItemViewPayment
                  item={item}
                  index={index}
                  navigation={navigation}
                  handleCheckedItem={() => handleCheckedItem(index)}
                  checkedItem={checkedItem}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.viewFooter}>
          <TouchableOpacity onPress={add}>
            <View style={styles.viewButtonNext}>
              <Text style={styles.btnNext}>Thêm địa chỉ giao hàng</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </SafeKeyComponent>
  );
};

export default ChooseDeliveryAddress;
