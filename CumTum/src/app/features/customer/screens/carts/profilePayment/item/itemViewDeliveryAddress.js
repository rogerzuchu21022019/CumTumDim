import {Text, TouchableOpacity, View} from 'react-native';
import {formatTime} from '../../../../../../shared/utils/Moment';
import styles from './stylesItemChooseDeliveryAddress';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import Router from '../../../../../../navigation/Router';
import React, {useState} from 'react';
import {LOG} from '../../../../../../../../logger.config';
import {constants} from '../../../../../../shared/constants';
const log = LOG.extend(`ITEM_VIEW_DETAIL_DELIVERY_ADDRESS.JS`);
import IconIonicons from 'react-native-vector-icons/Ionicons';
import ButtonCus from '../../../../../../components/button/ButtonCus';

const ItemViewPayment = ({
  item,
  navigation,
  index,
  handleCheckedItem,
  checkedItem,
}) => {

  const EditDeliveryAddrees = () => {
    navigation.navigate(Router.EDIT_DELIVERY_ADDRESS, {item});
  };

  const [isShowVisible, setIsShowVisible] = useState(false);
  const handleCheckedId = () => {
    setIsShowVisible(!isShowVisible);
    handleCheckedItem();
  };

  const handleSetDefaultIndex = () => {
    handleCheckedItem();
    log.info(
      '🚀 ~ file: itemViewDeliveryAddress.js:38 ~ handleSetDefaultIndex ~ item:',
      item,
    );
    // call api for update
    navigation.goBack();
  };

  return (
    <SafeKeyComponent>
      <TouchableOpacity onPress={handleCheckedId}>
        <View style={styles.itemContainer}>
          <View style={styles.boxView}>
            <View style={styles.viewCheck}>
              {checkedItem === index ? (
                <View style={[styles.checkboxChecked, styles.checkbox]}></View>
              ) : (
                <View style={styles.checkbox}></View>
              )}
            </View>

            <View style={styles.viewProfile}>
              <View style={styles.viewProfile1}>
                <View>
                  <Text style={styles.textItem1}>
                    {item.name} | {item.phone}
                  </Text>
                </View>
                <Text style={styles.textItem2}> </Text>
                <View style={styles.viewButton}>
                  <TouchableOpacity onPress={EditDeliveryAddrees}>
                    <Text style={styles.textItem3}>Sửa</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.viewProfile2}>
                <View style={styles.box}>
                  <Text style={styles.textItem}>{item.houseNumber}</Text>
                  <Text style={styles.textItem}> | Đường {item.street}</Text>
                </View>
                <View>
                  <Text style={styles.textItem}>Phường {item.ward}</Text>
                </View>
                <View style={styles.box}>
                  <Text style={styles.textItem}>Thành Phố {item.city}</Text>
                  <Text style={styles.textItem}>  | Quận {item.district}</Text>
                </View>

                {item.addressDefault ? (
                  <View style={styles.viewDefault}>
                    <Text style={styles.btnDefault}>Mặc định</Text>
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </SafeKeyComponent>
  );
};

export default ItemViewPayment;
