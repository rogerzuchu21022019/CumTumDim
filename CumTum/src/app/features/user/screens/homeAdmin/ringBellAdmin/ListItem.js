import {View, Text} from 'react-native';
import React from 'react';
import styles from './Styles';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
const ListItem = ({item}) => {
  console.log('item', item);
  return (
    <SafeKeyComponent>
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
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default ListItem;
