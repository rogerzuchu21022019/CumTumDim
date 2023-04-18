import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './StyleUpdateDish';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import FastImage from 'react-native-fast-image';
import Router from '../../../../../../navigation/Router';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {constants} from '../../../../../../shared/constants';
import {androidCameraPermission} from '../../../../../../shared/utils/PermissionAndroid';
import {onCamera, onGallery} from '../../../../../../shared/utils/Camera';
import ButtonCus from '../../../../../../components/button/ButtonCus';
import BoxInputCus from '../../../../../../components/input/BoxInput';
import {useDispatch} from 'react-redux';
import {
  fetchDishes,
  fetchUpdateDish,
  fetchUploadImage,
} from '../../../../../product/apiProduct';

const UpdateDish = ({navigation, route}) => {
  const {item} = route.params;

  const [avatar, setAvatar] = useState('');
  const [isPicked, setIsPicked] = useState(false);
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const nameRef = useRef(item.name);
  const priceRef = useRef(item.price);
  const dispatch = useDispatch();
  const handleNameChange = text => {
    setName(text);
    nameRef.current = text;
  };

  const handlePriceChange = text => {
    setPrice(text);
    priceRef.current = text;
  };

  const handleSave = async () => {
    const newName = nameRef.current;
    const newPrice = priceRef.current;

    const res = await dispatch(fetchUploadImage(avatar));
    const imageUrl = res.payload.data;
    const dish = {
      name: newName,
      price: newPrice,
      imageUrl: imageUrl,
    };

    const data = {
      dishId: item._id,
      dish: dish,
    };
    dispatch(fetchUpdateDish(data));
    navigation.navigate(Router.MANAGE_FOOD);
  };

  const moveToScreen = name => {
    navigation.navigate(name);
  };

  const goBack = () => {
    navigation.goBack();
  };

  /* Xử lý camera , show alert, permission */
  const onCancel = async () => {
    Alert.alert('Cancel');
  };

  const openCamera = async () => {
    Platform.OS == 'ios' ? showAlert() : acceptedPermission();
  };

  const acceptedPermission = async () => {
    const permission = await androidCameraPermission();

    if (permission) {
      showAlert();
    }
  };

  const showAlert = () => {
    const optionTitle = 'Choose an option';
    const optionPhoto = 'Take a photo';
    const optionGallery = 'Choose an option';
    const optionCancel = 'Cancel';
    Alert.alert(optionTitle, '', [
      {text: optionPhoto, onPress: () => onCamera(setAvatar, setIsPicked)},
      {
        text: optionGallery,
        onPress: () => onGallery(setAvatar, setIsPicked),
      },
      {text: optionCancel, onPress: onCancel},
    ]);
  };

  console.log('item', item);
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
          <View style={styles.groupFinalBody}>
            <View style={styles.viewImage}>
              <TouchableOpacity onPress={openCamera}>
                <FastImage
                  style={styles.itemImage}
                  source={{
                    uri: avatar ? avatar : item.imageUrl,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.groupItem}>
              <BoxInputCus
                value={name}
                icon={null}
                title="Tên món ăn"
                onChangeText={handleNameChange}
              />
              <BoxInputCus
                value={`${price}`}
                icon={null}
                title="Giá (K)"
                onChangeText={handlePriceChange}
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <ButtonCus onHandleClick={handleSave} title="Lưu" />
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default UpdateDish;
