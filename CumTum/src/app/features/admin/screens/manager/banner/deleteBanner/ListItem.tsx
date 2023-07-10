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
import React, {useRef, useState} from 'react';
import styles from './Styles';
import ModalNotify from '../../../../../../components/modal/ModalNotify';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';
import {Banner} from '../../../../../../../redux/api/types';
import {useDeleteBannerMutation} from '../../../../../../../redux/api/bannersApi';
import {PropsItemBanner} from '../../../../../../components/types';
import {constants} from '../../../../../../shared/constants';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const ItemEditEat = (props: PropsItemBanner) => {
  const {item, index, navigation, onTapImage, onDrag, onDrop} = props;

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
  const swipeableRef = useRef<Swipeable>(null);
  const xPosition = useSharedValue(0);
  const yPosition = useSharedValue(0);
  const start = useSharedValue({x: 0, y: 0});
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: xPosition.value}, {translateY: yPosition.value}],
    };
  });
  const swipeAction = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [1, 100],
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
        <TouchableOpacity onPress={() => console.log('eidt')}>
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

  const gestureTap = Gesture.Tap().onBegin(event => {
    runOnJS(onTapImage)(index);
    // runOnJS(setZIndex)(20);
  });
  const gesturePan = Gesture.Pan()
    .onBegin(() => {
      runOnJS(onTapImage)(index);
      // runOnJS(setZIndex)(20);
    })
    .onUpdate(event => {
      xPosition.value = event.translationX + start.value.x;
      yPosition.value = event.translationY + start.value.y;
      if (onDrag) {
        runOnJS(onDrag)(event.absoluteX, event.absoluteY);
      }
    })
    .onEnd(event => {
      start.value.x = xPosition.value;
      start.value.y = yPosition.value;
      if (onDrop) {
        runOnJS(onDrop)(event.absoluteX, event.absoluteY, index);
      }
    });
  return (
    <TouchableNativeFeedback>
      <GestureHandlerRootView>
        <Swipeable renderLeftActions={swipeAction} ref={swipeableRef}>
          <GestureDetector gesture={gestureTap}>
            <GestureDetector gesture={gesturePan}>
              <Animated.View style={[animatedStyle]}>
                <View style={styles.itemEat}>
                  <View style={styles.groupItem}>
                    <View style={styles.itemNumber}>
                      <Text style={styles.numberItem}>{index + 1}</Text>
                    </View>
                    <View style={styles.viewName}>
                      <FastImage
                        className="w-[300px] h-[200px]"
                        source={{uri: item.imageUrl ? item.imageUrl : ''}}
                      />
                    </View>

                    {/* <View style={styles.itemQuantity}>
                <TouchableOpacity onPress={onDelete}>
                <View style={styles.imageEdit}>
                <IconFeather name="trash-2" size={20} />
                </View>
                </TouchableOpacity>
              </View> */}
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
              </Animated.View>
            </GestureDetector>
          </GestureDetector>
        </Swipeable>
      </GestureHandlerRootView>
    </TouchableNativeFeedback>
  );
};

export default ItemEditEat;
