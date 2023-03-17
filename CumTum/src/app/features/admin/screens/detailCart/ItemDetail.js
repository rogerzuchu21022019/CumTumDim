import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import styles from './StylesDetailCard';

const ItemDetail = ({item}) => {
  return (
      <View style={styles.itemFinal}>
        <View style={styles.itemTitle}>
          <Text style={styles.nameTitle}>{item.title}</Text>
        </View>
        <View style={styles.itemEat}>
          <View style={styles.itemNumber}>
            <Text style={styles.numberItem}>{item.number}</Text>
          </View>
          <View style={styles.itemImg}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
              }}
            />
          </View>
          <View style={styles.groupItem}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
            <View>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          </View>
          <View style={styles.itemQuantity}>
            <Text style={styles.numberItem}>{item.quantity}</Text>
          </View>
        </View>
      </View>
  );
};

export default ItemDetail;

