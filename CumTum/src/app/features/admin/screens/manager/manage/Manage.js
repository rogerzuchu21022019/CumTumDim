import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import styleManager from './StyleManage';
import FastImage from 'react-native-fast-image';
import Router from '../../../../../navigation/Router';
import {LOG} from '../../../../../../../logger.config';
const log = LOG.extend(`MANAGE.JS`);
const Manage = ({navigation}) => {
  const moveToScreen = name => {
    navigation.navigate(name);
  };

  return (
    <SafeKeyComponent>
      <View style={styleManager.container}>
        <View style={styleManager.header}>
          <View style={styleManager.mainHeader}>
            <View style={styleManager.leftHeader}>
              <FastImage
                style={styleManager.imageLogo}
                source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
              />
              <Text style={styleManager.textTitle}>Cum tứm đim</Text>
            </View>
          </View>
        </View>
        <View style={styleManager.body}>
          <View style={styleManager.groupBody}>
            {/* ()=> sử dụng khi viết hàm có tham số truyền vào 
            còn nameFunction sử dụng khi không có tham số truyền vào
            */}
            <TouchableOpacity
              onPress={() => moveToScreen(Router.MANAGE_CATEGORIES)}>
              <View style={styleManager.btnAll}>
                <Image
                  source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
                />
                <Text style={styleManager.textAll}>Quản lý loại món ăn</Text>
              </View>
            </TouchableOpacity>
            {/* Quản lý món ăn */}
            <TouchableOpacity onPress={() => moveToScreen(Router.MANAGE_FOOD)}>
              <View style={styleManager.btnAll}>
                <Image
                  source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
                />
                <Text style={styleManager.textAll}>Quản lý món ăn</Text>
              </View>
            </TouchableOpacity>
               {/* Quản lý banner */}
            <TouchableOpacity onPress={() => moveToScreen(Router.MANAGE_BANNER)}>
              <View style={styleManager.btnAll}>
                <Image
                  source={require('../../../../../../assets/iconLogo_CumTumDim.jpg')}
                />
                <Text style={styleManager.textAll}>Quản lý quảng cáo</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styleManager.footer}></View>
      </View>
    </SafeKeyComponent>
  );
};

export default Manage;
