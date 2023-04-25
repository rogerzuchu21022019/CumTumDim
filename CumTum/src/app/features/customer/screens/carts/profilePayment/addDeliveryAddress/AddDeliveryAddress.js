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

import FastImage from 'react-native-fast-image';
import {constants} from '../../../../../../shared/constants';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from './StylesAddDeliveryAddress';
import {FlashList} from '@shopify/flash-list';
import ButtonCus from '../../../../../../components/button/ButtonCus';
import {LOG} from '../../../../../../../../logger.config';
import Router from '../../../../../../navigation/Router';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDishes} from '../../../../../product/apiProduct';
import socketServices from '../../../../../../shared/utils/Socket';
import BoxInputCus from '../../../../../../components/input/BoxInput';
import DropdownElement from '../../../../../../components/dropdownElement/DropdownElement';
import {LIST_STREET, WARDS} from '../../../../../../shared/utils/DataAddress';
import ModalNotify from '../../../../../../components/modal/ModalNotify';
import {fetchAddAddress, fetchUserById} from '../../../../../admin/apiUser';
import {authSelector} from '../../../../../admin/sliceAuth';
import {validateName} from '../../../../../../shared/utils/Validate';

const log = LOG.extend(`EDIT_DELIVERY_ADDRESS.JS`);
const AddDeliveryAddress = ({navigation}) => {
  const authSelect = useSelector(authSelector);
  const userId = authSelect.user._id;
  /* States user info*/
  const [name, setName] = useState('');
  const [isName, setIsName] = useState(true);
  const [phone, setPhone] = useState('');
  const [isPhone, setIsPhone] = useState(true);
  const [isFailValue, setIsFailValue] = useState(true);

  const [ward, setWard] = useState('');
  const [district, setDistrict] = useState('12');
  const [city, setCity] = useState('Hồ Chí Minh');
  const [street, setStreet] = useState('');
  const [icon, setIcon] = useState(true);
  const [hem, setHem] = useState('');

  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalName, setIsShowModalName] = useState(false);
  const [houseNumber, setHouseNumber] = useState('');
  const dispatch = useDispatch();
  const goBack = () => {
    navigation.goBack();
  };
  const messageCommon = 'Bạn vui lòng điền đầy đủ thông tin';
  const messagePhone = 'Bạn vui lòng nhập đúng số điện thoại';
  const messageName = 'Tên không được chứa kí tự đặc biệt hoặc số';
  const handleName = () => {
    setIsShowModalName(!isShowModalName);
  };

  const onAddAddress = () => {
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
      const newAddress = {
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
      dispatch(fetchAddAddress(data));
      dispatch(fetchUserById(userId));
    }
    navigation.goBack();
  };

  const handleClick = () => {
    setIsShowModal(!isShowModal);
  };

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
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
              <Text style={styles.textTitle}>Thêm địa chỉ giao hàng</Text>
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
                  value={phone}
                  isPhone={isPhone}
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
              </View>
            </TouchableNativeFeedback>
          </ScrollView>
        </View>
        <View style={styles.line}></View>

        <View style={styles.footer}>
          <ButtonCus title="Thêm" onHandleClick={onAddAddress} icon={icon} />
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

export default AddDeliveryAddress;
