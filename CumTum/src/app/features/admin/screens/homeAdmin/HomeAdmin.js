import {Text, View, Image, ScrollView, FlatList} from 'react-native';
import React from 'react';
import styles from './StylesHome';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DATA from './Data';
import ItemView from './ItemView';
import {FlashList} from '@shopify/flash-list';

const HomeAdmin = ({navigation}) => {
  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.groupFinal}>
            <View style={styles.groupItemHeader}>
              <Image
                source={require('../../../../../assets/iconLogo_CumTumDim.jpg')}
              />
              <Text style={styles.textTitle}>Cum tứm đim</Text>
            </View>
            <View>
              <Image source={require('../../../../../assets/iconBell.jpg')} />
            </View>
          </View>
          <View style={styles.strikethrough}></View>
        </View>
        <View style={styles.body}>
          {/* <View style={styles.viewFlashList}>
            <FlashList
              data={DATA}
              estimatedItemSize={200}
              getItemType={(item, index) => {
                console.log(
                  '🚀 ~ file: HomeAdmin.js:50 ~ HomeAdmin ~ item:',
                  item.category,
                );
                return item.category;
              }}
              renderItem={({item}) => {
              if (item.category === 'Món thêm') {
                return <ItemView item={item} navigation={navigation} />;
              }
              return null;

              }}
            
              keyExtractor={(item, index) => index.toString()}
            />
          </View> */}
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default HomeAdmin;
