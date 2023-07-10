import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles.js';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent.js';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {constants} from '../../../../../shared/constants.js';
import Router from '../../../../../navigation/Router.js';
import {FlashList} from '@shopify/flash-list';
import ListItem from './ListItem.js';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector} from '../../../../admin/sliceAuth.js';
import {LOG} from '../../../../../../../logger.config.js';
import messaging from '@react-native-firebase/messaging';

import {
  fetchDeleteNotification,
  fetchUserById,
} from '../../../../admin/apiUser.js';
import {FlatList} from 'react-native-gesture-handler';
const RingBell = ({navigation}) => {
  const dispatch = useDispatch();
  const authSelect = useSelector(authSelector);
  const [isRefresh, setIsRefresh] = useState(false);
  const [indexSelected, setIndexSelected] = useState(0);
  const user = authSelect.user;
  const [listNotification, setListNotification] = useState(user.notifications);
  const moveToBack = () => {
    navigation.navigate(Router.HOME_CUSTOMER);
  };
  const log = LOG.extend(`RING_BELL.JS`);

  const handleSwipeableOpen = index => {
    console.log(
      '🚀 ~ file: RingBell.js:39 ~ handleSwipeableOpen ~ index:',
      index,
    );
    setIndexSelected(index);
  };
  const data = useSelector(authSelector);
  useEffect(() => {
    dispatch(fetchUserById(user._id));
  }, [messaging, user.notifications.length]);

  const handleRemove = async item => {
    console.log('remove', item);
    if (listNotification.length === 0) {
      return;
    }
    const data = {
      userId: user._id,
      notificationId: item._id,
    };
    dispatch(fetchDeleteNotification(data));
    const newList = listNotification.filter(
      itemData => itemData._id !== item._id,
    );
    setListNotification(newList);
    await dispatch(fetchUserById(user._id));
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.groupHeader}>
            <View style={styles.viewIcon}>
              <TouchableOpacity onPress={moveToBack}>
                <IconAntDesign
                  name="left"
                  color={constants.COLOR.WHITE}
                  size={18}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.profile}>
              <Text style={styles.textProfile}>Thông báo</Text>
            </View>
            <View style={styles.viewIcon}>
              <IconAntDesign
                name="delete"
                color={constants.COLOR.WHITE}
                size={18}
              />
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={listNotification}
            renderItem={({item, index}) => (
              <ListItem
                item={item}
                index={index}
                handleRemove={() => handleRemove(item)}
                handleSwipeableOpen={() => handleSwipeableOpen(index)}
                indexSelected={indexSelected}
                navigation={navigation}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            refreshControl={
              <RefreshControl
                refreshing={isRefresh}
                onRefresh={() => {
                  dispatch(fetchUserById(user._id));
                }}
                title="Cập nhật..."
                titleColor={constants.COLOR.RED}
                tintColor={constants.COLOR.RED}
              />
            }
          />
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default RingBell;
