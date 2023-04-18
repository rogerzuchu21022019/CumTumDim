import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';

import FastImage from 'react-native-fast-image';
import {constants} from '../../../../../../shared/constants';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from './StylesAddDeliveryAddress';
import { FlashList } from '@shopify/flash-list';
import ItemAddDeliveryAddrees from '../item/itemAddDeliveryAddress';

const AddDeliveryAddrees = ({navigation}) => {
  const moveToBack = () => {
    navigation.goBack();
  };
  const array = [
    {
      id: 1,
      name: 'Võ Ngọc Phước',
      phone: '0342128462',
      street: 'Tô Ký',
      houseNumber: '413',
      district: ' Hóc Môn',
      ward: 'Trung Mỹ Tây',
      city: 'Hồ Chí Minh',
    },
  ];
  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.groupHeader}>
            <TouchableOpacity onPress={moveToBack}>
              <View>
                <IconAntDesign
                  name="left"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.profile}>
              <Text style={styles.textProfile}>Thêm địa chỉ giao hàng</Text>
            </View>
            <View style={styles.groupHeader}></View>
          </View>
        </View>
        <View style={styles.divideLine}></View>
        <View style={styles.body}>
          <View style={styles.viewFlashList}>
            <FlashList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={array}
              estimatedItemSize={200}
              renderItem={({item, index}) => {
                return (
                  <ItemAddDeliveryAddrees
                    item={item}
                    index={index}
                    navigation={navigation}
                  />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity>
            <View style={styles.btnSave}>
              <Text style={styles.textSave}>Lưu</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default AddDeliveryAddrees;
