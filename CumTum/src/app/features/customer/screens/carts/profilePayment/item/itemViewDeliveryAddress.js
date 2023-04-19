import {Text, TouchableOpacity, View} from 'react-native';
import {formatTime} from '../../../../../../shared/utils/Moment';
import styles from './stylesDeliveryAddress';
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
  log.error('🚀 ~ file: ItemView.js:11 ~ ItemView ~ item:', item);

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

            <View style={styles.boxStatus}>
              <View style={styles.boxStatus1}>
                <Text style={styles.textItem1}>{item.name}</Text>
                <Text style={styles.textItem3}>| </Text>
                <Text style={styles.textItem2}>{item.phone} </Text>
                <View style={styles.viewbtn}>
                  <TouchableOpacity onPress={EditDeliveryAddrees}>
                    <Text style={styles.textItem3}>Sửa</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.boxStatus2}>
                <View style={styles.boxPrice}>
                  <Text numberOfLines={2} style={styles.textItem}>
                    Số {item.houseNumber}
                  </Text>
                  <Text numberOfLines={2} style={styles.textItem}>
                    Đường {item.street}
                  </Text>
                  <Text numberOfLines={2} style={styles.textItem}>
                    Phường {item.ward}
                  </Text>
                </View>

                <View style={styles.boxPrice2}>
                  <Text numberOfLines={2} style={styles.textItem}>
                    thành phố {item.city}
                  </Text>
                  <Text numberOfLines={2} style={styles.textItem}>
                    {' '}
                    huyện {item.district}
                  </Text>
                </View>
             

                {item.addressDefault
                  ? (
                    <View style={styles.viewDefault}>
                      <Text style={styles.btnDefault}>Mặc định</Text>
                    </View>
                  )
                  : null}
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </SafeKeyComponent>
  );
};

export default ItemViewPayment;
