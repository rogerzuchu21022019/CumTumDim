import React, {useState} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import SafeKeyComponent from '../../components/safe_area/SafeKeyComponent';
import {constants} from '../constants';

const CheckModal = props => {
  const {isModalVisible, setModalVisible, message, isCancel} = props;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
  
        <Modal
          isVisible={isModalVisible}
          animationType="slide"
          transparent={true}
          animationIn={'slideInUp'}
          animationOut={'slideOutDown'}
          backdropColor="null">
          <View style={styles.body}>
            <View>
              <Text style={styles.title}>Thông báo!</Text>
            </View>
            <View style={styles.modal}>
              <Text style={styles.content}>{message}</Text>
            </View>

            {isCancel ? (
              <TouchableOpacity onPress={toggleModal}>
                <View style={styles.btn}>
                  <Text style={styles.textBTN}>Cancel</Text>
                </View>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity onPress={toggleModal}>
              <View style={styles.btn}>
                <Text style={styles.textBTN}>Xác nhận</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
  );
};

export default CheckModal;

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  body: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 15,
    paddingTop:20,
    paddingBottom:20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    paddingBottom:5,
  },
  content: {
    fontSize: 16,
    color: 'black',
    paddingBottom:10
  },
  btn: {
    backgroundColor: constants.COLOR.ORANGE,
    width: 100,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBTN: {
    color: constants.COLOR.WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
  modal: {
  },
});
