import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles.js';
import {FlashList} from '@shopify/flash-list';
import ListItem from './ListItem.js';
import {useDispatch, useSelector} from 'react-redux';
import {LOG} from '../../../../../../../logger.config.js';
import {authSelector} from '../../../sliceAuth.js';
import Router from '../../../../../navigation/Router.js';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent.js';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {constants} from '../../../../../shared/constants.js';
import {fetchUserById} from '../../../apiUser.js';
import socketServices from '../../../../../shared/utils/Socket.js';

const RingBellAdmin = ({navigation}) => {
  const moToBack = () => {
    navigation.navigate(Router.HOME_ADMIN);
  };
  const log = LOG.extend(`RING_BELL.JS`);

  const data = useSelector(authSelector);
  log.info(
    '🚀 ~ file: RingBell.js:21 ~ RingBell ~ data:',
    data.user.notifications,
  );


  const notifications = data.user.notifications;
  const userId = data.user._id;
  const dispatch = useDispatch();

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
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.profile}>
              <Text style={styles.textProfile}>Sữa hồ sơ</Text>
            </View>
            <View style={styles.viewIcon}>
              <IconAntDesign
                name="delete"
                color={constants.COLOR.WHITE}
                size={20}
              />
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
