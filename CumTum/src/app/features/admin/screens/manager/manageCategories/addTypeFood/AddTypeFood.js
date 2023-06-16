import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './Styles';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import {constants} from '../../../../../../shared/constants';
import Router from '../../../../../../navigation/Router';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import {useDispatch} from 'react-redux';
import {fetchAddCategory} from '../../../../../product/apiProduct';
import BoxInputCus from '../../../../../../components/input/BoxInput';
import ButtonCus from '../../../../../../components/button/ButtonCus';
import ModalNotify from '../../../../../../components/modal/ModalNotify';

const AddTypeFood = ({navigation}) => {
  const nameRef = useRef('');

  const dispatch = useDispatch();
  const goBack = () => {
    navigation.goBack();
  };

  const [isShowModal, setIsShowModal] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const moveToScreen = nameScreen => {
    navigation.navigate(nameScreen);
  };

  const messageEmpty = `Vui lòng không để trống thông tin loại món ăn`;
  const messageSuccess = `Thêm danh mục món ăn thành công`;
  const handleClick = () => {
    setIsShowModal(!isShowModal);
  };

  const handleSuccess = () => {
    setIsSuccess(!isSuccess);
  };
  const handleAdd = () => {
    const currentName = nameRef.current;
    if (currentName === '') {
      handleClick();
    } else {
      dispatch(fetchAddCategory(currentName));
      handleSuccess();
    }
  };

  const handleNameChange = text => {
    nameRef.current = text;
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>
              <TouchableOpacity onPress={goBack}>
                <View style={styles.imageBack}>
                  <IconIonicons
                    style={styles.imageReturn}
                    name="arrow-back"
                    color={constants.COLOR.WHITE}
                    size={20}
                  />
                </View>
              </TouchableOpacity>
              {/* Code back to HomeScreen */}
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
            {/* <View style={styles.rightHeader}>
                <IconOcticons
                    name="bell-fill"
                    color={constants.COLOR.RED}
                    size={20}
                />
                </View> */}
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.imageCartToonTop}>
            <Image
              style={styles.imageCartToonHead}
              source={require('../../../../../../../assets/cartToon.png')}
            />
          </View>
          <View style={styles.viewTextInput}>
            <BoxInputCus
              placeholder="Nhập loại món ăn"
              title="Tên loại món ăn"
              onChangeText={handleNameChange}
              // value={name}
            />
          </View>
          <TouchableOpacity onPress={handleAdd}>
            <ButtonCus onHandleClick={handleAdd} title="Thêm" />
            <ModalNotify
              message1={messageEmpty}
              handleClick={handleClick}
              isShowModal={isShowModal}
            />

            <ModalNotify
              message1={messageSuccess}
              handleClick={handleSuccess}
              isShowModal={isSuccess}
              navigation={navigation}
            />
          </TouchableOpacity>
          <View style={styles.cartToon}>
            <Image
              style={styles.imageCartToon}
              source={require('../../../../../../../assets/cartToon2.png')}
            />
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default AddTypeFood;
