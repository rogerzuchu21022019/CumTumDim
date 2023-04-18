import React from 'react';
import styles from './StyleModal';
import {constants} from '../../shared/constants';

import {Button, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import SafeKeyComponent from '../../components/safe_area/SafeKeyComponent';
import ButtonCus from '../button/ButtonCus';
import Router from '../../navigation/Router';

const ModalNotify = props => {
  const {
    message1,
    message2,
    message3,
    handleClick,
    isShowModal,
    isCancel,
    navigation,
    id,
    isAddress,
    item,
  } = props;

  const onHandleClick = () => {
    if (id) {
      handleClick(id);
      goBack();
    } else {
      handleClick();
      goBack();
    }
  };

  const onHandleAddress = () => {
    handleClick();
    navigation.navigate(Router.EDIT_DELIVERY_ADDRESS, {item});
  };

  const onHandleCancel = () => {
    handleClick();
  };

  const goBack = () => {
    if (navigation != undefined || navigation != null) {
      navigation.goBack();
    } else {
      return;
    }
  };

  return (
    <Modal
      isVisible={isShowModal}
      animationType="slide"
      transparent={true}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      backdropColor="null">
      <View style={styles.body}>
        <View>
          <Text style={styles.title}>Thông báo!</Text>
        </View>
        <View style={styles.boxMessage}>
          {message1 ? <Text style={styles.message}>{message1}</Text> : null}
          {message2 ? <Text style={styles.message}>{message2}</Text> : null}
          {message3 ? <Text style={styles.message}>{message3}</Text> : null}
        </View>

        <View style={styles.boxButton}>
          {isCancel ? (
            <ButtonCus
              styleBtn={styles.styleBtn}
              styleText={styles.styleText}
              title="Cancel"
              onHandleClick={onHandleCancel}
            />
          ) : null}
          {isAddress ? (
            <ButtonCus
              styleBtn={styles.styleBtn}
              styleText={styles.styleText}
              title="Đồng ý"
              onHandleClick={onHandleAddress}
            />
          ) : (
            <ButtonCus
              styleBtn={styles.styleBtn}
              styleText={styles.styleText}
              title="Đồng ý"
              onHandleClick={onHandleClick}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModalNotify;
