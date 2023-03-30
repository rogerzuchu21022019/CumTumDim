import { StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native'
import Router from '../../../../../navigation/Router'
import DATA from '../Data'
import styles from '../../../../customer/screens/histories/history/StylesHistory'
import FastImage from 'react-native-fast-image'




const ItemView = ({ item, navigation ,index}) => {
    // const goto =()=>{
    //     navigation.navigate(Router.DETAIL_CART_ADMIN)
    // }

    return (

        <View style={styles.itemOder}>
            <View style={styles.viewImage}>
               <Text style={styles.itemText}>{index+1} </Text>
            </View>
            <View style={styles.viewText}>

                <View style={styles.viewText1}>
                    <Text style={styles.itemText1}>{item.name}</Text>
                    <Text style={styles.itemText2}>{item.category}</Text>
                </View>

                <View style={styles.viewText2}>
                    <Text style={styles.itemText4}>{item.days}</Text>
                    <Text style={styles.itemText5}>{item.time}</Text>
                    <Text style={styles.itemText3}>{item.price}</Text>

                </View>

            </View>
        </View>

    )


}

export default ItemView

