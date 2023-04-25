import React from 'react';
import styles from './StyleModal';
import {constants} from '../../shared/constants';

import {Button, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import ButtonCus from '../button/ButtonCus';
import Router from '../../navigation/Router';
import UploadImage from '../../features/customer/screens/profiles/uploadImage/UploadImage';

const ModalPickImage = props => {
  const {
    isShowModal,
    navigation,
    isAvatar,
    handleGallery,
    handleCamera,
    handleShowPickImage,
  } = props;

  const onHandleGallery = () => {
    handleGallery();
  };

  const onHandleCamera = () => {
    handleCamera();
  };

  return (
    <Modal
      style={{
        margin: 0,
      }}
      isVisible={isShowModal}
      animationType="slide"
      transparent={true}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      backdropColor="null">
      
      <UploadImage
        onHandleGallery={onHandleGallery}
        onHandleCamera={onHandleCamera}
        avatar={isAvatar}
        navigation={navigation}
        handleShowPickImage={handleShowPickImage}
      />
    </Modal>
  );
};

export default ModalPickImage;
