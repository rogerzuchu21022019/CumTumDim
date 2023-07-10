/* eslint-disable react-hooks/exhaustive-deps */
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import ListItem from './ListItem';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import {constants} from '../../../../../../shared/constants';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import Router from '../../../../../../navigation/Router';
import {
  fetchCategories,
  fetchDeleteCategory,
} from '../../../../../product/apiProduct';
import ModalNotify from '../../../../../../components/modal/ModalNotify';
import {LOG} from '../../../../../../../../logger.config';
import DeleteDish from '../../manageFood/deleteDish/DeleteDish';
import {useListBannerQuery} from '../../../../../../../redux/api/bannersApi';
import {Banner} from '../../../../../../../redux/api/types';

const DeleteBanner = ({navigation}) => {
  const {data} = useListBannerQuery();
  const goBack = () => {
    navigation.goBack();
  };
  const [indexSelected, setIndexSelected] = useState<number>(0);

  const moveToScreen = (nameScreen: string) => {
    navigation.navigate(nameScreen);
  };

  const onTapImage = (index: number) => {
    console.log('🚀 ~ file: DeleteBanner.tsx:40 ~ onTapImage ~ index:', index);
    setIndexSelected(index);
  };
  const onDrag = (x?: number, y?: number) => {
    console.log('ON_DRAG', x, y);
    // setIsPositionRemove(true);
  };

  const onDrop = (x?: number, y?: number, index?: number) => {};

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
        <View style={styles.divideLine}></View>

        <View style={styles.body}>
          <View>
            <View>
              <Text>{indexSelected}</Text>
            </View>
            {data?.data.map((item, index) => (
              <ListItem
                key={index}
                item={item}
                onDrag={onDrag}
                onDrop={onDrop}
                onTapImage={onTapImage}
                index={index}
                navigation={navigation}
              />
            ))}
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default DeleteBanner;
