import {
  View,
  Text,
  FlatList,
  RefreshControl,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './StylesHistory';
import FastImage from 'react-native-fast-image';
import {constants} from '../../../../../shared/constants';
import {useDispatch, useSelector} from 'react-redux';
import {cartSelector} from '../../../../carts/sliceOrder';
import {FlashList} from '@shopify/flash-list';
import ItemView from './item/ItemView';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
// import HistoryNoItems from './historynoitems/HistoryNoItems';
import {authSelector} from '../../../../admin/sliceAuth';
import socketServices from '../../../../../shared/utils/Socket';
import {LOG} from '../../../../../../../logger.config';
import {fetchUserById} from '../../../../admin/apiAdmin';
const log = LOG.extend(`HISTORY.JS`);
const History = ({navigation}) => {
  // const data = useSelector(cartSelector);
  const user = useSelector(authSelector);
  const [isRefresh, setIsRefresh] = useState(false);
  const dispatch = useDispatch();
  let orderHistory = user.user.orders;

  useEffect(() => {
    socketServices.on(constants.SOCKET.FIND_ORDER_BY_USER_ID, userId => {
      log.info('🚀 ~ file: History.js:17 ~ History ~ user:', userId);
      dispatch(fetchUserById(userId));
    });
    return () => {
      socketServices.socket.disconnect();
    };
  }, []);

  return (
    <SafeKeyComponent>
      <TouchableNativeFeedback>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Lịch sử </Text>
          </View>
          <View style={styles.divideLine}></View>
          <View style={styles.body}>
            <View style={styles.viewFlashList}>
              <FlashList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={orderHistory}
                estimatedItemSize={200}
                renderItem={({item, index}) => {
                  return (
                    <ItemView
                      item={item}
                      index={index}
                      navigation={navigation}
                    />
                  );
                }}
                keyExtractor={(item, index) => item._id.toString()}
                refreshControl={
                  <RefreshControl
                    refreshing={isRefresh}
                    onRefresh={() => {
                      dispatch(fetchUserById(user.user._id));
                    }}
                    title="Pull to refresh..."
                    titleColor={constants.COLOR.RED}
                    tintColor={constants.COLOR.RED}
                  />
                }
              />
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </SafeKeyComponent>
  );
};

export default History;
