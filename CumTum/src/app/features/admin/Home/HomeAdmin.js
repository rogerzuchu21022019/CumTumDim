import {Text, View, Image, ScrollView, FlatList} from 'react-native';
import React from 'react';
import styles from './StylesHome';
import SafeKeyComponent from '../../../components/safe_area/SafeKeyComponent';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DATA from './Data';

const HomeAdmin = () => {
  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.groupFinal}>
            <View style={styles.groupItemHeader}>
              <Image
                source={require('../../../../assets/iconLogo_CumTumDim.jpg')}
              />
              <Text style={styles.textTitle}>Cum tứm đim</Text>
            </View>
            <View>
              <Image source={require('../../../../assets/iconBell.jpg')} />
            </View>
          </View>
          <View style={styles.strikethrough}></View>
        </View>
        <View style={styles.body}>
          <View style={styles.viewFlashList}>
            <FlatList
              data={DATA}
              renderItem={({item}) => (
                <View style={styles.itemOder}>
                  <Text style={styles.itemText}>{item.name}</Text>
                  <Text style={styles.itemText}>||</Text>
                  <Text style={styles.itemText}>{item.price}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default HomeAdmin;
