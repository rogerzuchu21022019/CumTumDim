import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import styles from './Styles';
import Router from '../../../../../../navigation/Router';
import IconFeather from 'react-native-vector-icons/Feather';

const ListItem = ({item, navigation, index}) => {
  const goto = () => {
    navigation.navigate(Router.UPDATE_TYPE_FOOD, {item});
  };

  return (
    <TouchableNativeFeedback>
      <View style={styles.itemEat}>
        <View style={styles.groupItem}>
          <View style={styles.itemNumber}>
            <Text style={styles.numberItem}>{index + 1}</Text>
          </View>
          <View style={styles.viewName}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
          <View style={styles.itemQuantity}>
            <TouchableOpacity onPress={goto}>
            <View style={styles.imageEdit}>
            <IconFeather name="edit-2" size={20} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ListItem;
