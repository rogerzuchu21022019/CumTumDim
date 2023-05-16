import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TouchableNativeFeedback,
  Modal,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import styles from './StylesDetailCard';
import ItemDetail from './ItemDetail';
import {FlashList} from '@shopify/flash-list';
import Router from '../../../../../navigation/Router';
import {LOG} from '../../../../../../../logger.config';

import {constants} from '../../../../../shared/constants';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {fetchUpdateOrder} from '../../../../carts/apiOrder';
import socketServices from '../../../../../shared/utils/Socket';

import WebView from 'react-native-webview';

const DetailCard = ({route, navigation}) => {
  const dispatch = useDispatch();
  const log = LOG.extend('DETAILCART');
  const {item, index} = route.params;
  const [urlPaypalCheckout, setUrlPaypalCheckout] = useState(false);

  log.info('item', item);

  const arrHouseNumber = item.address.houseNumber.split(`/`);
  log.info(
    '🚀 ~ file: DetailCard.js:33 ~ DetailCard ~ arrHouseNumber:',
    arrHouseNumber,
  );
  const houseNumber = `${arrHouseNumber[0]}/${arrHouseNumber[1]}`;
  const hem = arrHouseNumber[1];
  const moveToHome = () => {
    navigation.navigate(Router.HOME_ADMIN);
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

  const onAccept = async () => {
    dispatch(
      fetchUpdateOrder({
        orderId: item._id,
        orderStatus: 'Chấp nhận',
      }),
    );
    navigation.goBack();
  };
  const onCancel = async () => {
    setUrlPaypalCheckout(true);
  };
  const resetDataPaypal = () => {
    setUrlPaypalCheckout(null);
  };
  const handleAcceptedOrderCancel = () => {
    dispatch(
      fetchUpdateOrder({
        orderId: item._id,
        orderStatus: 'Từ chối',
      }),
    );
    resetDataPaypal();
    navigation.goBack();
  };

  const onUrlStateChange = async webViewState => {
    // log.info(
    //   '🚀 ~ file:  DetailCard.js:116 ~ onUrlStateChange ~ webViewState:',
    //   webViewState,
    // );
    if (webViewState.title === 'Refund Complete - PayPal') {
      handleAcceptedOrderCancel();
    }
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
                <TouchableOpacity onPress={moveToHome}>
                  <IconIonicons
                    style={styles.imageReturn}
                    name="arrow-back"
                    color={constants.COLOR.WHITE}
                    size={20}
                  />
                </TouchableOpacity>
                {/* Code back to HomeScreen */}
                <TouchableOpacity onPress={moveToHome}>
                  <View style={styles.viewLogo}>
                    <Image
                      style={styles.imageLogo}
                      source={require('../../../../../../assets/Logo_CumTumDim.png')}
                    />
                    <Text style={styles.textTitle}>Cum tứm đim</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* <View style={styles.rightHeader}>
              <IconOcticons
                name="bell-fill"
                color={constants.COLOR.RED}
                size={20}
              />
            </View> */}
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
                  {/* Button */}
                  {item.orderStatus === 'Đang chờ' ? (
                    <View style={styles.groupButton}>
                      <TouchableOpacity onPress={onAccept}>
                        <View style={styles.viewButton}>
                          <Text style={styles.textButton}>Xác nhận</Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={onCancel}>
                        <View style={styles.viewButton}>
                          <Text style={styles.textButton}>Huỷ</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View style={styles.groupButton}>
                      <View
                        style={[styles.viewButton, styles.viewButtonDisable]}>
                        <Text style={styles.textButton}>Xác nhận</Text>
                      </View>
                      <View
                        style={[styles.viewButton, styles.viewButtonDisable]}>
                        <Text style={styles.textButton}>Huỷ</Text>
                      </View>
                    </View>
                  )}
                  {/*  số lượng món chính  */}

                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={urlPaypalCheckout}>
                    <SafeKeyComponent>
                      <View style={styles.containerPaypal}>
                        <TouchableOpacity onPress={resetDataPaypal}>
                          <Text
                            style={[
                              styles.textTitle,
                              styles.updateTitlePaypal,
                            ]}>
                            Cancel
                          </Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity onPress={handleAcceptedOrderCancel}>
                          <Text
                            style={[
                              styles.textTitle,
                              styles.updateTitlePaypal,
                            ]}>
                            Accepted Cancel Order
                          </Text>
                        </TouchableOpacity> */}
                        <WebView
                          source={{
                            uri: constants.PAYPAL.SANDBOX_PAYPAL_SIGN_IN,
                          }}
                          onNavigationStateChange={onUrlStateChange}
                        />
                      </View>
                    </SafeKeyComponent>
                  </Modal>
                  <View style={styles.viewTotal}>
                    {/* Tổng tiền  */}
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={[styles.textInfo, styles.updateTextInfo]}>
                        Tổng Tiền:
                      </Text>
                      <Text style={[styles.textInfo, styles.updateTextInfo]}>
                        {/* {solveMoneyToPaid()} K */}
                        {item.moneyToPaid} K 
                      </Text>
                    </View>
                    <View style={styles.divideLine}></View>

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
                        + Số lượng Suờn mỡ:
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
                        + Số lượng Suờn :
                      </Text>
                      <Text style={[styles.textInfo, styles.updateSubText]}>
                        {solveAmountMainDish() - solveAmountSuonMo()}
                      </Text>
                    </View>

                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textInfo}>Số lượng món thêm:</Text>
                      <Text style={styles.textInfo}>
                        {/* {solveAmountExtraDish()} */}
                        {item.totalExtraDish}
                      </Text>
                    </View>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textInfo}>Số lượng món topping:</Text>
                      <Text style={styles.textInfo}>
                        {/* {solveAmountToppings()} */}
                        {item.totalTopping}
                      </Text>
                    </View>

                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textInfo}>Số lượng món khác:</Text>
                      <Text style={styles.textInfo}>
                        {/* {solveAmountAnotherDish()} */}
                        {item.totalAnother}
                      </Text>
                    </View>

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
                      <Text style={styles.textAddress}>
                        Số nhà :{houseNumber}
                      </Text>
                      <Text style={styles.textAddress}>Hẻm :{hem}</Text>
                    </View>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textAddress}>
                        Đường :{item.address.street}
                      </Text>
                    </View>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textAddress}>
                        Phường : {item.address.ward}
                      </Text>
                    </View>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textAddress}>
                        Quận : {item.address.district}
                      </Text>
                    </View>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textAddress}>
                        Thành Phố : {item.address.city}
                      </Text>
                    </View>

                    <View style={styles.divideLine}></View>
                  </View>

                  {/*Món chính  */}
                  {item.mainDishCart.length ? (
                    <View style={styles.viewMainDishes}>
                      <View style={styles.viewTextHeader}>
                        <Text style={styles.textInfo}>Món Chính</Text>
                      </View>
                      <FlashList
                        data={item.mainDishCart}
                        renderItem={({item, index}) => {
                          return <ItemDetail index={index} item={item} />;
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        estimatedItemSize={100}
                        key={'list1'}
                      />

                      <View style={styles.viewTextHeader}>
                        <View style={styles.divideLine}></View>
                      </View>
                    </View>
                  ) : null}
                  {item.extraDishCart.length ? (
                    <View style={styles.viewExtraDishes}>
                      <View style={styles.viewTextHeader}>
                        <Text style={styles.textInfo}>Món thêm</Text>
                      </View>
                      <FlashList
                        data={item.extraDishCart}
                        renderItem={({item, index}) => {
                          return <ItemDetail index={index} item={item} />;
                        }}
                        key={'list2'}
                        keyExtractor={(item, index) => index.toString()}
                        estimatedItemSize={100}
                      />

                      <View style={styles.viewTextHeader}>
                        <View style={styles.divideLine}></View>
                      </View>
                    </View>
                  ) : null}
                  {item.toppingsCart.length ? (
                    <View style={styles.viewToppings}>
                      <View style={styles.viewTextHeader}>
                        <Text style={styles.textInfo}>Toppings</Text>
                      </View>
                      <FlashList
                        data={item.toppingsCart}
                        renderItem={({item, index}) => {
                          return <ItemDetail index={index} item={item} />;
                        }}
                        key={'list3'}
                        keyExtractor={(item, index) => index.toString()}
                        estimatedItemSize={100}
                      />
                      <View style={styles.viewTextHeader}>
                        <View style={styles.divideLine}></View>
                      </View>
                    </View>
                  ) : null}
                  {item.anotherCart.length ? (
                    <View style={styles.viewAnother}>
                      <View style={styles.viewTextHeader}>
                        <Text style={styles.textInfo}>Khác</Text>
                      </View>
                      <FlashList
                        data={item.anotherCart}
                        renderItem={({item, index}) => {
                          return <ItemDetail index={index} item={item} />;
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        estimatedItemSize={100}
                        key={'list4'}
                      />
                      <View style={styles.viewTextHeader}></View>
                    </View>
                  ) : null}
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

export default DetailCard;
