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
          <View>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
          <View style={styles.itemQuantity}>
            <TouchableOpacity onPress={goto}>
              <View>
                <Image
                  style={styles.itemImage}
                  source={require('../../../../../../../assets/EditImages.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ListItem;
