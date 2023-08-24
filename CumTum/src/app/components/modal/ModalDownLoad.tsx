import React from 'react';
import {constants} from '../../shared/constants';

import {ActivityIndicator, View} from 'react-native';
import Modal from 'react-native-modal';
import {PropsModalProgress} from '../types';
import {Text} from 'react-native-svg';

const ModalDownLoad = (props: PropsModalProgress) => {
  const {isShowProgress, isLoading} = props;
  return (
    <Modal
      isVisible={isShowProgress}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      backdropColor="grey">
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={constants.COLOR.WHITE}
          animating={isLoading}
        />
      ) : null}
      <View className="bg-red-600">
        <Text>Install...</Text>
      </View>
    </Modal>
  );
};

export default ModalDownLoad;
