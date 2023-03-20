import {View, Text, Button, ActivityIndicator, Image} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {useEffect} from 'react';

import notifee from '@notifee/react-native';
import {LOG} from '../../../../../../../logger.config';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import {productSelector} from '../../../../product/sliceProduct';
import {showNotifyLocal} from '../../../../../shared/utils/Notifies';
import {fetchCategories, fetchDishes} from '../../../../product/apiProduct';
import styles from './StyleHome';
import FastImage from 'react-native-fast-image';
import IconOcticons from 'react-native-vector-icons/Octicons';
import {constants} from '../../../../../shared/constants';
const HomeCustomer = ({navigation}) => {
  const log = LOG.extend('HOME_CUSTOMER.js');
  const data = useSelector(productSelector);

  console.log('🚀 ~ file: HomeCustomer.js:16 ~ HomeCustomer ~ data:', data);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchDishes());
  }, [dispatch]);

  const dispatch = useDispatch();

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
    const delta = {
      title,
      content,
      channelId,
    };
    // Display a notification
    showNotifyLocal(delta);
  };

  const imageUrlOptions = {
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
          <View style={styles.firstBody}></View>
          <View style={styles.secondBody}></View>
        </View>
        <View style={styles.divideLine}></View>
        {/* <View style={styles.footer}></View> */}
      </View>
    </SafeKeyComponent>
  );
};

export default HomeCustomer;
