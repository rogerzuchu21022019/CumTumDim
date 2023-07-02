/* eslint-disable react/react-in-jsx-scope */
import {Text, TouchableOpacity, View} from 'react-native';
import {formatTime} from '../../../../../../shared/utils/Moment';
import styles from './StyleItem';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import Router from '../../../../../../navigation/Router';

const ItemView = ({item, navigation, index}) => {
  console.log('🚀 ~ file: ItemView.js:9 ~ ItemView ~ item:', item);
  const moveToDetailHistory = () => {
    navigation.navigate(Router.PAYMENT_ZALO, {item});
  };
  return (
    <SafeKeyComponent>
      <TouchableOpacity onPress={moveToDetailHistory}>
        <View style={styles.itemContainer}>
          <View style={styles.viewImage}>
            <Text style={styles.textItem}>{index + 1} </Text>
          </View>
          <View style={styles.boxView}>
            <View style={styles.boxStatus}>
              {item.orderStatus === 'Đang chờ' ? (
                <Text
                  style={
                    item.orderStatus === 'Đang chờ'
                      ? styles.textItem
                      : styles.textItemPaid
                  }>
                  Đơn hàng đang chờ xác nhận
                </Text>
              ) : (
                <Text
                  style={
                    item.orderStatus === 'Đang chờ'
                      ? styles.textItem
                      : styles.textItemPaid
                  }>
                  Đơn hàng {item.paymentStatus}
                </Text>
              )}
              <Text style={styles.textItem}>{item.totalAmount} Món</Text>
            </View>

            <View style={styles.boxPrice}>
              <Text style={styles.textItem}>
                Ngày mua: {formatTime(item.createdAt)}
              </Text>
              <Text style={styles.textItem}>{item.time}</Text>
              <Text style={styles.textItem}>{item.moneyToPaid}K </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </SafeKeyComponent>
  );
};

export default ItemView;
