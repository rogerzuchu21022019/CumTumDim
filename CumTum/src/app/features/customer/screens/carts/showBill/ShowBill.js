import { Text, View, Image, TouchableOpacity, ScrollView, TouchableNativeFeedback, } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Styles';
import { LOG } from '../../../../../../../logger.config';
import { constants } from '../../../../../shared/constants';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';

import { formatTime } from '../../../../../shared/utils/Moment';

const ShowBill = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const log = LOG.extend('DETAILCART');
  const { item, index } = route.params;
  const data = route.params.item;
  log.info('🚀 ~ file: PaymentZalo.js:12 ~ PaymentZalo ~ data:', data);

  log.info('item', item);

  const moveToHOme = () => {
    navigation.goBack();
  };

  const solveAmountSuonMo = () => {
    let totalAmountDish = 0;
    item.mainDishCart.forEach(item => {
      if (item.subCategory === 'Sườn mỡ') {
        totalAmountDish += item.amounts;
      }
    });
    return totalAmountDish;
  };
  const solveAmountMainDish = () => {
    let totalAmountDish = 0;
    item.mainDishCart.forEach(item => {
      totalAmountDish += item.amounts;
    });
    return totalAmountDish;
  };
  // item.totalMainDish

  return (
    <SafeKeyComponent>
      {item.mainDishCart.length ||
        item.extraDishCart.length ||
        item.toppingsCart.length ||
        item.anotherCart.length ? (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.mainHeader}>
              <View style={styles.leftHeader}>
                <TouchableOpacity onPress={moveToHOme}>
                  <IconIonicons
                    style={styles.imageReturn}
                    name="arrow-back"
                    color={constants.COLOR.WHITE}
                    size={20}
                  />
                </TouchableOpacity>
                {/* Code back to HomeScreen */}
                <TouchableOpacity onPress={moveToHOme}>
                  <View style={styles.viewLogo}>
                    <Text style={styles.textTitle}>Show Bill</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.body}>
            <ScrollView
              scrollEnabled={true}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              decelerationRate={'fast'}>
              <TouchableNativeFeedback>
                <View style={styles.viewScrollList}>
                  <View style={styles.groupText}>
                    <View style={styles.viewText}>
                      <Text style={styles.textName}>Cum Túm Đim</Text>
                    </View>
                    <View style={styles.viewText}>
                      <Text style={styles.textlogo}>
                         110 Tô Ký, P.Trung Mỹ Tây, Quận 12
                      </Text>
                    </View>
                    <View style={styles.viewText}>
                      <Text style={styles.textlogo}> 0879175310 </Text>
                    </View>
                    <View style={styles.viewText}>
                      <Text style={styles.textbill}>Hoá Đơn Thanh Toán</Text>
                    </View>
                    <View style={styles.viewText}>
                      <Text style={styles.textlogo}>
                        Ngày : {formatTime(data?.createdAt)}
                      </Text>
                    </View>
                    <View style={styles.viewText}>
                      <Text style={styles.textpayment}>
                        {'Trạng thái đơn hàng : '}
                        <Text style={{ color: '#16FF00' }}>
                          {data?.paymentStatus}
                        </Text>
                      </Text>
                    </View>
                  </View>
                  <View style={styles.divideLine1}></View>
                  {/*  số lượng món chính  */}
                  <View style={styles.viewTotal}>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textInfo}>Số lượng món chính:</Text>
                      <Text style={styles.textInfo}>
                        {/* {solveAmountMainDish()}  */}
                        {item.totalMainDish}
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.viewBoxShowInfoBill,
                        styles.viewBoxShowSubInfoBill,
                      ]}>
                      <Text style={[styles.textInfo, styles.updateSubText]}>
                        + Suờn mỡ:
                      </Text>
                      <Text style={[styles.textInfo, styles.updateSubText]}>
                        {solveAmountSuonMo()}
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.viewBoxShowInfoBill,
                        styles.viewBoxShowSubInfoBill,
                      ]}>
                      <Text style={[styles.textInfo, styles.updateSubText]}>
                        + Suờn :
                      </Text>
                      <Text style={[styles.textInfo, styles.updateSubText]}>
                        {solveAmountMainDish() - solveAmountSuonMo()}
                      </Text>
                    </View>
                    <View style={styles.divideLine}></View>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textInfo}>Số lượng món thêm:</Text>
                      <Text style={styles.textInfo}>
                        {/* {solveAmountExtraDish()} */}
                        {item.totalExtraDish}
                      </Text>
                    </View>
                    <View style={styles.divideLine}></View>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textInfo}>Số lượng món topping:</Text>
                      <Text style={styles.textInfo}>
                        {/* {solveAmountToppings()} */}
                        {item.totalTopping}
                      </Text>
                    </View>
                    <View style={styles.divideLine}></View>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textInfo}>Số lượng món khác:</Text>
                      <Text style={styles.textInfo}>
                        {/* {solveAmountAnotherDish()} */}
                        {item.totalAnother}
                      </Text>
                    </View>
                    <View style={styles.divideLine}></View>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textInfo}>Tổng Số lượng:</Text>
                      <Text style={styles.textInfo}>
                        {/* {solveAmountDishes()} */}
                        {item.totalAmount}
                      </Text>
                    </View>
                    
                    <View style={styles.divideLine}></View>
                  </View>
                  {/*  Đỉa chỉ*/}
                  <View style={styles.viewTotal}>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textAddress}>Số nhà :{item.address.houseNumber}</Text>
                    </View>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textAddress}>Đường :{item.address.street}</Text>
                    </View>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textAddress}>
                        Phường : {item.address.ward}
                      </Text>
                    </View>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textAddress}>Quận : {item.address.district}</Text>
                    </View>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textAddress}>
                        Thành Phố : {item.address.city}
                      </Text>
                    </View>
                    <View style={styles.divideLine}></View>
                  </View>
                  {/* Tổng tiền  */}
                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={[styles.textInfo, styles.updateTextInfo]}>
                      Tổng Tiền:
                    </Text>
                    <Text style={[styles.textInfo, styles.updateMoneyInfo]}>
                      {/* {solveMoneyToPaid()} K */}
                      {item.moneyToPaid}
                    </Text>
                  </View>     
                </View>
              </TouchableNativeFeedback>
            </ScrollView>
          </View>
          <View style={styles.footer}></View>
        </View>
      ) : (
        <CartNoItem navigation={navigation} />
      )}
    </SafeKeyComponent>
  );
};
export default ShowBill;
