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
const Profile = ({navigation}) => {
  const dispatch = useDispatch();

  const authSelect = useSelector(authSelector);
  const user = authSelect.user;
  console.log('🚀 ~ file: Profile.js:16 ~ Profile ~ user:', user);
  const userId = user._id;
  const addresses = authSelect.user.addresses.filter(
    item => item.addressDefault === true,
  );
  const address = addresses[0];

  useEffect(() => {
    dispatch(fetchUserById(userId));

    return () => {};
  }, []);

  const handleLogout = async () => {
    dispatch(fetchSignOut());
    moveTo();
  };
  const moveTo = async () => {
    navigation.navigate(Router.LOGIN);
    socketServices.socket.disconnect();
  };
  const moveToEdit = async () => {
    navigation.navigate(Router.EDIT_PROFILE, {item: address});
    console.log('🚀 ~ file: Profile.js:38 ~ moveToEdit ~ address:', address);
  };

  // xử lý options FastImage
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
                  {address ? address.houseNumber : null}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default Profile;
