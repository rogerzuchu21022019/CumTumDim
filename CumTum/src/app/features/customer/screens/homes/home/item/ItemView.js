import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';

import FastImage from 'react-native-fast-image';
import DropDownPicker from 'react-native-dropdown-picker';
import {mainDishOptionsData} from '../../../../../admin/screens/addDish/DataDishes';
import {constants} from '../../../../../../shared/constants';
import styles from './StyleItem';
import {LOG} from '../../../../../../../../logger.config';
const log = LOG.extend('ITEM_VIEW.JS');
const ItemView = props => {
  const {item, index, handleAddDish, handleRemoveDish, tabs, valueSubMainDish} =
    props;
  console.log(
    '🚀 ~ file: ItemView.js:14 ~ ItemView ~ valueSubMainDish:',
    valueSubMainDish,
  );

  const onDecrease = () => {
    handleRemoveDish(item);
  };

  const onIncrease = () => {
    if (tabs.toString() === '0') {
      if (valueSubMainDish.length != 0) {
        handleAddDish(item);
      } else {
        valueSubMainDish.length = 0;
        Alert.alert('Hãy chọn loại sườn trước nè ! Hihi');
      }
    } else {
      handleAddDish(item);
    }
  };


  const imageUrlOptions = {
    uri: item.imageUrl,
    priority: FastImage.priority.high,
    cache: FastImage.cacheControl.immutable,
  };

  return (
    <SafeKeyComponent>
      <View key={item._id.toString()} style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.body}>
          <View style={styles.boxInfoDish}>
            <View style={styles.boxShowImage}>
              <View style={styles.boxIndex}>
                <Text style={[styles.textName, styles.textNameUpdate]}>
                  {index + 1}
                </Text>
              </View>
              <FastImage style={styles.imageDish} source={imageUrlOptions} />
            </View>
            <View style={styles.boxShowNamePrice}>
              <Text style={[styles.textName, styles.textBoxNameUpdate]}>
                {item.name}
              </Text>
              {item.price === 0 ? (
                <Text style={[styles.textName, styles.textBoxNameUpdate]}>
                  Free
                </Text>
              ) : (
                <View>
                  <Text style={[styles.textName, styles.textBoxNameUpdate]}>
                    {item.price}K
                  </Text>

                  <Text
                    style={[
                      styles.textName,
                      styles.textBoxNameUpdate,
                      styles.updateColor,
                    ]}>
                    {item.price * item.amount}K
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.boxHandleAmount}>
              <View style={styles.boxIcon}>
                <TouchableOpacity onPress={onDecrease}>
                  <FastImage
                    style={styles.imageIcon}
                    source={require(`../../../../../../../assets/MinusImages.png`)}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.boxShowAmount}>
                <Text style={[styles.textName, styles.textNameUpdate]}>
                  {item.amount}
                </Text>
              </View>
              <View style={styles.boxIcon}>
                <TouchableOpacity onPress={onIncrease}>
                  <FastImage
                    style={styles.imageIcon}
                    source={require(`../../../../../../../assets/iconPlus.png`)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {/* <View>
          <Text
            style={{
              color: constants.COLOR.WHITE,
            }}>
            {itemNew._id}
          </Text>
          <Text
            style={{
              color: constants.COLOR.WHITE,
            }}>
            price : {amount === 0 ? 0 : itemNew.price}
          </Text>
          <Text
            style={{
              color: constants.COLOR.WHITE,
            }}>
            {amount === 0 ? 0 : itemNew.amount}
          </Text>
          <Text
            style={{
              color: constants.COLOR.WHITE,
            }}>
            {itemNew.name}
          </Text>
          <Text
            style={{
              color: constants.COLOR.WHITE,
            }}>
            {itemNew.createdAt}
          </Text>
        </View> */}
        <View style={styles.footer}></View>
      </View>
    </SafeKeyComponent>
  );
};

export default ItemView;
