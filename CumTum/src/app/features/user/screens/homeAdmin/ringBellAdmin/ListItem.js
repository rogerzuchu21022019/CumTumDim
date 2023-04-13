import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
const ListItem = ({item, navigation}) => {
  console.log('item', item);
  const [isClicked, setIsClicked] = useState(false);

  const onDisable = () => {
    setIsClicked(true);
    navigation.goBack();
  };
  return (
    <SafeKeyComponent>
      {isClicked === false ? (
        <TouchableOpacity onPress={onDisable}>
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
        </TouchableOpacity>
      ) : (
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
      )}
    </SafeKeyComponent>
  );
};

export default ListItem;
