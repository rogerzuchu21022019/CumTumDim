import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './StylesHistory'
import FastImage from 'react-native-fast-image';
import { constants } from '../../../../../shared/constants';
import { useSelector } from 'react-redux';
import { cartSelector } from '../../../../carts/sliceOrder';
import { FlashList } from '@shopify/flash-list';
import ItemView from './ItemView';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
// import HistoryNoItems from './historynoitems/HistoryNoItems';
import DATA from '../Data';
const History = (navigation) => {
  const data = useSelector(cartSelector);
  console.log("🚀 ~ file: History.js:12 ~ History ~ data:", data)

  return (
    <SafeKeyComponent>

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Lịch sử </Text>
        </View>
        <View style={styles.divideLine}></View>
        <View style={styles.body}>
  
            <View style={styles.viewFlashList}>

              <FlashList
                data={DATA}
                estimatedItemSize={200}
                renderItem={({ item, index }) => <ItemView item={item} index={index} />

                }
                keyExtractor={(item) => item.id.toString()}
              />
        
          </View>



        </View>
      </View>
    </SafeKeyComponent>
  )
}


export default History