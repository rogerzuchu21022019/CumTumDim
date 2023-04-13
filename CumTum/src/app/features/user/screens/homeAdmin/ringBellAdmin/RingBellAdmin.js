import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Styles.js';
import { FlashList } from '@shopify/flash-list';
import ListItem from './ListItem.js';
import {useDispatch, useSelector} from 'react-redux';
import { LOG } from '../../../../../../../logger.config.js';
import { authSelector } from '../../../sliceAuth.js';
import Router from '../../../../../navigation/Router.js';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent.js';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { constants } from '../../../../../shared/constants.js';


const RingBellAdmin = ({navigation}) => {
  const moToBack =()=>{
    navigation.navigate(Router.HOME_ADMIN)
  }
  const log = LOG.extend(`RING_BELL.JS`);


  const data = useSelector(authSelector);
  log.info("🚀 ~ file: RingBell.js:21 ~ RingBell ~ data:", data.user.notifications);


  const DATA = [
    {
      title: "Khuyến mãi giảm giá 30%",
      content:  "Khi đến của hàng ăn uống hoá đơn của bạn trên 150k sẽ được giảm giá 30% trên tổng hoá đơn",
      date:"07/04/2023",
      time: "14:20:33",
    },
    {
      title: "Khuyến mãi giảm giá 30%",
      content:  "Khi đến của hàng",
      date:"07/04/2023",
      time: "14:20:33",
    },
    {
      title: "Khuyến mãi giảm giá 30%",
      content:  "Khi đến của hàng ăn uống hoá đơn của bạn trên 150k sẽ được giảm giá 30% trên tổng hoá đơn Khi đến của hàng ăn uống hoá đơn của bạn trên 150k sẽ được giảm giá 30% trên tổng hoá đơn Khi đến của hàng ăn uống hoá đơn của bạn trên 150k sẽ được giảm giá 30% trên tổng hoá đơn",
      date:"07/04/2023",
      time: "14:20:33",
    },
    {
      title: "Khuyến mãi giảm giá 30%",
      content:  "Khi đến của hàng ăn uống hoá đơn của bạn trên 150k sẽ được giảm giá 30% trên tổng hoá đơn",
      date:"07/04/2023",
      time: "14:20:33",
    },
    {
      title: "Khuyến mãi giảm giá 30%",
      content:  "Khi đến của hàng ăn uống hoá đơn của bạn trên 150k sẽ được giảm giá 30% trên tổng hoá đơn",
      date:"07/04/2023",
      time: "14:20:33",
    }, {
      title: "Khuyến mãi giảm giá 30%",
      content:  "Khi đến của hàng ăn uống hoá đơn của bạn trên 150k sẽ được giảm giá 30% trên tổng hoá đơn",
      date:"07/04/2023",
      time: "14:20:33",
    },
    {
      title: "Khuyến mãi giảm giá 30%",
      content:  "Khi đến của hàng ăn uống hoá đơn của bạn trên 150k sẽ được giảm giá 30% trên tổng hoá đơn",
      date:"07/04/2023",
      time: "14:20:33",
    },
    {
      title: "Khuyến mãi giảm giá 30%",
      content:  "Khi đến của hàng ăn uống hoá đơn của bạn trên 150k sẽ được giảm giá 30% trên tổng hoá đơn",
      date:"07/04/2023",
      time: "14:20:33",
    },
    {
      title: "Khuyến mãi giảm giá 30%",
      content:  "Khi đến của hàng ăn uống hoá đơn ",
      date:"07/04/2023",
      time: "14:20:33",
    },
    {
      title: "Khuyến mãi giảm giá 0000",
      content:  "Khi đến của hàng ăn uống hoá đơn của bạn trên 150k sẽ được giảm giá 30% trên tổng hoá đơn",
      date:"07/04/2023",
      time: "14:20:33",
    },



   ]
  return (
    <SafeKeyComponent>
      <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.groupHeader}>
            <View style={styles.viewIcon}>
            <TouchableOpacity onPress={moToBack}>

              <IconAntDesign
              name="left"
              color={constants.COLOR.WHITE}
              size={18}
              
              />
            </TouchableOpacity>

            </View>
            <View style={styles.profile}>
              <Text style={styles.textProfile}>Thông báo</Text>
            </View> 
            <View style={styles.viewIcon}>
              <IconAntDesign
              name="delete"
              color={constants.COLOR.WHITE}
              size={18}/>
            </View>
          </View>
        </View>
        <View style={styles.body}>
        <FlashList
           data={DATA}
           estimatedItemSize={200}
           renderItem={({item, index}) => (
             <ListItem item={item} index={index} />
           )}
           keyExtractor={(item, index) => index.toString()}
        />
         


        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default RingBellAdmin;

