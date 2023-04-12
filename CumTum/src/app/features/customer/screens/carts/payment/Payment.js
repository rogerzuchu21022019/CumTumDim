import {View, Text, TouchableOpacity, Modal, Alert} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import styles from './StylesPayment';
import {constants} from '../../../../../shared/constants';
import FastImage from 'react-native-fast-image';
import IconOcticons from 'react-native-vector-icons/Octicons';
import Router from '../../../../../navigation/Router';
import {useDispatch, useSelector} from 'react-redux';
import queryString from 'query-string';
import IconAntDesign from 'react-native-vector-icons/AntDesign';


import {
  fetchAccessTokenPaypal,
  fetchCreateOrder,
  fetchCreateOrderPaypal,
  fetchNotification,
} from '../../../../carts/apiOrder';
import {authSelector} from '../../../../user/sliceAuth';
import {cartSelector} from '../../../../carts/sliceOrder';
import notifee from '@notifee/react-native';
import {showNotifyLocal} from '../../../../../shared/utils/Notifies';
import {LOG} from '../../../../../../../logger.config';
import {
  createOrderPaypal,
  getDataPaypal,
  verifyCaptureOrderPaypal,
} from '../../../../../shared/utils/Paypal';
import WebView from 'react-native-webview';
import Snackbar from 'react-native-snackbar';
import {resetCart} from '../../../../product/sliceProduct';
const log = LOG.extend(`PAYMENT.JS`);
const Payment = ({navigation, route}) => {
  const {order} = route.params;

  /* State */
  const [checkedId, setCheckedId] = useState(null);
  const [urlPaypalCheckout, setUrlPaypalCheckout] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const auth = useSelector(authSelector);
  const cartData = useSelector(cartSelector);
  // console.log('🚀 ~ file: Payment.js:16 ~ Payment ~ auth:', auth);
  const name = auth.user.name;
  const userId = auth.user._id;
  const moneyToPaid = order.moneyToPaid;
  // console.log('🚀 ~ file: Payment.js:11 ~ Payment ~ order:', order);

  const onDisplayNotification = async () => {
    // Create a channel (required for Android)
    const title = 'Notification';
    const content = `Cảm ơn bạn ${name} đã đặt hàng. Đơn hàng của bạn đang được chúng tôi xác nhận.....`;
    // console.log("🚀 ~ file: Payment.js:45 ~ onDisplayNotification ~ content:", content)
    const dataMap = {
      title,
      content,
    };
    // Display a notification
    showNotifyLocal(dataMap);
  };

  const dispatch = useDispatch();
  const handleCheck = id => {
    if (checkedId === id) {
      setCheckedId(null);
    } else {
      setCheckedId(id);
    }
  };

  const handleCreateOrder = order => {
    dispatch(fetchCreateOrder(order));

    // dispatch(fetchNotification(data));
  };

  const handleGetAccessToken = async order => {
    // const response = await dispatch(fetchAccessTokenPaypal());
    // setAccessToken(response.payload.access_token);
    // const data = {
    //   accessToken: response.payload.access_token,
    //   order: setItemPaypal(order),
    // };
    // const res = dispatch(fetchCreateOrderPaypal(data));
    // if (res.payload && res.payload.links != undefined) {
    //   const url = res.payload.links.find(link => link.rel === 'approve');
    //   setUrlPaypalCheckout(url.href);
    // }

    const response = await getDataPaypal();
    console.log(
      '🚀 ~ file: Payment.js:88 ~ handleGetAccessToken ~ response:',
      response,
    );
    setAccessToken(response.access_token);

    const res = await createOrderPaypal(response.access_token, order);
    log.error('🚀 ~ file: Payment.js:91 ~ handleGetAccessToken ~ res:', res);
    if (res.links != undefined) {
      const url = res.links.find(link => link.rel === 'approve');
      setUrlPaypalCheckout(url.href);
    }
  };

  const onPay = async () => {
    if (checkedId === null) {
      Alert.alert('Thông báo', 'Bạn chưa chọn phương thức thanh toán', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }

    if (checkedId === 1) {
      console.log('PAYPAL', checkedId);
      handleGetAccessToken(order);
    }
    if (checkedId === 2) {
      console.log('VISA', checkedId);

      Snackbar.show({
        text: 'Chức năng đang được tích hợp',
        duration: Snackbar.LENGTH_SHORT,
      });
      return;
    }
    if (checkedId === 3) {
      console.log('Zalo Pay', checkedId);

      Snackbar.show({
        text: 'Chức năng đang được tích hợp',
        duration: Snackbar.LENGTH_SHORT,
      });
      return;
    }

    if (checkedId === 4) {
      console.log('MOMO', checkedId);
      Snackbar.show({
        text: 'Chức năng đang được tích hợp',
        duration: Snackbar.LENGTH_SHORT,
      });
      return;
    }
    if (checkedId === 5) {
      console.log('Live To Paid', checkedId);
      Snackbar.show({
        text: 'Chức năng đang được tích hợp',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };
  const onUrlStateChange = async webViewState => {
    log.info(
      '🚀 ~ file: Payment.js:120 ~ onUrlStateChange ~ webViewState:',
      webViewState,
    );
    if (webViewState.url.includes(`https://example.com/cancel`)) {
      resetDataPaypal();
      return;
    }
    if (webViewState.url.includes(`https://example.com/return`)) {
      const urlValue = queryString.parseUrl(webViewState.url);
      const id = urlValue.query.token;
      if (!!id) {
        paymentSuccess(id);
      }
    }
  };
  const paymentSuccess = async id => {
    try {
      const response = await verifyCaptureOrderPaypal(id, accessToken);
      // log.error(
      //   '🚀 ~ file: Payment.js:140 ~ paymentSuccess ~ paymentStatus:',
      //   paymentStatus,
      // );
      if (response.status === 'COMPLETED') {
        resetDataPaypal();
        handleCreateOrder(order);
        onDisplayNotification();
        // handleResetCart();
        // navigation.goBack();
        navigation.navigate(Router.HOME_CUSTOMER_TABS);
      } else {
        return;
      }
    } catch (error) {
      log.error('🚀 ~ file: Payment.js:148 ~ paymentSuccess ~ error:', error);
    }
  };

  const handleResetCart = () => {
    dispatch({
      type: resetCart().type,
    });
  };

  const moToBack = () => {
    navigation.goBack();
  };

  const resetDataPaypal = () => {
    setAccessToken(null);
    setUrlPaypalCheckout(null);
  };
  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header}>
            <View style={styles.mainHeader}>
              <TouchableOpacity onPress={moToBack}>
                <View style={styles.icon}>
                  <IconAntDesign
                    name="left"
                    color={constants.COLOR.WHITE}
                    size={20}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.leftHeader}>
                <Text style={styles.textTitle}>Thanh toán</Text>
                {/* <Text style={styles.textTitle}>{urlPaypalCheckout}</Text> */}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.divideLine}></View>
        <View style={styles.body}>
          <View style={styles.groupText}>
            <View style={styles.textTile}>
              <Text style={styles.text}>Địa chỉ nhận hàng</Text>
            </View>
            <View style={styles.groupContent}>
              <View style={styles.leftContent}>
                <View>
                  <Text style={styles.text1}>Võ Ngọc Phước | 0342128462</Text>
                </View>
                <View>
                  <Text style={styles.text1}>562/39h Đường Nguyễn Kiệm</Text>
                </View>
                <View>
                  <Text style={styles.text1}>
                    Phường 4, quận Phú Nhuận,TP HCM
                  </Text>
                </View>
              </View>
              <View style={styles.rightContent}>
              <IconAntDesign
                name="right"
                color={constants.COLOR.WHITE}
                size={15}
              />
            </View>
            </View>
           
          </View>

          <View>
            <Text style={styles.text}>
              Vui lòng chọn một trong các phương thức sau:
            </Text>
          </View>

          <View style={styles.viewText}>
            {/* VN PAY */}
            <TouchableOpacity onPress={() => handleCheck(1)}>
              <View style={styles.viewPaypal}>
                <View style={styles.viewImage1}>
                  <FastImage
                    source={require('../../../../../../assets/paypal.jpeg')}
                    style={styles.checkMarkImage}
                  />
                </View>
                <View style={styles.viewTextPay}>
                  <Text style={styles.textPaypal}>PAYPAL</Text>
                </View>
                <View
                  style={[
                    styles.checkbox,
                    checkedId === 1 && styles.checkboxChecked,
                  ]}></View>
              </View>
            </TouchableOpacity>
            {/* Visa */}
            <TouchableOpacity onPress={() => handleCheck(2)}>
              <View style={styles.viewVisa}>
                <View style={styles.viewImage1}>
                  <FastImage
                    source={require('../../../../../../assets/visa.jpeg')}
                    style={styles.checkMarkVisa}
                  />
                </View>
                <View style={styles.viewTextVisa}>
                  <Text style={styles.textVisa}>VISA</Text>
                </View>
                <View
                  style={[
                    styles.checkbox,
                    checkedId === 2 && styles.checkboxChecked,
                  ]}></View>
              </View>
            </TouchableOpacity>
            {/* ZALO PAY */}
            <TouchableOpacity onPress={() => handleCheck(3)}>
              <View style={styles.viewZaloPay}>
                <View style={styles.viewImage1}>
                  <FastImage
                    source={require('../../../../../../assets/ZaloPayImages.png')}
                    style={styles.checkMarkImage}
                  />
                </View>
                <View style={styles.viewTextZaloPay}>
                  <Text style={styles.textZaloPay}>ZALO PAY</Text>
                </View>
                <View
                  style={[
                    styles.checkbox,
                    checkedId === 3 && styles.checkboxChecked,
                  ]}></View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleCheck(4)}>
              <View style={styles.viewMomo}>
                <View style={styles.viewImage1}>
                  <FastImage
                    source={require('../../../../../../assets/MomoImages.png')}
                    style={styles.checkMarkImage}
                  />
                </View>
                <View style={styles.viewTextZaloPay}>
                  <Text style={styles.textZaloPay}>MOMO</Text>
                </View>
                <View
                  style={[
                    styles.checkbox,
                    checkedId === 4 && styles.checkboxChecked,
                  ]}></View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleCheck(5)}>
              <View style={styles.viewLiveToPaid}>
                <View style={styles.viewImage1}>
                  <FastImage
                    source={require('../../../../../../assets/MoneyPaid.jpeg')}
                    style={styles.checkMarkImage}
                  />
                </View>
                <View style={styles.viewTextZaloPay}>
                  <Text style={styles.textZaloPay}>Thanh toán trực tiếp</Text>
                </View>
                <View
                  style={[
                    styles.checkbox,
                    checkedId === 5 && styles.checkboxChecked,
                  ]}></View>
              </View>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={!!urlPaypalCheckout}>
              <SafeKeyComponent>
                <View style={styles.containerPaypal}>
                  <TouchableOpacity onPress={resetDataPaypal}>
                    <Text style={[styles.textTitle, styles.updateTitlePaypal]}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                  <WebView
                    source={{uri: urlPaypalCheckout}}
                    onNavigationStateChange={onUrlStateChange}
                  />
                </View>
              </SafeKeyComponent>
            </Modal>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.viewFooter}>
            <TouchableOpacity onPress={onPay}>
              <View style={styles.viewButtonNext}>
                <Text style={styles.btnNext}>Tiếp theo</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default Payment;
