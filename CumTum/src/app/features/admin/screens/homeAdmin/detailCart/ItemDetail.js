import {StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './stylesItem';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import FastImage from 'react-native-fast-image';
import { LOG } from '../../../../../../../logger.config';
const log = LOG.extend("ITEM_DETAIL.js")
const ItemDetail = ({item, index}) => {

  const imageUrlOptions = {
    uri: item.productImageUrl,
    priority: FastImage.priority.high,
    cache: FastImage.cacheControl.immutable,
  };
  // mainDishCart
  // log.info("item", item);
  
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
            {item.subCategory === 'Sườn mỡ' ? (
              <View>
                <Text style={[styles.textName, styles.textBoxNameUpdate]}>
                  {item.productName}
                </Text>
                <Text style={[styles.textName, styles.textBoxNameUpdate]}>
                  ({item.subCategory})
                </Text>
              </View>
            ) : (
              <Text style={[styles.textName, styles.textBoxNameUpdate]}>
                {item.productName}
              </Text>
            )}
            {item.price === 0  ? (
                <Text style={[styles.textName, styles.textBoxNameUpdate]}>
                  Free
                </Text>
              ) : (
                <View>
                  <Text
                    style={[
                      styles.textName,
                      styles.textBoxNameUpdate,
                      styles.updateColor,
                    ]}>
                    {item.price * item.amounts}K
                  </Text>
              </View>
            )}
          </View>
          <View style={styles.boxHandleAmount}>
           

            <View style={styles.boxShowAmount}>
              <Text style={[styles.textName, styles.textNameUpdate]}>
                {item.amounts}
              </Text>
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

export default ItemDetail;

