import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import {constants} from '../../../../../../shared/constants';
import Router from '../../../../../../navigation/Router';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';

const AddTypeFood = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  const moveToScreen = nameScreen => {
    navigation.navigate(nameScreen);
  };
  const handleAdd = () => {
    navigation.goBack();
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
        <View style={styles.body}>
          <View style={styles.imageCartToonTop}>
            <Image
              style={styles.imageCartToonHead}
              source={require('../../../../../../../assets/cartToon.png')}
            />
          </View>
          <View style={styles.viewTextInput}>
            <View style={styles.viewInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Nhập loại món ăn"
              />
            </View>
          </View>
          <TouchableOpacity onPress={handleAdd}>
            <View style={styles.viewBTN}>
              <Text style={styles.btn}>Thêm</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.cartToon}>
            <Image
              style={styles.imageCartToon}
              source={require('../../../../../../../assets/cartToon2.png')}
            />
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default AddTypeFood;
