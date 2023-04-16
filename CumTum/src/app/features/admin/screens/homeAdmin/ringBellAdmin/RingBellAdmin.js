import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles.js';
import {FlashList} from '@shopify/flash-list';
import ListItem from './ListItem.js';
import {useDispatch, useSelector} from 'react-redux';
import {LOG} from '../../../../../../../logger.config.js';
import {authSelector, updateIsRead} from '../../../sliceAuth.js';
import Router from '../../../../../navigation/Router.js';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent.js';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {constants} from '../../../../../shared/constants.js';
import {fetchUpdateNotification, fetchUserById} from '../../../apiUser.js';
import socketServices from '../../../../../shared/utils/Socket.js';

const RingBellAdmin = ({navigation}) => {
  const moToBack = () => {
    navigation.navigate(Router.HOME_ADMIN);
  };
  const log = LOG.extend(`RING_BELL.JS`);

  const data = useSelector(authSelector);
  // log.info(
  //   '🚀 ~ file: RingBell.js:21 ~ RingBell ~ data:',
  //   data.user.notifications,
  // );

  const notifications = data.notifications;

  const userId = data.user._id;
  const dispatch = useDispatch();

  const onDisable = item => {
    const data = {
      userId: userId,
      notification: item,
    };
    dispatch(fetchUpdateNotification(data));
    // notifications.map(notification => {
    //   if (notification._id === item._id) {
    //     // console.log(
    //     //   '🚀 ~ file: RingBellAdmin.js:41 ~ onDisable ~ notification:',
    //     //   notification,
    //     // );
    //     // console.log('🚀 ~ file: RingBellAdmin.js:41 ~ onDisable ~ item:', item);
    //     if (notification.isRead != undefined) {
    //       notification.isRead = item.isRead;

    //     }
    //   }
    // });
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.groupHeader}>
            <View style={styles.viewIcon}>
            <TouchableOpacity onPress={moToBack}>

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
              size={18}/>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <FlashList
            data={notifications}
            estimatedItemSize={200}
            renderItem={({item, index}) => (
              <ListItem
                item={item}
                index={index}
                navigation={navigation}
                onDisable={onDisable}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default RingBellAdmin;
