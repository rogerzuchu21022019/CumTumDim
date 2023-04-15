import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import {formatTime} from '../../../../../shared/utils/Moment';

const ListItem = ({item, navigation, onDisable}) => {
  // console.log('item', item);
  const [newItem, setNewItem] = useState(item);

  const handleDisable = () => {
    const updatedItem = {
      ...newItem,
      isRead: true,
    };
    setNewItem(updatedItem);
    onDisable(updatedItem);
    navigation.goBack();
  };
  
  

  return (
    <SafeKeyComponent>
      <TouchableOpacity onPress={handleDisable} 
      disabled={newItem.isRead}
      >
        <View style={styles.groupItemBody}>
          <View style={styles.listItem}>
            <View style={styles.leftItem}>
              <View style={styles.viewTextLeft}>
                <Text style={styles.textTitleLeft}>{item.title}</Text>
              </View>
              <View style={styles.viewTextLeft}>
                <Text style={styles.textContent}>{item.content}</Text>
              </View>
              <View style={styles.viewTextLeft}>
                {item.createdAt ? (
                  <Text style={styles.textContent}>
                    Ngày: {formatTime(item.createdAt)}
                  </Text>
                ) : null}
                <Text style={styles.textContent}>
                  {item.isRead === true ? 'Đã xem' : 'Chưa xem'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </SafeKeyComponent>
  );
};

export default ListItem;
