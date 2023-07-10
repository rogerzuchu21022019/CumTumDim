/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import React, {useRef, useFocusEffect, useEffect, useCallback} from 'react';
import styles from './Styles';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {constants} from '../../../../../shared/constants';
const ListItem = ({
  item,
  handleRemove,
  handleSwipeableOpen,
  indexSelected,
  index,
  navigation,
}) => {
  // console.log('item', item);
  const handleClose = () => {
    handleRemove();
    closeSwipeable();
    navigation.goBack();
  };
  const swipeableRef = useRef();

  const swipeAction = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity style={styles.trashImage} onPress={handleClose}>
        <Animated.View
          style={[
            {
              transform: [{translateX: trans}, {scale: trans}],
            },
          ]}>
          <IconMaterialIcons
            name="delete-forever"
            color={constants.COLOR.RED}
            size={40}
          />
        </Animated.View>
      </TouchableOpacity>
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
          <View style={styles.groupItemBody}>
            <View style={styles.listItem}>
              <View style={styles.leftItem}>
                <View>
                  <Text style={styles.textTitleLeft}>{item.title}</Text>
                </View>
                <View>
                  <Text style={styles.textContent}>{item.content}</Text>
                </View>
              </View>
              <View>
                <View>
                  <Text>{item.date}</Text>
                </View>
                <View>
                  <Text>{item.time}</Text>
                </View>
              </View>
            </View>
          </View>
        </Swipeable>
      </GestureHandlerRootView>
    </TouchableNativeFeedback>
  );
};

export default ListItem;
