import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSignOut, fetchUserById} from '../../../../admin/apiUser';
import Router from '../../../../../navigation/Router';
import styles from './StylesProfile';
import FastImage from 'react-native-fast-image';
import socketServices from '../../../../../shared/utils/Socket';
import {authSelector} from '../../../../admin/sliceAuth';
import {LOG} from '../../../../../../../logger.config';
const log = LOG.extend(`PROFILE.JS`);
const Profile = ({navigation}) => {
  const dispatch = useDispatch();

  const authSelect = useSelector(authSelector);
  const user = authSelect.user;
  const userId = user._id;
  const addresses = authSelect.user.addresses?.filter(
    item => item.addressDefault === true,
  );
  let address = {};
  let houseNumber = '';
  let hem = '';
  if (addresses[0]) {
    address = addresses[0];
    const arrHouseNumber = address.houseNumber.split(`/`);
    houseNumber = arrHouseNumber[0];
    hem = arrHouseNumber[1];
  } else {
    address = null;
  }

  useEffect(() => {
    dispatch(fetchUserById(userId));

    return () => {};
  }, []);

  const handleLogout = async () => {
    dispatch(fetchSignOut());
    socketServices.socket.disconnect();
    // moveTo();
  };
  const moveTo = async () => {
    navigation.navigate(Router.LOGIN);
  };
  const moveToEdit = async () => {
    if (address) {
      navigation.navigate(Router.EDIT_PROFILE, {item: address});
    } else {
      navigation.navigate(Router.ADD_DELIVERY_ADDRESS);
    }
  };

  // xử lý optionsFastImage
  const imageUrlOptions = {
    uri: user.imageUrl,
    priority: FastImage.priority.high,
    cache: FastImage.cacheControl.immutable,
  };

  const urlHardCode = require('../../../../../../assets/Logo_CumTumDim.png');

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profile}>
            <Text style={styles.textProfile}>Hồ sơ</Text>
          </View>
          <View style={styles.groupHeader}>
            <TouchableOpacity onPress={moveToEdit}>
              <View>
                <FastImage
                  style={styles.iconHeader}
                  source={require('../../../../../../assets/iconEdit.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <View>
                <FastImage
                  style={styles.iconHeader}
                  source={require('../../../../../../assets/iconSignOut.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.viewFinal}>
            <View style={styles.viewImage}>
              <FastImage
                style={styles.imageProfile}
                source={user.imageUrl ? imageUrlOptions : urlHardCode}
              />
            </View>
            <View style={styles.viewTextName}>
              <Text style={styles.textProfile}>
                {address ? address.name : user.name}
              </Text>
            </View>
          </View>

          <View style={styles.groupAll}>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Số điện thoại</Text>
              </View>
              <View style={styles.viewInput}>
                <Text style={styles.textInput}>
                  {address ? address.phone : null}
                </Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Phường</Text>
              </View>
              <View style={styles.viewInput}>
                <Text style={styles.textInput}>
                  {address ? address.ward : null}
                </Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Đường</Text>
              </View>
              <View style={styles.viewInput}>
                <Text style={styles.textInput}>
                  {address ? address.street : null}
                </Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Số nhà</Text>
              </View>
              <View style={styles.viewInput}>
                <Text style={styles.textInput}>
                  {address ? address.houseNumber.split(`/`) : null}
                </Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Hẻm</Text>
              </View>
              <View style={styles.viewInput}>
                <Text style={styles.textInput}>{address ? hem : null}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default Profile;
