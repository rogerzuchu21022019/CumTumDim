/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Animated,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from './Styles';
import ModalNotify from '../../../../../../components/modal/ModalNotify';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';
import {Banner} from '../../../../../../../redux/api/types';
import {useDeleteBannerMutation} from '../../../../../../../redux/api/bannersApi';
import {PropsItemBanner} from '../../../../../../components/types';
import {constants} from '../../../../../../shared/constants';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Router from '../../../../../../navigation/Router';
import {renderLoading} from '../../../../../../shared/utils/LoadingRender';
import {useFocusEffect} from '@react-navigation/native';

const ItemEditEat = (props: PropsItemBanner) => {
  const {item, index, navigation, indexSelected, handleSwipeableOpen} = props;

  const messageSure1 = `Bạn có chắc là ? `;
  const messageSure2 = `Muốn xoá bảng quảng cáo này không?`;
  const [deleteBanner] = useDeleteBannerMutation();

  const onDelete = () => {
    setIsShowModal(true);
    setIsCancel(true);
  };
  const [isShowModal, setIsShowModal] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  const handleClick = async (id: string) => {
    const banner: Banner = {
      _id: id,
    };
    await deleteBanner(banner).unwrap();
    setIsShowModal(false);
    setIsCancel(false);
  };

  const handleClose = () => {
    // handleRemove();
    onDelete();
    closeSwipeable();
  };

  const swipeableRef = useRef<Swipeable>();
  const swipeAction = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    // styles.trashImage
    return (
      <Animated.View
        className={'flex-row'}
        style={[
          styles.trashImage,
          [
            {
              transform: [{translateX: trans}, {scale: trans}],
            },
          ],
        ]}>
        <TouchableOpacity onPress={handleClose}>
          <IconMaterialIcons
            name="delete-forever"
            color={constants.COLOR.RED}
            size={60}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(Router.UPDATE_BANNER, {item});
          }}>
          <IconMaterialIcons
            name="edit"
            color={constants.COLOR.RED}
            size={60}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  };
  const closeSwipeable = () => {
    if (swipeableRef.current) {
      swipeableRef.current.close();
    }
  };

  useEffect(() => {
    indexSelected !== index && closeSwipeable();
  }, [indexSelected]);

  return (
    <TouchableNativeFeedback>
      <GestureHandlerRootView>
        <Swipeable
          key={index}
          renderLeftActions={swipeAction}
          onSwipeableOpen={() => handleSwipeableOpen(index)}
          leftThreshold={2}
          ref={swipeableRef}>
          <View style={styles.itemEat}>
            <View style={styles.groupItem}>
              <View style={styles.itemNumber}>
                <Text style={styles.numberItem}>{index + 1}</Text>
              </View>
              <View style={styles.viewName}>
                <FastImage
                  className="w-[300px] h-[150px]"
                  source={{uri: item.imageUrl ? item.imageUrl : ''}}
                />
              </View>
            </View>
            <ModalNotify
              message1={messageSure1}
              message2={messageSure2}
              isShowModal={isShowModal}
              isCancel={isCancel}
              handleClick={handleClick}
              navigation={navigation}
              id={item._id}
            />
          </View>
        </Swipeable>
      </GestureHandlerRootView>
    </TouchableNativeFeedback>
  );
};

export default ItemEditEat;
