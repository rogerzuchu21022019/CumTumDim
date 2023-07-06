import {Modal} from 'react-native';
import React from 'react';
import {PropsModalSearch} from '../types';
import Search from '../../screens/customer/search/Search';

const ModalSearch = (props: PropsModalSearch) => {
  const {isVisible, onCancel, navigation, onDone} = props;
  return (
    <Modal visible={isVisible}>
      <Search
        isVisible={isVisible}
        navigation={navigation}
        onCancel={onCancel}
        onDone={onDone}
      />
    </Modal>
  );
};

export default ModalSearch;
