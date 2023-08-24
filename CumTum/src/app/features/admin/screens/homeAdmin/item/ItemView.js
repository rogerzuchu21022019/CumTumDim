import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {LOG} from '../../../../../../../logger.config';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import Router from '../../../../../navigation/Router';
import styles from './StyleItemView';
import {useEffect} from 'react';
import { convertMoney, formatCodeOrder } from '../../../../../shared/utils/CreateCodeOrder';
const log = LOG.extend(`ITEM_VIEW.JS`);
const ItemView = ({item, index, navigation}) => {
  //   log.info('🚀 ~ file: ItemView.js:9 ~ ItemView ~ item:', item);
  const moveToDetail = () => {
    navigation.navigate(Router.DETAIL_CART_ADMIN, {item});
  };


  return (
    <SafeKeyComponent>
      <TouchableOpacity onPress={moveToDetail}>
        <View style={styles.container}>
          <View style={styles.header}></View>
          <View style={styles.body}>
            <View style={styles.boxItem}>
              <View style={styles.itemOrder}>
                <Text style={styles.itemText}>Mã Đơn hàng <Text className='text-blue-500'>{formatCodeOrder(item._id)}</Text></Text>
                <Text style={styles.itemText}>||</Text>
                <Text style={styles.itemText}>{convertMoney(item.moneyToPaid)}</Text>
              </View>
              <View style={styles.boxStatus}>
                <View style={styles.status1}>
                  <Text style={styles.itemText}>Trạng thái </Text>
                </View>
                <View style={styles.status2}>
                  {/* <Text style={styles.itemText}>{item.orderStatus}</Text> */}
                </View>
                <View style={styles.status3}>
                  <Text
                    style={
                      item.orderStatus
                        ? item.orderStatus === 'Đang chờ'
                          ? styles.itemText
                          : styles.statusItemText
                        : null
                      // <=> item.orderStatus === 'Đã thanh toán' ? styles.statusItemText : styles.itemText
                    }>
                    {item.orderStatus}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.footer}></View>
        </View>
      </TouchableOpacity>
    </SafeKeyComponent>
  );
};

export default ItemView;
