import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableNativeFeedback,
  Alert,
  Switch,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';

import {constants} from '../../../../../../shared/constants';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from './StylesEditDeliveryAddress';
import ButtonCus from '../../../../../../components/button/ButtonCus';
import {LOG} from '../../../../../../../../logger.config';
import {useDispatch, useSelector} from 'react-redux';
import BoxInputCus from '../../../../../../components/input/BoxInput';
import DropdownElement from '../../../../../../components/dropdownElement/DropdownElement';
import {LIST_STREET, WARDS} from '../../../../../../shared/utils/DataAddress';
import ModalNotify from '../../../../../../components/modal/ModalNotify';
import {authSelector} from '../../../../../admin/sliceAuth';
import {
  fetchDeleteAddress,
  fetchUpdateAddress,
} from '../../../../../admin/apiUser';
import {validateName} from '../../../../../../shared/utils/Validate';

const log = LOG.extend(`EDIT_DELIVERY_ADDRESS.JS`);
const EditDeliveryAddress = ({navigation, route}) => {
  const {item} = route.params;
  const authSelect = useSelector(authSelector);
  const isLoading = authSelect.isLoading;

  const userId = authSelect.user._id;

  log.error(
    '🚀 ~ file: EditDeliveryAddress.js:35 ~ EditDeliveryAddress ~ item:',
    item,
  );

  /* States user info*/
  const arrHouseNumber = item.houseNumber.split(`/`);
  log.info(
    '🚀 ~ file: EditDeliveryAddress.js:61 ~ EditDeliveryAddress ~ newT:',
    arrHouseNumber,
  );

  const messageCommon = 'Bạn vui lòng điền đầy đủ thông tin';
  const messagePhone = 'Bạn vui lòng nhập đúng số điện thoại';
  const messageName = 'Tên không được chứa kí tự đặc biệt hoặc số';
  const handleName = () => {
    setIsShowModalName(!isShowModalName);
  };

  const [name, setName] = useState(item.name);
  const [isName, setIsName] = useState(true);
  const [phone, setPhone] = useState(item.phone);
  const [isPhone, setIsPhone] = useState(true);
  const [isFailValue, setIsFailValue] = useState(true);

  const [ward, setWard] = useState(item.ward);
  const [district, setDistrict] = useState('12');
  const [city, setCity] = useState('Hồ Chí Minh');
  const [street, setStreet] = useState(item.street);
  const [isEnabled, setIsEnabled] = useState(false);
  const [houseNumber, setHouseNumber] = useState(
    arrHouseNumber[1] ? `${arrHouseNumber[0]}` : `${arrHouseNumber[0]}`,
  );
  const [hem, setHem] = useState(
    arrHouseNumber[1] ? `${arrHouseNumber[1]}` : '',
  );
  
  const handleShowLoading = () => {
    setIsShowLoading(!isShowLoading);
  };

  /* States modal */
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalName, setIsShowModalName] = useState(false);
  const [isShowLoading, setIsShowLoading] = useState(false);

  const dispatch = useDispatch();
  const goBack = () => {
    navigation.goBack();
  };
  const onSave = () => {
    let validateString = validateName(name);
    if (validateString.error) {
      handleName();
      return;
    }

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
        houseNumber: hem ? `${houseNumber}/${hem}` : `${houseNumber}`,
        addressDefault: isEnabled,
      };
      log.info(
        '🚀 ~ file: EditDeliveryAddress.js:52 ~ moveToBack ~ newAddress:',
        newAddress,
      );
      const data = {
        userId: userId,
        address: newAddress,
      };
      handleShowLoading();
      dispatch(fetchUpdateAddress(data));
      const timeOut = setTimeout(() => {
        navigation.goBack();
        clearTimeout(timeOut);
      }, 1500);
    }
  };

  const handleClick = () => {
    setIsShowModal(!isShowModal);
  };

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const onAgree = () => {
    const data = {
      userId: userId,
      address: item,
    };
    dispatch(fetchDeleteAddress(data));
    navigation.goBack();
    navigation.goBack();
  };
  const onCancel = () => {
    console.log('Cancel Pressed');
  };

  const onDeleteAddress = () => {
    Alert.alert(
      'Thông báo',
      'Bạn có muốn xóa địa chỉ này không?',
      [
        {
          text: 'Đồng ý',
          onPress: () => onAgree(),
        },
        {
          text: 'Hủy',
          onPress: () => onCancel(),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.boxHeader}>
            <TouchableOpacity onPress={goBack}>
              <View>
                <IconAntDesign
                  name="left"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.profile}>
              <Text style={styles.textTitle}>Sửa địa chỉ giao hàng</Text>
            </View>
            <View style={styles.boxHeader}></View>
          </View>
        </View>
        <View style={styles.body}>
          {/*  I need  import ScrollView as file i imported */}
          <ScrollView
            scrollEnabled={true}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            decelerationRate={'fast'}>
            <TouchableNativeFeedback>
              <View style={styles.viewFlashList}>
                <View style={styles.viewAddressDefault}>
                  <View style={styles.viewText}>
                    <Text style={styles.text}>Đặt làm địa chỉ mặc định</Text>
                  </View>
                  <View style={styles.viewSwitch}>
                    <Switch
                      trackColor={{
                        false: constants.COLOR.WHITE,
                        true: constants.COLOR.WHITE,
                      }}
                      thumbColor={
                        isEnabled
                          ? constants.COLOR.ORANGE
                          : constants.COLOR.ORANGE
                      }
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                </View>
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
                  title="Số điện thoại người nhận"
                  isPhone={isPhone}
                  value={phone}
                  keyboardType="numeric"
                  onChangeText={text => setPhone(text)}
                  placeholder="Nhập số điện thoại người nhận"
                  isFailValue={phone.length != 10 ? isFailValue : !isFailValue}
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

                <View style={styles.boxDelete}>
                  <ButtonCus
                    title="Xoá"
                    onHandleClick={onDeleteAddress}
                    styleBtn={styles.btnDelete}
                    styleText={styles.styleText}
                  />
                </View>
              </View>
            </TouchableNativeFeedback>
          </ScrollView>
        </View>
        <View style={styles.line}></View>
        <View style={styles.footer}>
          <ButtonCus title="Lưu" onHandleClick={onSave} />
        </View>

        <ModalNotify
          message1={phone.length != 10 ? messagePhone : messageCommon}
          isShowModal={isShowModal}
          handleClick={handleClick}
        />

        <ModalNotify
          message1={validateName(name).error ? messageName : messageCommon}
          isShowModal={isShowModalName}
          handleClick={handleName}
        />
    
      </View>
    </SafeKeyComponent>
  );
};

export default EditDeliveryAddress;
