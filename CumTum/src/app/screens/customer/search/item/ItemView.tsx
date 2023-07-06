import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import FastImage from 'react-native-fast-image';
import styles from './StyleItem';
import {LOG} from '../../../../../../logger.config';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import {ItemPropsHandler, Subcategory} from '../../../../../redux/api/types';
const log = LOG.extend('ITEM_VIEW.JS');
const ItemView = (props: ItemPropsHandler) => {
  const {item, index, handleAddDish, handleRemoveDish} = props;

  const onDecrease = () => {
    if (item.amount === 0) {
      return;
    }
    handleRemoveDish(item);
  };

  const onIncrease = () => {
    handleAddDish(item);
  };

  const imageUrlOptions = {
    uri: item.imageUrl,
    priority: FastImage.priority.high,
    cache: FastImage.cacheControl.immutable,
  };

  return (
    <SafeKeyComponent>
      <View key={index} style={styles.container}>
        <View style={styles.header} />
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
                {item.subCategory === Subcategory.SUON_MO &&
                item.name.includes('Sườn')
                  ? `(${item.subCategory})`
                  : ''}
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
                    source={require('../../../../../assets/MinusImages.png')}
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
                    source={require('../../../../../assets/iconPlus.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer} />
      </View>
    </SafeKeyComponent>
  );
};

export default ItemView;
