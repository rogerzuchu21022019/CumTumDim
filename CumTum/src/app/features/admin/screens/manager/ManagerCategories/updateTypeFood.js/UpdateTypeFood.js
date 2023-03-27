import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import FastImage from 'react-native-fast-image';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {constants} from '../../../../../../shared/constants';
import Router from '../../../../../../navigation/Router';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';

const UpdateTypeFood = ({navigation, route}) => {
  const {item} = route.params;

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(Router.MANAGE);
                }}>
                <IconIonicons
                  style={styles.imageReturn}
                  name="arrow-back"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </TouchableOpacity>
              {/* Code back to HomeScreen */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(Router.HOME_ADMIN);
                }}>
                <View style={styles.viewLogo}>
                  <FastImage
                    style={styles.imageLogo}
                    source={require('../../../../../../../assets/Logo_CumTumDim.png')}
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
            <View style={styles.viewTextInput}>
              <TextInput style={styles.textInput} placeholder="Nhập loại món ăn">
                {item.name}
                </TextInput>                
            </View>
            <View style={styles.viewBTN}>
                <Text style={styles.btn}>
                  Thêm
                </Text>
            </View>

        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default UpdateTypeFood;
