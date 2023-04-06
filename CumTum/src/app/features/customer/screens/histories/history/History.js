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
import {useSelector} from 'react-redux';
import {cartSelector} from '../../../../carts/sliceOrder';
import {FlashList} from '@shopify/flash-list';
import ItemView from './item/ItemView';

import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
// import HistoryNoItems from './historynoitems/HistoryNoItems';
import {authSelector} from '../../../../admin/sliceAuth';
const History = navigation => {
  // const data = useSelector(cartSelector);
  const user = useSelector(authSelector);
  console.log('🚀 ~ file: History.js:17 ~ History ~ user:', user);
  const [isRefresh, setIsRefresh] = useState(false);

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
                data={user.user.orders}
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
                      // dispatch(fetchOrders());
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
