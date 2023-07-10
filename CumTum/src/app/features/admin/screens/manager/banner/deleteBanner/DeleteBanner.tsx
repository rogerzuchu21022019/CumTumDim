/* eslint-disable react/self-closing-comp */
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

import {LOG} from '../../../../../../../../logger.config';
import {useListBannerQuery} from '../../../../../../../redux/api/bannersApi';
import {renderLoading} from '../../../../../../shared/utils/LoadingRender';
import {FlashList} from '@shopify/flash-list';

const DeleteBanner = ({navigation}: any) => {
  const {data, isLoading} = useListBannerQuery();
  const [indexSelected, setIndexSelected] = useState(0);
  const goBack = () => {
    navigation.goBack();
  };

  const moveToScreen = (nameScreen: string) => {
    navigation.navigate(nameScreen);
  };

  const handleSwipeableOpen = (index: number) => {
    console.log(
      '🚀 ~ file: DeleteBanner.tsx:39 ~ handleSwipeableOpen ~ index:',
      index,
    );
    setIndexSelected(index);
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
          </View>
        </View>
        <View style={styles.divideLine}></View>
        <View style={styles.body}>
          <View>
            {isLoading ? (
              renderLoading()
            ) : (
              <FlatList
                data={data?.data}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}) => (
                  <ListItem
                    handleSwipeableOpen={() => handleSwipeableOpen(index)}
                    indexSelected={indexSelected}
                    isLoading={isLoading}
                    item={item}
                    index={index}
                    navigation={navigation}
                  />
                )}
                keyExtractor={item => item._id!!}
              />
            )}
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default DeleteBanner;
