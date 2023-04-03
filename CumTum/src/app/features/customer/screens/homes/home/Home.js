import {
  View,
  Text,
  Button,
  ActivityIndicator,
  Image,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {useCallback, useEffect, useState} from 'react';
import notifee from '@notifee/react-native';

import {LOG} from '../../../../../../../logger.config';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import {showNotifyLocal} from '../../../../../shared/utils/Notifies';
import {fetchCategories, fetchDishes} from '../../../../product/apiProduct';
import styles from './StyleHome';

import FastImage from 'react-native-fast-image';
import IconOcticons from 'react-native-vector-icons/Octicons';
import {constants} from '../../../../../shared/constants';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {FlashList} from '@shopify/flash-list';
import ItemView from './item/ItemView';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {mainDishOptionsData} from '../../../../admin/screens/addDish/DataDishes';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  addDishToWishCartOrUpdate,
  productSelector,
  decreaseDishByID,
  updateAmount,
} from '../../../../product/sliceProduct';
import DropdownPicker from '../../../../../shared/utils/DropdownPicker';
import {cartSelector} from '../../../../carts/sliceOrder';


const HomeCustomer = ({navigation}) => {
  const log = LOG.extend('HOME_CUSTOMER.js');
  const dispatch = useDispatch();
  const cartSelect = useSelector(cartSelector);
  const IMAGE_BG =
    'https://cdn.britannica.com/38/111338-050-D23BE7C8/Stars-NGC-290-Hubble-Space-Telescope.jpg?w=400&h=300&c=crop';
  const data = useSelector(productSelector);

  const [tabs, setTabs] = useState([0, 1, 2, 3]);

  /* State Dropdown */
  const [isShowDropdown, setIsShowDropdown] = useState(true);
  const [openSubMainDish, setOpenSubMainDish] = useState(false);
  const [valueSubMainDish, setValueSubMainDish] = useState([]);
  const [listSubMainDish, setListSubMainDish] = useState(mainDishOptionsData);
  const style = styles.dropdownList;
  const placeholder = 'Chọn loại sườn';
  /* Fetch API and dispatch action type to store */

  const onDisplayNotification = async () => {
    // Request permissions (required for iOS)

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    const title = 'Notification';
    const content = 'Chào mừng bạn đến với dịch vụ của CumTumDim.';
    // console.log("🚀 ~ file: Payment.js:45 ~ onDisplayNotification ~ content:", content)
    const dataMap = {
      title,
      content,
      channelId,
    };
    // Display a notification
    showNotifyLocal(dataMap);
  };

  

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchDishes());
    onDisplayNotification();
    setTabs(0);
    return () => {};
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

  // i want to use useCallback to call onDisplayNotification

  const imageUrlOptions = {
    uri: '',
    priority: FastImage.priority.normal,
    cache: FastImage.cacheControl.immutable,
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
            <View style={styles.rightHeader}>
              <IconOcticons
                name="bell-fill"
                color={constants.COLOR.RED}
                size={20}
              />
            </View>
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
              {/* thằng này sẽ set position của cha nó rồi set view tuỳ ý  */}

              <Text></Text>
            </View>
            <View style={styles.divideLine}></View>
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
                      source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
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
                      source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
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
                      source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
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
                      source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {isShowDropdown ? (
              <View style={styles.boxFlashList}>
                <Image
                  source={{
                    uri: IMAGE_BG,
                    priority: FastImage.priority.normal,
                  }}
                  style={StyleSheet.absoluteFillObject}
                  blurRadius={20}
                />
                <View style={styles.boxDropdownList}>
                  <DropdownPicker
                    style={style}
                    openSubMainDish={openSubMainDish}
                    valueSubMainDish={valueSubMainDish}
                    listSubMainDish={listSubMainDish}
                    setOpenSubMainDish={setOpenSubMainDish}
                    setValueSubMainDish={setValueSubMainDish}
                    setListSubMainDish={setListSubMainDish}
                    placeholder={placeholder}
                    colorIconArrow={constants.COLOR.WHITE}
                    colorCloseIcon={constants.COLOR.WHITE}
                    colorPlaceholder={constants.COLOR.WHITE}
                  />
                </View>

                <FlashList
                  data={
                    valueSubMainDish[0] === 'Sườn mỡ'
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
                      valueSubMainDish={valueSubMainDish}
                      mainDishCart={data.mainDishCart}
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
        {/* <View style={styles.footer}></View> */}
      </View>
    </SafeKeyComponent>
  );
};
export default HomeCustomer;
