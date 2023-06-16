import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import React, {useRef} from 'react';
import styles from './Styles';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {constants} from '../../../../../shared/constants';
const ListItem = ({item, handleRemove}) => {
  // console.log('item', item);
  const handleClose = () => {
    handleRemove();
    closeSwipeable();
  };
  const swipeableRef = useRef(null);

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
    swipeableRef.current.close();
  };
  return (
    <TouchableNativeFeedback>
      <GestureHandlerRootView>
        <Swipeable renderLeftActions={swipeAction} ref={swipeableRef}>
          <View style={styles.groupItemBody}>
            <View style={styles.listItem}>
              <View style={styles.leftItem}>
                <View style={styles.viewTextLeft}>
                  <Text style={styles.textTitleLeft}>{item.title}</Text>
                </View>
                <View style={styles.viewTextLeft}>
                  <Text style={styles.textContent}>{item.content}</Text>
                </View>
              </View>
              <View style={styles.rightItem}>
                <View style={styles.viewTextRight}>
                  <Text style={styles.textRight}>{item.date}</Text>
                </View>
                <View style={styles.viewTextRight}>
                  <Text style={styles.textRight}>{item.time}</Text>
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
