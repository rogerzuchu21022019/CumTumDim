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
import {useSelector} from 'react-redux';
import {authSelector} from '../../../../admin/sliceAuth';
import {LOG} from '../../../../../../../logger.config';
const log = LOG.extend(`EDIT_PROFILE.JS`);

const EditProfile = ({navigation, route}) => {
  const {item} = route.params;

  const authSelect = useSelector(authSelector);
  const userId = authSelect.user._id;

  /* States user info*/
  const [name, setName] = useState(item.name);
  const [phone, setPhone] = useState(item.phone);
  const [ward, setWard] = useState(item.ward);
  const [district, setDistrict] = useState('12');
  const [city, setCity] = useState('Hồ Chí Minh');
  const [street, setStreet] = useState(item.street);
  const [houseNumber, setHouseNumber] = useState(item.houseNumber);

  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowPhoneNotify, setIsShowPhoneNotify] = useState(false);

  const handleClick = () => {
    setIsShowModal(!isShowModal);
  };

  const handleClickPhone = () => {
    setIsShowPhoneNotify(!isShowPhoneNotify);
  };

  const moveToBack = () => {
    navigation.navigate(Router.PROFILE);
  };

  const moveToEditImage = () => {
    navigation.navigate(Router.UPLOAD_IMAGE);
  };

  const onSave = () => {
    if (phone.length != 10) {
      console.log(
        '🚀 ~ file: EditProfile.js:64 ~ onSave ~ phone.length:',
        phone.length,
      );

      handleClickPhone();
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
      houseNumber === undefined
    ) {
      handleClick();
      return;
    } else {
      console.log(
        '🚀 ~ file: EditDeliveryAddress.js:38 ~ EditDeliveryAddress ~ userId:',
        userId,
      );
      const newAddress = {
        _id: item._id,
        name: name,
        phone: phone,
        ward: ward,
        district: district,
        city: city,
        street: street,
        houseNumber: houseNumber,
        addressDefault: true,
      };
      log.info(
        '🚀 ~ file: EditDeliveryAddress.js:52 ~ moveToBack ~ newAddress:',
        newAddress,
      );
      navigation.goBack();
    }
  };
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
            <TouchableOpacity onPress={moveToEditImage}>
              <View style={styles.viewImage}>
                <FastImage
                  style={styles.imageProfile}
                  source={require('../../../../../../assets/logo.png')}
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
                  />

                  <BoxInputCus
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

                  <View>
                    <BoxInputCus
                      title="Số nhà"
                      value={houseNumber}
                      onChangeText={text => setHouseNumber(text)}
                      placeholder="Nhập số nhà"
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
        message1="Bạn vui lòng điền đầy đủ thông tin"
        isShowModal={isShowModal}
        handleClick={handleClick}
      />

      <ModalNotify
        message1="Bạn vui lòng nhập đúng số điện thoại"
        isShowModal={isShowPhoneNotify}
        handleClick={handleClickPhone}
      />
    </SafeKeyComponent>
  );
};

export default EditProfile;
