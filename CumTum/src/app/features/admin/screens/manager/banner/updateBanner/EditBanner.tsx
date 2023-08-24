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
import styles from './StylesEditBanner';

import {constants} from '../../../../../../shared/constants';
import {LOG} from '../../../../../../../../logger.config';
import CheckModal from '../../../../../../shared/utils/CheckModal';
import {useUpdateBannerMutation} from '../../../../../../../redux/api/bannersApi';
import {Banner} from '../../../../../../../redux/api/types';
import {renderLoading} from '../../../../../../shared/utils/LoadingRender';
const log = LOG.extend('ADD_BANNER.JS ');

const UpdateBanner = ({navigation, route}: any) => {
  const {item} = route.params;
  const bannerItem: Banner = item;
  // Camera states
  const [avatar, setAvatar] = useState(bannerItem.imageUrl);
  const [isPicked, setIsPicked] = useState(false);
  const [updateBanner, {isLoading}] = useUpdateBannerMutation();
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

  const moveToScreen = (nameScreen: string) => {
    navigation.navigate(nameScreen);
  };
  const goBack = () => {
    navigation.goBack();
  };

  const updateBannerAndNavigate = async () => {
    const banner: Banner = {
      imageUrl: avatar,
      _id: bannerItem._id,
    };
    await updateBanner(banner).unwrap();
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
          <Text className="text-white">
            Click bên dưới để chọn ảnh từ thư viện
          </Text>
          <TouchableOpacity
            onPress={openCamera}
            className="justify-center items-center">
            <FastImage
              className="w-[300px] h-[200px]"
              source={{uri: avatar}}
              onLoadEnd={() => {
                FastImage.cacheControl.cacheOnly;
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </TouchableOpacity>
          <View style={styles.footer}>
            <TouchableOpacity onPress={() => updateBannerAndNavigate()}>
              <View style={styles.viewButtonCreate}>
                {isLoading ? (
                  renderLoading()
                ) : (
                  <Text style={styles.btnCreate}>Cập nhật</Text>
                )}
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

export default UpdateBanner;
