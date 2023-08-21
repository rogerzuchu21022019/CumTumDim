import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableNativeFeedback,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import styles from './StylesEditProfile';
import FastImage from 'react-native-fast-image';
import Router from '../../../../../navigation/Router';
import {constants} from '../../../../../shared/constants';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import BoxInputCus from '../../../../../components/input/BoxInput';
import DropdownElement from '../../../../../components/dropdownElement/DropdownElement';
import {LIST_STREET, WARDS} from '../../../../../shared/utils/DataAddress';
import ButtonCus from '../../../../../components/button/ButtonCus';
import ModalNotify from '../../../../../components/modal/ModalNotify';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector} from '../../../../admin/sliceAuth';
import {LOG} from '../../../../../../../logger.config';
import {onCamera, onGallery} from '../../../../../shared/utils/Camera';
import ModalPickImage from '../../../../../components/modalPickImage/ModalPickImage';
import {fetchUploadImage} from '../../../../product/apiProduct';
import {fetchUpdateUserInfo} from '../../../../admin/apiUser';
const log = LOG.extend(`EDIT_PROFILE.JS`);

const EditProfile = ({navigation, route}) => {
  const {item} = route.params;

  const authSelect = useSelector(authSelector);
  const {isLoading} = authSelect.isLoading;
  
  const user = authSelect.user;
  const userId = authSelect.user._id;
  const dispatch = useDispatch();

  const messageCommon = 'Bạn vui lòng điền đầy đủ thông tin';
  const messagePhone = 'Bạn vui lòng nhập đúng số điện thoại';
  const messageName = 'Tên không được chứa kí tự đặc biệt hoặc số';

  /* Regular Expression */
  const namePattern = /^[a-zA-Z\s]+$/;

  /* States user info*/
  const [name, setName] = useState(item.name);
  const [isName, setIsName] = useState(true);
  const [phone, setPhone] = useState(item.phone);
  const [isPhone, setIsPhone] = useState(true);
  const [ward, setWard] = useState(item.ward);
  const [district, setDistrict] = useState('12');
  const [city, setCity] = useState('Hồ Chí Minh');
  const [street, setStreet] = useState(item.street);
  const arrHouseNumber = item.houseNumber.split(`/`);
  // log.info(
  //   '🚀 ~ file: EditDeliveryAddress.js:61 ~ EditDeliveryAddress ~ newT:',
  //   arrHouseNumber,
  // );
  const [houseNumber, setHouseNumber] = useState(arrHouseNumber[0]);
  const [hem, setHem] = useState(arrHouseNumber[1] ? arrHouseNumber[1] : '');

  /* States show modal */
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalName, setIsShowModalName] = useState(false);
  const [isShowEditImage, setIsShowEditImage] = useState(false);
  const [isFailValue, setIsFailValue] = useState(true);

  const [avatar, setAvatar] = useState(user.imageUrl);
  const [isPicked, setIsPicked] = useState(false);
  const handleClick = () => {
    setIsShowModal(!isShowModal);
  };

  const handleName = () => {
    setIsShowModalName(!isShowModalName);
  };

  const moveToBack = () => {
    navigation.goBack();
  };

  const moveToEditImage = () => {
    navigation.navigate(Router.UPLOAD_IMAGE);
  };

  const onSave = async () => {
    if (phone.length != 10) {
      handleClick();
      return;
    }
    if (
      name === '' ||
      name === undefined ||
      phone === '' ||
      phone === undefined ||
      ward === '' ||
      ward === undefined ||
      district === '' ||
      district === undefined ||
      city === '' ||
      city === undefined ||
      street === '' ||
      street === undefined ||
      houseNumber === '' ||
      houseNumber === undefined ||
      avatar === '' ||
      avatar === undefined
    ) {
      handleClick();
      return;
    } else {
      const newAddress = {
        _id: item._id,
        name: name,
        phone: phone,
        ward: ward,
        district: district,
        city: city,
        street: street,
        houseNumber: `${houseNumber}/${hem}`,
        addressDefault: true,
      };

      if (avatar != user.imageUrl) {
        const result = await dispatch(fetchUploadImage(avatar));
        const imageUrl = result.payload.data;
        const data = {
          userId: userId,
          imageUrl: imageUrl,
          address: newAddress,
        };

        dispatch(fetchUpdateUserInfo(data));
        const timeOut = setTimeout(() => {
          navigation.goBack();
          clearTimeout(timeOut);
        }, 1000);
      } else {
        const data = {
          userId: userId,
          imageUrl: user.imageUrl,
          address: newAddress,
        };
        // navigation.goBack();
        dispatch(fetchUpdateUserInfo(data));
        const timeOut = setTimeout(() => {
          navigation.goBack();
          clearTimeout(timeOut);
        }, 1000);
      }
    }
  };

  const handleCamera = () => {
    onCamera(setAvatar, setIsPicked);
  };
  const handleGallery = () => {
    onGallery(setAvatar, setIsPicked);
  };

  const handleShowPickImage = () => {
    setIsShowEditImage(!isShowEditImage);
  };

  const imageUrlOptions = {
    uri: avatar ? avatar : user.imageUrl,
    priority: FastImage.priority.high,
    cache: FastImage.cacheControl.immutable,
  };
  const urlHardCode = require('../../../../../../assets/logo.png');

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.groupHeader}>
            <TouchableOpacity onPress={moveToBack}>
              <View>
                <IconAntDesign
                  name="left"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.profile}>
              <Text style={styles.textProfile}>Sửa hồ sơ</Text>
            </View>
            <View style={styles.groupHeader}></View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.boxImage}>
            <TouchableOpacity onPress={handleShowPickImage}>
              <View style={styles.viewImage}>
                <FastImage
                  style={styles.imageProfile}
                  source={user.imageUrl ? imageUrlOptions : urlHardCode}
                />
              </View>
              <View style={styles.iconCamera}>
                <View style={styles.iconCameraStyle}>
                  <IconEntypo
                    name="camera"
                    color={constants.COLOR.BLACK}
                    size={15}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.groupAll}>
            <ScrollView
              scrollEnabled={true}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              decelerationRate={'fast'}>
              <TouchableNativeFeedback>
                <View style={styles.viewFlashList}>
                  <BoxInputCus
                    title="Họ và tên người nhận"
                    value={name}
                    keyboardType="ascii-capable"
                    onChangeText={text => setName(text)}
                    placeholder="Nhập họ và tên người nhận"
                    isName={isName}
                    isFailValue={
                      name.length < 3 || name.length > 50
                        ? isFailValue
                        : !isFailValue
                    }
                  />

                  <BoxInputCus
                    isPhone={isPhone}
                    isFailValue={
                      phone.length != 10 ? isFailValue : !isFailValue
                    }
                    title="Số điện thoại người nhận"
                    value={phone}
                    keyboardType="numeric"
                    onChangeText={text => setPhone(text)}
                    placeholder="Nhập số điện thoại người nhận"
                  />

                  <DropdownElement
                    data={WARDS}
                    value={ward}
                    setValue={setWard}
                    title="Chọn phường"
                    placeholder="Chọn phường"
                    styleBorderWidth={styles.styleBorderWidth}
                    stylesLabel={styles.stylesLabel}
                    style={styles.styleMain}
                    placeholderStyle={styles.placeholderStyle}
                    itemContainerStyle={styles.itemContainerStyle}
                  />

                  <View style={styles.boxHouse}>
                    <BoxInputCus
                      title="Số nhà"
                      value={houseNumber}
                      keyboardType="numeric"
                      onChangeText={text => setHouseNumber(text)}
                      placeholder="Nhập số nhà"
                    />
                    <View style={styles.boxSec}>
                      <Text style={styles.textSec}>{'/'}</Text>
                    </View>

                    <BoxInputCus
                      title="Hẻm"
                      value={hem}
                      keyboardType="numeric"
                      onChangeText={text => setHem(text)}
                      placeholder="Nhập số của hẻm"
                    />
                  </View>

                  <DropdownElement
                    data={LIST_STREET}
                    value={street}
                    setValue={setStreet}
                    title="Chọn đường"
                    placeholder="Chọn đường"
                    styleBorderWidth={styles.styleBorderWidth}
                    stylesLabel={styles.stylesLabel}
                    style={styles.styleMain}
                    placeholderStyle={styles.placeholderStyle}
                    itemContainerStyle={styles.itemContainerStyle}
                  />

                  <BoxInputCus
                    title="Quận"
                    value={district}
                    editable={false}
                    onChangeText={text => setDistrict(text)}
                  />

                  <BoxInputCus
                    title="Thành phố"
                    value={city}
                    editable={false}
                    onChangeText={text => setCity(text)}
                  />
                </View>
              </TouchableNativeFeedback>
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonCus title="Lưu" onHandleClick={onSave} />
      </View>

      <ModalNotify
        message1={isPhone.length != 10 ? messagePhone : messageCommon}
        isShowModal={isShowModal}
        handleClick={handleClick}
      />

      <ModalPickImage
        isShowModal={isShowEditImage}
        isAvatar={avatar}
        handleCamera={handleCamera}
        handleGallery={handleGallery}
        navigation={navigation}
        handleShowPickImage={handleShowPickImage}
      />
    </SafeKeyComponent>
  );
};

export default EditProfile;
