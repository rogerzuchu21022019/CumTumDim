import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import styles from './StylesPayment';
import {constants} from '../../../../../shared/constants';
import FastImage from 'react-native-fast-image';
import IconOcticons from 'react-native-vector-icons/Octicons';
import Router from '../../../../../navigation/Router';
const Payment = ({navigation, route}) => {
  const {order} = route.params;
  const [checkedId, setCheckedId] = useState(null);
  console.log('🚀 ~ file: Payment.js:11 ~ Payment ~ order:', order);

  const handleCheck = id => {
    if (checkedId === id) {
      setCheckedId(null);
    } else {
      setCheckedId(id);
    }
  };

  const onPay = () => {
    if (checkedId === 1) {
      console.log('VNPAY', checkedId);
    }
    if (checkedId === 2) {
      console.log('VISA', checkedId);
    }
    if (checkedId === 3) {
      console.log('Zalo Pay', checkedId);
      navigation.navigate(Router.PAYMENT_PAID, {order});
    }
  };
  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header}>
            <View style={styles.mainHeader}>
              <View style={styles.leftHeader}>
                <Text style={styles.textTitle}>Thanh toán</Text>
              </View>
            </View>
            <View style={styles.divideLine}></View>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>Payment Method</Text>
          <Text style={styles.text1}>
            Please choose one of the following methods :
          </Text>

          <View style={styles.viewText}>
            {/* VN PAY */}
            <TouchableOpacity onPress={() => handleCheck(1)}>
              <View style={styles.viewVnPay}>
                <View style={styles.viewImage1}>
                  <FastImage
                    source={require('../../../../../../assets/VnPay.png')}
                    style={styles.checkmarkImage}
                  />
                </View>
                <View style={styles.viewTextPay}>
                  <Text style={styles.textVNPAY}>VN PAY</Text>
                </View>
                <View
                  style={[
                    styles.checkbox,
                    checkedId === 1 && styles.checkboxChecked,
                  ]}>
                  {checkedId === 1 && <Text style={styles.checkmark}></Text>}
                </View>
              </View>
            </TouchableOpacity>
            {/* Visa */}
            <TouchableOpacity onPress={() => handleCheck(2)}>
              <View style={styles.viewVisa}>
                <View style={styles.viewImage1}>
                  <FastImage
                    source={require('../../../../../../assets/VisaImages.png')}
                    style={styles.checkmarkImage}
                  />
                </View>
                <View style={styles.viewTextVisa}>
                  <Text style={styles.textVisa}>Visa</Text>
                </View>
                <View
                  style={[
                    styles.checkbox,
                    checkedId === 2 && styles.checkboxChecked,
                  ]}>
                  {checkedId === 1 && <Text style={styles.checkmark}></Text>}
                </View>
              </View>
            </TouchableOpacity>
            {/* ZALO PAY */}
            <TouchableOpacity onPress={() => handleCheck(3)}>
              <View style={styles.viewZaloPay}>
                <View style={styles.viewImage1}>
                  <FastImage
                    source={require('../../../../../../assets/ZaloPayImages.png')}
                    style={styles.checkmarkImage}
                  />
                </View>
                <View style={styles.viewTextZaloPay}>
                  <Text style={styles.textZaloPay}>ZALO PAY</Text>
                </View>
                <View
                  style={[
                    styles.checkbox,
                    checkedId === 3 && styles.checkboxChecked,
                  ]}>
                  {checkedId === 1 && <Text style={styles.checkmark}></Text>}
                </View>
              </View>
            </TouchableOpacity>
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
