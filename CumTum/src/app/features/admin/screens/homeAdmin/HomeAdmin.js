import {Text, View, Image, ScrollView, FlatList} from 'react-native';
import React from 'react';
import styles from './StylesHome';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DATA from './Data';
import ItemView from './ItemView';
import {FlashList} from '@shopify/flash-list';
import {constants} from '../../../../shared/constants';
import FastImage from 'react-native-fast-image';
import IconOcticons from 'react-native-vector-icons/Octicons';
const HomeAdmin = ({navigation}) => {
  return (
    <SafeKeyComponent>
      <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>
              <FastImage
                style={styles.imageLogo}
                source={require('../../../../../assets/iconLogo_CumTumDim.jpg')}
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
          <View style={styles.divideLine}></View>
        </View>
        <View style={styles.divideLine}></View>
        <View style={styles.body}>
          <View style={styles.viewFlashList}>
            {/* <FlashList
              data={DATA}
              estimatedItemSize={200}
              getItemType={(item, index) => {
                return item.category;
              }}
              renderItem={({item}) => {
                if (item.category === 'Món thêm') {
                  return <ItemView item={item} navigation={navigation} />;
                }
                return null;
              }}
              keyExtractor={(item, index) => index.toString()}
            /> */}
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default HomeAdmin;
