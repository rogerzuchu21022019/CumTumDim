import {
  View,
  Text,
  Button,
  ActivityIndicator,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {useEffect, useState} from 'react';

import {LOG} from '../../../../../../../logger.config';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import {productSelector} from '../../../../product/sliceProduct';
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

const HomeCustomer = ({navigation}) => {
  const log = LOG.extend('HOME_CUSTOMER.js');
  const dispatch = useDispatch();
  const data = useSelector(productSelector);

  /* State Dropdown */
  const [openSubMainDish, setOpenSubMainDish] = useState(false);
  const [valueSubMainDish, setValueSubMainDish] = useState([]);
  const [listSubMainDish, setListSubMainDish] = useState(mainDishOptionsData);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchDishes());
    return () => {};
  }, [dispatch]);

  /* State Tab view */
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  console.log('🚀 ~ file: Home.js:46 ~ HomeCustomer ~ index:', index);

  console.log('🚀 ~ file: HomeCustomer.js:16 ~ HomeCustomer ~ data:', data);

  const [routes] = useState([
    {key: 'Món chính', title: 'Món chính'},
    {key: 'Đồ ăn thêm', title: 'Đồ ăn thêm'},
    {key: 'Toppings', title: 'Toppings'},
    {key: 'Khác', title: 'Khác'},
  ]);

  const ItemTabView = ({listItem}) => {
    return (
      <FlashList
        data={listItem}
        estimatedItemSize={100}
        renderItem={({item, index}) => {
          return <ItemView item={item} index={index} />;
        }}
      />
    );
  };

  /* custom tab bar icon */
  const getTabBarIcon = props => {
    const {route} = props;
    if (route.key === 'Khác') {
      return (
        <FastImage
          source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
          style={styles.imageLogo}
        />
      );
    }

    if (route.key === 'Món chính') {
      return (
        <FastImage
          style={styles.imageLogo}
          source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
        />
      );
    }

    if (route.key === 'Đồ ăn thêm') {
      return (
        <FastImage
          style={styles.imageLogo}
          source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
        />
      );
    }

    if (route.key === 'Toppings') {
      return (
        <FastImage
          style={styles.imageLogo}
          source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
        />
      );
    }
  };

  /* custom tab bar */
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{height: 1, backgroundColor: constants.COLOR.BLACK}}
      style={styles.customTabBar}
      labelStyle={{
        color: 'red',
        fontSize: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      renderIcon={props => getTabBarIcon(props)}
    />
  );

  /* custom scenes */
  const renderScene = ({route}) => {
    switch (route.title) {
      case 'Món chính':
        return <ItemTabView listItem={data.mainDishes} />;
      case 'Đồ ăn thêm':
        return <ItemTabView listItem={data.extraDishes} />;
      case 'Toppings':
        return <ItemTabView listItem={data.toppings} />;
      case 'Khác':
        return <ItemTabView listItem={data.another} />;
      default:
        return null;
    }
  };

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
            <TabView
              style={styles.tabView}
              navigationState={{index, routes}}
              animationEnabled={false}
              lazy
              swipeEnabled={false}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{width: layout.width}}
              renderTabBar={renderTabBar}
            />
          </View>
        </View>
        <View style={styles.divideLine}></View>
        {/* <View style={styles.footer}></View> */}
      </View>
    </SafeKeyComponent>
  );
};
export default HomeCustomer;
