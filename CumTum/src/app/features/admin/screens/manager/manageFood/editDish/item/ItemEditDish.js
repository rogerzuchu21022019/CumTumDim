import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './StyleItemEditDish';
import Router from '../../../../../../../navigation/Router';
import IconFeather from 'react-native-vector-icons/Feather';
import SafeKeyComponent from '../../../../../../../components/safe_area/SafeKeyComponent';

const ItemEditDish = ({item, index, navigation}) => {
  const goto = () => {
    navigation.navigate(Router.UPDATE_DISH, {item});
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.itemEat}>
          <View style={styles.itemNumber}>
            <Text style={styles.numberItem}>{index + 1}</Text>
          </View>
          <View style={styles.image}>
            <Image
              style={styles.image}
              source={{
                uri: item.imageUrl,
              }}
            />
          </View>
          <View style={styles.boxText}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
            <View>
              {item.price === 0 ? (
                <Text style={styles.itemPrice}>Free</Text>
              ) : (
                <Text style={styles.itemPrice}>{item.price} K</Text>
              )}
            </View>
          </View>
          <TouchableOpacity onPress={goto}>
            <View style={styles.imageEdit}>
              <IconFeather name="edit-2" size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default ItemEditDish;
