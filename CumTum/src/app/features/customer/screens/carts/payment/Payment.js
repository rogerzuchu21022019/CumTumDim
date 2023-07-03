import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  ScrollView,
} from 'react-native';
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
import IconEntypo from 'react-native-vector-icons/Entypo';

import {
  fetchAccessTokenPaypal,
  fetchCreateOrder,
  fetchCreateOrderPaypal,
} from '../../../../carts/apiOrder';
import {authSelector} from '../../../../admin/sliceAuth';
import {cartSelector, createHistoryCart} from '../../../../carts/sliceOrder';
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
import CheckModal from '../../../../../shared/utils/CheckModal';
import ModalNotify from '../../../../../components/modal/ModalNotify';
import messaging from '@react-native-firebase/messaging';
import {onDisplayNotification} from '../../../../../shared/utils/ShowNotifiWelcome';
import {fetchUserById} from '../../../../admin/apiUser';
import {boolean} from 'joi';

const log = LOG.extend(`PAYMENT.JS`);
const Payment = ({navigation, route}) => {
  let {order} = route.params;

  const editDeliveryAddress = () => {
    navigation.navigate(Router.DELIVERY_ADDRESS);
  };

  /* State */
  const [checkedId, setCheckedId] = useState(null);
  const [urlPaypalCheckout, setUrlPaypalCheckout] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [isEditAddress, setIsEditAddress] = useState(false);

  /* Selector */
  const authSelect = useSelector(authSelector);
  const cartData = useSelector(cartSelector);

  /* Variables */
  const name = authSelect.user.name;
  const userId = authSelect.user._id;
  const moneyToPaid = order.moneyToPaid;
  const address = authSelect.user.addresses;

  const getAddressDefault = address.filter(item => {
    return item.addressDefault === true;
  });
  const dispatch = useDispatch();

  const addressDefault = getAddressDefault[0];
  const message = 'Bạn chưa chọn phương thức thanh toán!';

  const handleCheck = id => {
    if (checkedId === id) {
      setCheckedId(null);
    } else {
      setCheckedId(id);
    }
  };

  const handleClick = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCreateOrder = async (order, address) => {
    const newOrder = {
      ...order,
      address: address,
    };
    await dispatch(fetchCreateOrder(newOrder));
  };

  const onCreateHistoryCart = order => ({
    type: createHistoryCart().type,
    payload: order,
  });

  const handleCreateHistoryCart = order => {
    dispatch(onCreateHistoryCart(order));
  };

  const handleGetAccessToken = async order => {
    const response = await getDataPaypal();
    setAccessToken(response.access_token);
    const res = await createOrderPaypal(response.access_token, order);
    if (res.links != undefined) {
      const url = res.links.find(link => link.rel === 'approve');
      setUrlPaypalCheckout(url.href);
    }
  };

  const onPay = async () => {
    if (checkedId === null) {
      setModalVisible(true);

      // Alert.alert('Thông báo', 'Bạn chưa chọn phương thức thanh toán', [
      //   {text: 'OK', onPress: () => console.log('OK Pressed')},
      // ]);

      return;
    }

    if (checkedId === 1) {
      console.log('PAYPAL', checkedId);
      if (addressDefault) {
        handleGetAccessToken(order, addressDefault);
      } else {
        Snackbar.show({
          text: 'Bạn chưa có địa chỉ nhận hàng',
          duration: Snackbar.LENGTH_SHORT,
        });
        setIsEditAddress(true);
      }
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
    // log.info(
    //   '🚀 ~ file: Payment.js:120 ~ onUrlStateChange ~ webViewState:',
    //   webViewState,
    // );
    if (webViewState.url.includes(`https://example.com/cancel`)) {
      resetDataPaypal();
      return;
    }
    if (webViewState.url.includes(`${constants.BASE_URL.URL_THANKS_LOCAL}`)) {
      const urlValue = queryString.parseUrl(webViewState.url);
      setShowCancel(true);
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
      //   response,
      // );
      const captureId = response.purchase_units[0].payments.captures[0].id;
      const valueAmount =
        response.purchase_units[0].payments.captures[0].amount.value;

      if (response.status === 'COMPLETED') {
        await handleCreateOrder(order, addressDefault);
        dispatch(fetchUserById(userId));
        handleResetCart();
        resetDataPaypal();
        onDisplayNotification(name);
        navigation.goBack();
        navigation.navigate(Router.HOME_CUSTOMER);
      } else {
        return;
      }
    } catch (error) {
      // log.error('🚀 ~ file: Payment.js:148 ~ paymentSuccess ~ error:', error);
    }
  };

  const handleResetCart = () => {
    dispatch({
      type: resetCart().type,
    });
  };

  const moveToBack = () => {
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
              <TouchableOpacity onPress={moveToBack}>
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
            <TouchableOpacity onPress={editDeliveryAddress}>
              <View style={styles.textTile}>
                <Text style={styles.text}>Địa chỉ nhận hàng</Text>
              </View>
              {addressDefault ? (
                <View style={styles.groupContent}>
                  <View style={styles.leftContent}>
                    <View style={styles.iconLocation}>
                      <IconEntypo
                        name="location-pin"
                        color={constants.COLOR.ORANGE}
                        size={20}
                      />
                    </View>
                    <View>
                      <View>
                        <Text style={styles.text1}>
                          {addressDefault.name} | {addressDefault.phone}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.text1}>
                          {addressDefault.houseNumber} Đường{' '}
                          {addressDefault.street}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.text1}>
                          Phường {addressDefault.ward}
                        </Text>

                        <Text style={styles.text1}>
                          Quận {addressDefault.district} Thành phố{' '}
                          {addressDefault.city}
                        </Text>
                      </View>
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
              ) : null}
            </TouchableOpacity>
          </View>

          <View style={styles.line}></View>
          <View style={styles.viewText1}>
            <Text style={styles.text}>
              Vui lòng chọn một trong các phương thức sau:
            </Text>
          </View>
          <ScrollView>
            <View style={styles.viewText}>
              {/* paypal */}
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
              {/* MoMo */}
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
              {/* Thanh toán trức tiếp */}
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
                      {showCancel === false && (
                        <Text
                          style={[styles.textTitle, styles.updateTitlePaypal]}>
                          Cancel
                        </Text>
                      )}
                    </TouchableOpacity>
                    <WebView
                      source={{uri: urlPaypalCheckout}}
                      onNavigationStateChange={onUrlStateChange}
                    />
                  </View>
                </SafeKeyComponent>
              </Modal>
            </View>
          </ScrollView>
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
        <View style={styles.modal}>
          <ModalNotify
            isShowModal={isModalVisible}
            message1={message}
            handleClick={handleClick}
          />
          {/* <CheckModal
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
            message={message}
          /> */}
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default Payment;
