import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './StyleDelete'
import Router from '../../../../navigation/Router'

const ItemEditEat = ({item,navigation,pressHandler}) => {

  const onDelete =()=>{
    pressHandler(item.id)
  }
  
  return (
    <View style={styles.itemEat}>
              <View style={styles.itemNumber}>
                <Text style={styles.numberItem}>{item.number}</Text>
              </View>
              <View style={styles.itemImg}>
                <View
                  style={styles.image} >
                  <Image
                  style={styles.image}
                  source={{
                    uri: 'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
                  }}
                />
                  </View>
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
               <TouchableOpacity onPress={onDelete}>
                <View>
                  <Image
                    style={styles.itemImage}
                    source={item.delete}
                  />
                </View>
                </TouchableOpacity>
              </View>
    </View>
  )
}

export default ItemEditEat;