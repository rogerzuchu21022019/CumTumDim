/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {LOG} from '../../../../../../../logger.config';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import {showNotifyLocal} from '../../../../../shared/utils/Notifies';
import {fetchCategories, fetchDishes} from '../../../../product/apiProduct';
import styles from './StyleHome';
import FastImage from 'react-native-fast-image';
import IconOcticons from 'react-native-vector-icons/Octicons';
import {constants} from '../../../../../shared/constants';
import {FlashList} from '@shopify/flash-list';
import ItemView from './item/ItemView';
import {mainDishOptionsData} from '../../../../admin/screens/manager/manageFood/addDish/DataDishes';
import {
  addDishToWishCartOrUpdate,
  productSelector,
  decreaseDishByID,
  updateAmount,
} from '../../../../product/sliceProduct';
import Advertisement from '../../../../../shared/utils/Advertisement';
import socketServices from '../../../../../shared/utils/Socket';
import Router from '../../../../../navigation/Router';
import {formatCodeOrder} from '../../../../../shared/utils/CreateCodeOrder';
import {authSelector} from '../../../../admin/sliceAuth';
import ModalNotify from '../../../../../components/modal/ModalNotify';
import DropdownElement from '../../../../../components/dropdownElement/DropdownElement';
import messaging from '@react-native-firebase/messaging';
import {
  onShowData,
  onShowNotiWelCome,
} from '../../../../../shared/utils/ShowNotifiWelcome';
import {fetchUserById} from '../../../../admin/apiUser';
import ModalSearch from '../../../../../components/modal/ModalSearch';

