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
import styles from './StylesEditDeliveryAddress';
import {FlashList} from '@shopify/flash-list';
import ItemEditDeliveryAddress from '../item/ItemEditDeliveryAddress';
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
import {authSelector} from '../../../../../admin/sliceAuth';
import {fetchUpdateAddress} from '../../../../../admin/apiUser';

const log = LOG.extend(`EDIT_DELIVERY_ADDRESS.JS`);
const EditDeliveryAddress = ({navigation, route}) => {
  const {item} = route.params;
  const authSelect = useSelector(authSelector);
  const userId = authSelect.user._id;

  log.error(
    '🚀 ~ file: EditDeliveryAddress.js:35 ~ EditDeliveryAddress ~ item:',
    item,
  );

  /* States user info*/
  const [name, setName] = useState(item.name);
  const [phone, setPhone] = useState(item.phone);
  const [ward, setWard] = useState(item.ward);
  const [district, setDistrict] = useState('12');
  const [city, setCity] = useState('Hồ Chí Minh');
  const [street, setStreet] = useState(item.street);
  const [isEnabled, setIsEnabled] = useState(false);
  const [houseNumber, setHouseNumber] = useState(item.houseNumber);

  const [isShowModal, setIsShowModal] = useState(false);
  
  const dispatch = useDispatch();
  const goBack = () => {
    navigation.goBack();
  };
  const onSave = () => {
  
  };

  const handleClick = () => {
    setIsShowModal(!isShowModal);
  };

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.groupHeader}>
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
              <Text style={styles.textProfile}>Sửa địa chỉ giao hàng</Text>
            </View>
            <View style={styles.groupHeader}></View>
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
        <View style={styles.line}></View>
        <View style={styles.footer}>
          <ButtonCus title="Lưu" onHandleClick={onSave} />
        </View>

        <ModalNotify
          message1="Bạn vui lòng điền đầy đủ thông tin"
          isShowModal={isShowModal}
          handleClick={handleClick}
        />
      </View>
    </SafeKeyComponent>
  );
};

export default EditDeliveryAddress;
