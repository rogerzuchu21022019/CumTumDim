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

import {useEffect, useState} from 'react';

import {LOG} from '../../../../../../../logger.config';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import {showNotifyLocal} from '../../../../../shared/utils/Notifies';
import {fetchCategories, fetchDishes} from '../../../../product/apiProduct';
import styles from './StyleHome';

import FastImage from 'react-native-fast-image';
import IconOcticons from 'react-native-vector-icons/Octicons';
import {constants} from '../../../../../shared/constants';
import notifee from '@notifee/react-native';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {FlashList} from '@shopify/flash-list';
import ItemView from './item/ItemView';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {mainDishOptionsData} from '../../../../admin/screens/addDish/DataDishes';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  addDishToWishCart,
  productSelector,
  removeDishFromWishCart,
} from '../../../../product/sliceProduct';

const HomeCustomer = ({navigation}) => {
  const log = LOG.extend('HOME_CUSTOMER.js');
  const dispatch = useDispatch();
  const IMAGE_BG =
    'https://cdn.britannica.com/38/111338-050-D23BE7C8/Stars-NGC-290-Hubble-Space-Telescope.jpg?w=400&h=300&c=crop';
  const data = useSelector(productSelector);

  const [tabs, setTabs] = useState([0, 1, 2, 3]);
  const [isShowDropdown, setIsShowDropdown] = useState(true);

  /* State Dropdown */
  const [openSubMainDish, setOpenSubMainDish] = useState(false);
  const [valueSubMainDish, setValueSubMainDish] = useState([]);
  const [listSubMainDish, setListSubMainDish] = useState(mainDishOptionsData);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchDishes());
    setTabs(0);
    return () => {};
  }, [dispatch]);

  const addDish = dish => ({
    type: addDishToWishCart().type,
    payload: dish,
  });

  const handleAddDish = dish => {
    console.log('🚀 ~ file: Home.js:61 ~ handleAddDish ~ dish:', dish);
    dispatch(addDish(dish));
  };

  const removeDish = dish => ({
    type: removeDishFromWishCart().type,
    payload: dish,
  });

  const handleRemoveDish = dish => {
    log.error('🚀 ~ file: Home.js:75 ~ handleRemoveDish ~ dish:', dish);
    dispatch(removeDish(dish));
  };

  /* State Tab view */

  /* custom tab bar icon */

  /* show notifications */
  const onDisplayNotification = async () => {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    const title = data.message;
    const content = 'show notifies content';
    const dataMap = {
      title,
      content,
      channelId,
    };
    // Display a notification
    showNotifyLocal(dataMap);
  };

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
                  <Text style={{color: 'white'}}>{tabs}</Text>
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
                  <DropDownPicker
                    style={styles.dropdownList}
                    open={openSubMainDish}
                    value={valueSubMainDish}
                    items={listSubMainDish}
                    setOpen={setOpenSubMainDish}
                    setValue={setValueSubMainDish}
                    setItems={setListSubMainDish}
                    // custom color text
                    placeholder="Chọn loại sườn"
                    placeholderStyle={{
                      marginLeft: 10,
                      color: constants.COLOR.WHITE,
                    }}
                    textStyle={{
                      color: constants.COLOR.WHITE,
                    }}
                    //multi
                    multiple={true}
                    min={1}
                    max={1}
                    // result after choose
                    mode="BADGE"
                    showBadgeDot={true}
                    badgeProps={{
                      activeOpacity: 0.5,
                    }}
                    badgeColors={['red', 'blue', 'orange']}
                    badgeDotColors={['yellow', 'grey', 'aqua']}
                    //search
                    searchable={true}
                    searchPlaceholder="Tìm kiếm hoặc chọn lựa tên "
                    searchWithRegionalAccents={true}
                    searchContainerStyle={{
                      borderBottomColor: '#dfdfdf',
                    }}
                    searchTextInputStyle={{
                      color: constants.COLOR.WHITE,
                    }}
                    searchPlaceholderTextColor={constants.COLOR.WHITE}
                    customItemLabelStyle={{
                      fontStyle: 'italic',
                    }}
                    // show type of list item
                    listMode="MODAL"
                    modalTitle="Select an item"
                    bottomOffset={100}
                    dropDownDirection="AUTO"
                    modalContentContainerStyle={{
                      backgroundColor: constants.COLOR.PRIMARY,
                    }}
                    modalAnimationType="slide"
                    //icon
                    TickIconComponent={() => (
                      <MaterialIcons
                        name="done"
                        style={{
                          marginRight: 4,
                        }}
                        color={constants.COLOR.WHITE}
                        size={20}
                      />
                    )}
                    ArrowDownIconComponent={() => (
                      <MaterialIcons
                        name="keyboard-arrow-down"
                        color={constants.COLOR.WHITE}
                        size={20}
                      />
                    )}
                  />
                </View>

                <FlashList
                  data={data.mainDishes}
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
