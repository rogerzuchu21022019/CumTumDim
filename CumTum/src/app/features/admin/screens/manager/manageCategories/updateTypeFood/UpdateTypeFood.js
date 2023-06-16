import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './Styles';
import FastImage from 'react-native-fast-image';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {constants} from '../../../../../../shared/constants';
import Router from '../../../../../../navigation/Router';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import BoxInputCus from '../../../../../../components/input/BoxInput';
import ButtonCus from '../../../../../../components/button/ButtonCus';
import ModalNotify from '../../../../../../components/modal/ModalNotify';
import {useDispatch} from 'react-redux';
import {
  fetchCategories,
  fetchUpdateCategory,
} from '../../../../../product/apiProduct';

const UpdateTypeFood = ({navigation, route}) => {
  const {item} = route.params;

  const dispatch = useDispatch();

  const [name, setName] = useState(item.name);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  const nameRef = useRef(item.name);

  const handleChangeName = text => {
    setName(text)
    nameRef.current = text;
  };

  const messageEmpty1 = `Vui lòng không để trống thông tin loại món ăn`;
  const messageEmpty2 = `Nếu bạn không muốn thay đổi thì chọn Cancel`;
  const messageSuccess = `Đã thay đổi tên loại món ăn thành công`;

  const goBack = () => {
    navigation.goBack();
  };

  const moveToScreen = name => {
    navigation.navigate(name);
  };

  const handleSuccess = () => {
    setIsSuccess(!isSuccess);
    dispatch(fetchCategories());
  };

  const handleSave = () => {
    const newName = nameRef.current
    console.log("🚀 ~ file: UpdateTypeFood.js:61 ~ handleSave ~ newName:", newName)

    if (newName === item.name) {
      return;
    }

    if (newName === '' || newName === undefined) {
      handleClick();
      return;
    } else {
      dispatch(fetchUpdateCategory(data));
      handleSuccess();
    }
  };

  const handleClick = () => {
    setIsShowModal(!isShowModal);
    setIsCancel(!isCancel);
  };

  const data = {
    name: name,
    categoryId: item._id,
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
              {/* Code back to HomeScreen */}
              <TouchableOpacity onPress={() => moveToScreen(Router.HOME_ADMIN)}>
                <View style={styles.viewLogo}>
                  <FastImage
                    style={styles.imageLogo}
                    source={require('../../../../../../../assets/Logo_CumTumDim.png')}
                  />
                  <Text style={styles.textTitle}>Cum tứm đim</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.viewFinal}>
            <BoxInputCus
              title="Sửa tên loại món ăn"
              value={name}
              onChangeText={handleChangeName}
            />
          </View>

          <ButtonCus onHandleClick={handleSave} title="Lưu" />
          <ModalNotify
            message1={messageEmpty1}
            message2={messageEmpty2}
            handleClick={handleClick}
            isShowModal={isShowModal}
            isCancel={isCancel}
            navigation={navigation}
          />

          <ModalNotify
            message1={messageSuccess}
            handleClick={handleSuccess}
            isShowModal={isSuccess}
            navigation={navigation}
          />
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default UpdateTypeFood;
