import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './StylesUploadImage';
import FastImage from 'react-native-fast-image';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Router from '../../../../../navigation/Router';
import {constants} from '../../../../../shared/constants';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import {androidCameraPermission} from '../../../../../shared/utils/PermissionAndroid';

const UploadImage = props => {
  const {
    navigation,
    onHandleCamera,
    onHandleGallery,
    avatar,
    handleShowPickImage,
  } = props;
  const acceptedPermission = async () => {
    await androidCameraPermission();
  };


  useEffect(() => {
    Platform.OS == 'ios' ? null : acceptedPermission();

    return () => {};
  }, []);

  const imageUrlOptions = {
    uri: avatar,
    priority: FastImage.priority.high,
    cache: FastImage.cacheControl.immutable,
  };
  const urlHardCode = require('../../../../../../assets/logo.png');

  const openGallery = () => {
    onHandleGallery();
  };
  const openCamera = () => {
    onHandleCamera();
  };
  const goBack = () => {
    handleShowPickImage();
  };
  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.groupHeader}>
            <TouchableOpacity onPress={goBack}>
              <View>
                <IconAntDesign
                  name="left"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.profile}>
              <Text style={styles.textProfile}>Chỉnh Sửa ảnh</Text>
            </View>
            <View style={styles.groupHeader}></View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.viewImage}>
            <FastImage
              style={styles.itemImage}
              source={avatar ? imageUrlOptions : urlHardCode}
            />
          </View>

          <View style={styles.boxChooseImage}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => openGallery()}>
                <View style={styles.viewInput}>
                  <Text style={styles.textInput}>Chọn ảnh từ thư viện</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => openCamera()}>
                <View style={styles.viewInput}>
                  <Text style={styles.textInput}>Chụp ảnh mới</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default UploadImage;
