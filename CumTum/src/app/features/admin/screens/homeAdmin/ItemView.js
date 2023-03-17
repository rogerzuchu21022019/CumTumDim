import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Router from '../../../../navigation/Router'
import DATA from './Data'
import styles from './StylesHome'



const ItemView = ({item,navigation}) => {
    const goto =()=>{
        navigation.navigate(Router.DETAIL_CART_ADMIN)
    }
  return (
    <TouchableOpacity onPress={goto}>
        <View style={styles.itemOder}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>||</Text>
            <Text style={styles.itemText}>{item.price}</Text>
        </View>
    </TouchableOpacity>    
    )
   
  
}

export default ItemView

