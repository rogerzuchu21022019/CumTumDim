import {
  View,
  Text,
  SafeAreaViewComponent,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './StylesDeliveryAddress';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {constants} from '../../../../../shared/constants';
import FastImage from 'react-native-fast-image';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import HomeAdmin from '../../../../admin/screens/homeAdmin/HomeAdmin';
import {FlashList} from '@shopify/flash-list';
import ItemViewPayment from './item/itemViewDeliveryAddress';
import Router from '../../../../../navigation/Router';
import AddDeliveryAddress from './addDeliveryAddress/AddDeliveryAddress';
import {LOG} from '../../../../../../../logger.config';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector} from '../../../../admin/sliceAuth';
import {fetchUserById} from '../../../../admin/apiUser';
const log = LOG.extend(`CHOOSE_DELIVERY_ADDRESS.JS`);
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ChooseDeliveryAddress = ({navigation}) => {
  const authSelect = useSelector(authSelector);
  const userId = authSelect.user._id;
  const [checkedItem, setCheckedItem] = useState(0);
  const goBack = () => {
    navigation.goBack();
  };
  const dispatch = useDispatch();
  const moveToScreen = () => {
    navigation.navigate(Router.ADD_DELIVERY_ADDRESS, {
      userId,
    });
  };

  useEffect(() => {
    dispatch(fetchUserById(userId));

    return () => {};
  }, [dispatch]);

  const addressArray = authSelect.user.addresses;

  const radioButtonsData = addressArray.map((item, index) => {
    return {
      ...item,
      idAuto: index,
    };
  });

  const handleCheckedItem = index => {
    setCheckedItem(index);
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.mainHeader}>
            <TouchableOpacity onPress={goBack}>
              <View style={styles.icon}>
                <IconAntDesign
                  name="left"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.leftHeader}>
              <Text style={styles.textTitle}>Chọn địa chỉ nhận hàng</Text>
              {/* <Text style={styles.textTitle}>{urlPaypalCheckout}</Text> */}
            </View>
          </View>
        </View>
        <View style={styles.divideLine}></View>
      </View>
      <View style={styles.body}>
        <View style={styles.viewText}>
          <Text style={styles.textAddress}>Địa chỉ</Text>
        </View>
        <View style={styles.viewFlashList}>
          <FlashList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={radioButtonsData}
            estimatedItemSize={200}
            renderItem={({item, index}) => {
              return (
                <ItemViewPayment
                  item={item}
                  index={index}
                  navigation={navigation}
                  handleCheckedItem={() => handleCheckedItem(index)}
                  checkedItem={checkedItem}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.viewFooter}>
          <TouchableOpacity onPress={moveToScreen}>
            <View style={styles.viewButtonNext}>
              <IconMaterialIcons
                name="add-circle-outline"
                size={25}
                color={constants.COLOR.WHITE}
              />
              <Text style={styles.btnNext}>Thêm địa chỉ giao hàng</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </SafeKeyComponent>
  );
};

export default ChooseDeliveryAddress;
