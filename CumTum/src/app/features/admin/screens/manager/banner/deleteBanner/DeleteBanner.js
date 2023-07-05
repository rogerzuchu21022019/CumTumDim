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
import {productSelector} from '../../../../../product/sliceProduct';
import {
  fetchCategories,
  fetchDeleteCategory,
} from '../../../../../product/apiProduct';
import ModalNotify from '../../../../../../components/modal/ModalNotify';
import {LOG} from '../../../../../../../../logger.config';
import DeleteDish from '../../manageFood/deleteDish/DeleteDish';

const DeleteBanner = ({navigation}) => {
  const productSelect = useSelector(productSelector);
  

  const goBack = () => {
    navigation.goBack();
  };

  const moveToScreen = nameScreen => {
    navigation.navigate(nameScreen);
  };

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCategories());
    return () => {};
  }, []);

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
            <FlatList
              // data={productSelect.categories}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <ListItem
                  item={item}
                  index={index}
                  navigation={navigation}
                />
              )}
              keyExtractor={item => item._id.toString()}
            />
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default DeleteBanner;
