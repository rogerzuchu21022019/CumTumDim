import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'

const ItemEditEat = ({item,navigation,pressHandler,index}) => {

  const onDelete =()=>{
    pressHandler(item.id)
  }
  
  return (
    <View style={styles.itemEat}>
      <View style={styles.groupItem}>
        <View style={styles.itemNumber}>
          <Text style={styles.numberItem}>{index+1}</Text>
        </View>
        <View>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <View style={styles.itemQuantity}>
          <TouchableOpacity onPress={onDelete}>
            <View>
              <Image
                style={styles.itemImage}
                source={require('../../../../../../../assets/DeleteImages.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ItemEditEat;
