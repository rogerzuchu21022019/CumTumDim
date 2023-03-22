import {View, Text, TouchableOpacity} from 'react-native';
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
  const {item, index, handleAddDish, handleRemoveDish, updateAmountDish} =
    props;

  const [amount, setAmount] = useState(item.amount);
  const [price, setPrice] = useState(item.price);
  const [itemNew, setItemNew] = useState(item);

  const onIncrease = () => {
    setAmount(amount + 1);

    const itemAdd = {
      ...itemNew,
      amount: amount + 1,
      price: price * (amount + 1),
    };
    setItemNew(itemAdd);
    handleAddDish(itemAdd);
    updateAmountDish(itemAdd);
  };

  const onDecrease = () => {
    setAmount(amount - 1);
    amount <= 0 ? setAmount(0) : setAmount(amount - 1);
    const itemRemove = {
      ...itemNew,
      amount: amount === 0 ? 0 : amount - 1,
      price: amount === 0 ? 0 : price * (amount - 1),
    };
    setItemNew(itemRemove);
    handleRemoveDish(itemRemove);
    updateAmountDish(itemRemove);
  };

  useEffect(() => {}, [onIncrease, onDecrease]);

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
                    {price * amount}K
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
                  {amount}
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
        <View>
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
        </View>
        <View style={styles.footer}></View>
      </View>
    </SafeKeyComponent>
  );
};

export default ItemView;
