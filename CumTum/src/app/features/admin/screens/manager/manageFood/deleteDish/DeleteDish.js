import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import styles from './StyleDelete';
import ListItemDelete from './ListItemDelete';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import {constants} from '../../../../../../shared/constants';
import Router from '../../../../../../navigation/Router';
const DeleteDish = ({navigation}) => {
  const pressHandler = id => {
    setData(itemData => {
      return itemData.filter(data => data.id != id);
    });
  };

  const goBack = () => {
    navigation.goBack();
  };
  const moveToScreen = nameScreen => {
    navigation.navigate(nameScreen);
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>
              <TouchableOpacity onPress={goBack}>
                <IconIonicons
                  style={styles.imageReturn}
                  name="arrow-back"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </TouchableOpacity>
              {/* Code back to HomeScreen */}
              <TouchableOpacity onPress={() => moveToScreen(Router.HOME_ADMIN)}>
                <View style={styles.viewLogo}>
                  <FastImage
                    style={styles.imageLogo}
                    source={require('../../../../../../../assets/iconLogo_CumTumDim.jpg')}
                  />
                  <Text style={styles.textTitle}>Cum tứm đim</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.rightHeader}>
              <IconOcticons
                name="bell-fill"
                color={constants.COLOR.RED}
                size={20}
              />
            </View> */}
          </View>
        </View>
        <View style={styles.divideLine}></View>
        <View style={styles.body}>
          <View style={styles.groupFlatlist}>
            {/* <FlatList
              data={data}
              renderItem={({ item }) => (
                <ListItemDelete item={item} navigation={navigation} pressHandler={pressHandler} />
              )}
            /> */}
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default DeleteDish;
