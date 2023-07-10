/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {View, Text, Platform, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';

import Router from '../../../../../../navigation/Router';
import {onGallery} from '../../../../../../shared/utils/Camera';
import {androidCameraPermission} from '../../../../../../shared/utils/PermissionAndroid';
import styles from './StylesAddBanner';

import {constants} from '../../../../../../shared/constants';
import {LOG} from '../../../../../../../../logger.config';
import CheckModal from '../../../../../../shared/utils/CheckModal';
import {useAddBannerMutation} from '../../../../../../../redux/api/bannersApi';
import {Banner} from '../../../../../../../redux/api/types';
const log = LOG.extend('ADD_BANNER.JS ');

const AddBanner = ({navigation}) => {
  // Camera states
  const [avatar, setAvatar] = useState('');
  const [isPicked, setIsPicked] = useState(false);
  const [addBanner, {isLoading}] = useAddBannerMutation();
  console.log(
    '🚀 ~ file: AddBanner.tsx:28 ~ AddBanner ~ isLoading:',
    isLoading,
  );
  const openCamera = async () => {
    Platform.OS === 'ios'
      ? onGallery(setAvatar, setIsPicked)
      : acceptedPermission();
  };

  const acceptedPermission = async () => {
    const permission = await androidCameraPermission();

    if (permission) {
      onGallery(setAvatar, setIsPicked);
    }
  };

  // xử lý options FastImage
  const imageUrlOptions = {
    uri: avatar,
    priority: FastImage.priority.high,
    cache: FastImage.cacheControl.immutable,
  };

  const urlHardCode = require('../../../../../../../assets/AddImages.png');

  const moveToScreen = (nameScreen: string) => {
    navigation.navigate(nameScreen);
  };
  const goBack = () => {
    navigation.goBack();
  };

  const addBannerAndNavigate = async () => {
    const banner: Banner = {
      imageUrl: avatar,
    };
    await addBanner(banner).unwrap();
    goBack();
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>
              <TouchableOpacity onPress={goBack}>
                <IconIonicons
                  style={styles.imageReturn}
                  name="arrow-back"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => moveToScreen(Router.HOME_ADMIN)}>
                <View style={styles.viewLogo}>
                  <FastImage
                    style={styles.imageLogo}
                    source={require('../../../../../../../assets/iconLogo_CumTumDim.jpg')}
                  />
                  <Text style={styles.textTitle}>Cum tứm đim</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.divideLine} />

        <View style={styles.body}>
          <TouchableOpacity
            onPress={openCamera}
            className="justify-center items-center">
            <FastImage
              className="w-[300px] h-[200px]"
              source={avatar ? imageUrlOptions : urlHardCode}
              onLoadEnd={() => {
                FastImage.cacheControl.cacheOnly;
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text>{avatar}</Text>
            <TouchableOpacity onPress={() => addBannerAndNavigate()}>
              <View style={styles.viewButtonCreate}>
                <Text style={styles.btnCreate}>Thêm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* Xử lý camera */}
        <View style={styles.divideLine} />
        <CheckModal />
      </View>
    </SafeKeyComponent>
  );
};

export default AddBanner;
