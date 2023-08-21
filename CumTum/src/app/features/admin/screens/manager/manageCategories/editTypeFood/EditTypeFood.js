import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import ListItem from './ListItem';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import {constants} from '../../../../../../shared/constants';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import Router from '../../../../../../navigation/Router';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategories} from '../../../../../product/apiProduct';
import {productSelector} from '../../../../../product/sliceProduct';
import {LOG} from '../../../../../../../../logger.config';
const log = LOG.extend(`EDIT_TYPE_FOOD.JS`);
const EditTypeFood = ({navigation}) => {
  const dispatch = useDispatch();
  const productSelect = useSelector(productSelector);
  // log.info(
  //   '🚀 ~ file: EditTypeFood.js:24 ~ EditTypeFood ~ productSelect:',
  //   productSelect,
  // );

  useEffect(() => {
    dispatch(fetchCategories());

    return () => {};
  }, []);

  const moveToScreen = nameScreen => {
    navigation.navigate(nameScreen);
  };
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>
              <TouchableOpacity onPress={goBack}>
                <View style={styles.imageBack}>
                  <IconIonicons
                    style={styles.imageReturn}
                    name="arrow-back"
                    color={constants.COLOR.WHITE}
                    size={20}
                  />
                </View>
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
          </View>
        </View>
        <View style={styles.divideLine}></View>
        <View style={styles.body}>
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={productSelect.categories}
              renderItem={({item, index}) => (
                <ListItem item={item} index={index} navigation={navigation} />
              )}
            />
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default EditTypeFood;