const HomeCustomer = ({navigation}) => {
  const log = LOG.extend('HOME_CUSTOMER.js');
  const dispatch = useDispatch();
  const authSelect = useSelector(authSelector);
  // log.info(
  //   '🚀 ~ file: Home.js:47 ~ HomeCustomer ~ notifications:',
  //   authSelect.notifications,
  // );noti

  const user = authSelect.user;
  const orders = authSelect.orders;
  const userId = user._id;

  const userInfo = {
    name: authSelect.user.name,
    phone: authSelect.user.phone,
    address: authSelect.user.addresses,
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(remoteMessage => {
      const {title, body, data} = remoteMessage.notification;
      data ? onShowData(data) : onShowNotiWelCome(title, body);
      dispatch(fetchUserById(userId));
    });

    return () => {
      unsubscribe();
    };
  }, [messaging]);

  const message1 = `Bạn chưa cập nhật địa chỉ giao hàng!!`;
  const message2 = `Vui lòng cập nhật địa chỉ`;
  const message3 = `để chúng tôi có thể giao hàng cho bạn`;

  const data = useSelector(productSelector);

  const [tabs, setTabs] = useState([0, 1, 2, 3]);

  /* State Dropdown */
  const [isShowDropdown, setIsShowDropdown] = useState(true);
  const [value, setValue] = useState(mainDishOptionsData[0].value);

  /* State Modal Address */
  const [isShowModal, setIsShowModal] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [isAddress, setIsAddress] = useState(false);
  const [isShowModalSearch, setIsShowModalSearch] = useState(false);

  const [iconFoods, setIconFoods] = useState(true);

  const address = authSelect.user.addresses;
  const handleClick = () => {
    setIsShowModal(!isShowModal);
    setIsAddress(!isAddress);
  };
  /* Fetch API and dispatch action type to store */

  useEffect(() => {
    socketServices.initializeSocket();
    socketServices.emit(constants.SOCKET.CONNECT_RABBIT_CUSTOMER, userId);
    return () => {
      socketServices.socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (address.length === 0) {
      handleClick();
    }
  }, []);

  const onDisplayNotiAccepted = async data => {
    console.log('🚀 ~ file: Home.js:124 ~ onDisplayNotiAccepted ~ data:', data);
    const idOrder = formatCodeOrder(data._id);
    const total = data.moneyToPaid;
    const status = data.orderStatus;
    const title = 'Notification';
    const contentAccepted = `Đơn hàng với số tiền ${total}K của bạn đã được ${status}`;
    const contentDeny = `Đơn hàng với số tiền ${total}K của bạn đã bị ${status} bởi Admin`;
    // console.log("🚀 ~ file: Payment.js:45 ~ onDisplayNotification ~ content:", content)
    const dataMap = {
      title,
      content: status === 'Chấp nhận' ? contentAccepted : contentDeny,
    };
    showNotifyLocal(dataMap);
  };

  const onCancel = () => {
    setIsShowModalSearch(false);
  };

  const openModalSearch = () => {
    setIsShowModalSearch(true);
  };

  const onDone = () => {
    setIsShowModalSearch(false);
    navigation.navigate(Router.CART_TABS);
  };

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchDishes());
    // onShowNotiWelCome();
    setTabs(0);
    return () => {
      dispatch(fetchCategories());
      dispatch(fetchDishes());
    };
  }, [dispatch]);

  /* Dispatch function */
  const addDish = dish => ({
    type: addDishToWishCartOrUpdate().type,
    payload: dish,
  });

  const updateQuantity = dish => ({
    type: updateAmount().type,
    payload: dish,
  });

  /* Dispatch  */
  const handleAddDish = dish => {
    // console.log('🚀 ~ file: Home.js:61 ~ handleAddDish ~ dish:', dish);
    dispatch(addDish(dish));
    dispatch(updateQuantity(dish));
  };

  const removeDish = dish => ({
    type: decreaseDishByID().type,
    payload: dish,
  });

  const handleRemoveDish = dish => {
    // log.error('🚀 ~ file: Home.js:75 ~ handleRemoveDish ~ dish:', dish);
    dispatch(removeDish(dish));
    dispatch(updateQuantity(dish));
  };

  const openTab1 = () => {
    setIsShowDropdown(true);
    setTabs(0);
  };

  const openTab2 = () => {
    setIsShowDropdown(false);
    setTabs(1);
  };

  const openTab3 = () => {
    setIsShowDropdown(false);
    setTabs(2);
  };
  const openTab4 = () => {
    setIsShowDropdown(false);
    setTabs(3);
  };
  const moveToRingBell = () => {
    navigation.navigate(Router.RING_BELL);
  };
  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          {/* Header chia 2 view main và banner  theo vertical*/}
          {/* main chiếm 1/6 */}
          {/* banner thì set position cho nguyên cái view header */}
          <View style={styles.mainViewHeader}>
            {/* main thì chia 2 view theo horizontal*/}
            <View style={styles.leftHeader}>
              <FastImage
                style={styles.imageLogo}
                source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
              />
              <Text style={styles.textTitle}>Cum tứm đim</Text>
            </View>
            <TouchableOpacity
              style={{
                marginRight: 20,
              }}
              onPress={openModalSearch}>
              <View>
                <IconOcticons
                  name="search"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={moveToRingBell}>
              <View style={styles.rightHeader}>
                <View>
                  <IconOcticons
                    name="bell-fill"
                    color={constants.COLOR.WHITE}
                    size={20}
                  />
                </View>
                {user.notifications.length !== 0 && (
                  <View style={styles.viewTextRingBell}>
                    <Text style={styles.textRingBell}>
                      {user.notifications.length}
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bannerViewHeader}>
            {/* banner view thì set position của thằng cha nó là header */}
            {/* không set flex được vì đang sử dụng position */}
            {/* nên xài width,height theo % */}
            {/* image này cần hiện full từ status bar xuống nên sẽ để flex:1 cho nó full vì banner view đang 100% width height */}
            <FastImage
              style={styles.imageBackgroundHeader}
              source={require('../../../../../../assets/headerImage.jpg')}
            />
            <View style={styles.positionInImageBackground}>
              <Advertisement />
            </View>
          </View>
          <View style={styles.divideLine}></View>
        </View>
        <View style={styles.body}>
          <View style={styles.firstBody}>
            <View style={styles.boxTabs}>
              <TouchableOpacity onPress={openTab1}>
                <View style={styles.boxMainDishes}>
                  <Text
                    style={
                      tabs === 0
                        ? styles.textNameDishesChoosing
                        : styles.textNameDishes
                    }>
                    Món chính
                  </Text>
                  <View style={styles.viewImageDish}>
                    <FastImage
                      style={styles.imageLogo}
                      source={require('../../../../../../assets/logoMainDish.jpg')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={openTab2}>
                <View style={styles.boxMainDishes}>
                  <Text
                    style={
                      tabs === 1
                        ? styles.textNameDishesChoosing
                        : styles.textNameDishes
                    }>
                    Món thêm
                  </Text>
                  <View style={styles.viewImageDish}>
                    <FastImage
                      style={styles.imageLogo}
                      source={require('../../../../../../assets/logo_extra_food.jpg')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={openTab3}>
                <View style={styles.boxMainDishes}>
                  <Text
                    style={
                      tabs === 2
                        ? styles.textNameDishesChoosing
                        : styles.textNameDishes
                    }>
                    Toppings
                  </Text>
                  <View style={styles.viewImageDish}>
                    <FastImage
                      style={styles.imageLogo}
                      source={require('../../../../../../assets/logoTopping.jpg')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={openTab4}>
                <View style={styles.boxMainDishes}>
                  <Text
                    style={
                      tabs === 3
                        ? styles.textNameDishesChoosing
                        : styles.textNameDishes
                    }>
                    Món khác
                  </Text>
                  <View style={styles.viewImageDish}>
                    <FastImage
                      style={styles.imageLogo}
                      source={require('../../../../../../assets/logo_another.jpeg')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {isShowDropdown ? (
              <View style={styles.boxFlashList}>
                <Image
                  source={{
                    uri: constants.IMAGE_BG.URI,
                  }}
                  style={StyleSheet.absoluteFillObject}
                  blurRadius={20}
                />
                <View style={styles.boxDropdownList}>
                  <DropdownElement
                    data={mainDishOptionsData}
                    value={value}
                    setValue={setValue}
                    title="Chọn loại sườn"
                    placeholder="Chọn loại sườn"
                    styleBorderWidth={styles.styleBorderWidth}
                    selectedTextStyle={styles.selectedTextStyle}
                    stylesLabel={styles.stylesLabel}
                    style={styles.styleMain}
                    placeholderStyle={styles.placeholderStyle}
                    itemContainerStyle={styles.itemContainerStyle}
                    defaultColor={constants.COLOR.WHITE}
                    styleTextTitle={styles.styleTextTitle}
                    iconFoods={iconFoods}
                  />
                </View>

                <FlashList
                  data={
                    value === 'Sườn mỡ'
                      ? data.mainDishes.filter(
                          item => item.subCategory === 'Sườn mỡ',
                        )
                      : data.mainDishes.filter(
                          item => item.subCategory === 'Sườn',
                        )
                  }
                  renderItem={({item, index}) => (
                    <ItemView
                      item={item}
                      index={index}
                      tabs={tabs}
                      handleAddDish={handleAddDish}
                      handleRemoveDish={handleRemoveDish}
                    />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  estimatedItemSize={100}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            ) : (
              <View style={styles.boxFlashList}>
                <Image
                  source={{
                    uri: constants.IMAGE_BG.URI,
                  }}
                  style={StyleSheet.absoluteFillObject}
                  blurRadius={20}
                />
                {tabs === 1 ? (
                  <FlashList
                    data={data.extraDishes}
                    renderItem={({item, index}) => (
                      <ItemView
                        item={item}
                        index={index}
                        tabs={tabs}
                        handleAddDish={handleAddDish}
                        handleRemoveDish={handleRemoveDish}
                      />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    estimatedItemSize={100}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                  />
                ) : tabs === 2 ? (
                  <FlashList
                    data={data.toppings}
                    renderItem={({item, index}) => (
                      <ItemView
                        item={item}
                        index={index}
                        tabs={tabs}
                        handleAddDish={handleAddDish}
                        handleRemoveDish={handleRemoveDish}
                      />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    estimatedItemSize={100}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                  />
                ) : tabs === 3 ? (
                  <FlashList
                    data={data.another}
                    renderItem={({item, index}) => (
                      <ItemView
                        item={item}
                        index={index}
                        tabs={tabs}
                        handleAddDish={handleAddDish}
                        handleRemoveDish={handleRemoveDish}
                      />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    estimatedItemSize={100}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                  />
                ) : null}
              </View>
            )}
          </View>
        </View>
        <View style={styles.divideLine}></View>
        <ModalNotify
          message1={message1}
          message2={message2}
          message3={message3}
          isShowModal={isShowModal}
          isCancel={isCancel}
          handleClick={handleClick}
          navigation={navigation}
          isAddress={isAddress}
          item={userInfo}
        />
        <ModalSearch
          isVisible={isShowModalSearch}
          navigation={navigation}
          onCancel={onCancel}
          onDone={onDone}
        />
        {/* <View style={styles.footer}></View> */}
      </View>
    </SafeKeyComponent>
  );
};
export default HomeCustomer;
