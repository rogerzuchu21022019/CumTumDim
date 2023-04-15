import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import ListItem from './ListItem';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import {constants} from '../../../../../../shared/constants';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import Router from '../../../../../../navigation/Router';
const DeleteTypeFood = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  const moveToScreen = nameScreen => {
    navigation.navigate(nameScreen);
  };

  const [data, setData] = useState([
    {
      id: '1',
      name: 'Món ăn',
    },
    {
      id: '2',
      name: 'Đồ ăn thêm',
    },
    {
      id: '3',
      name: 'Topping',
    },
    {
      id: '4',
      name: 'Khác',
    },
  ]);
  const pressHandler = id => {
    setData(itemData => {
      return itemData.filter(data => data.id != id);
    });
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>
              <TouchableOpacity onPress={goBack}>
                <IconIonicons
                  style={styles.imageReturn}
                  name="arrow-back"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </TouchableOpacity>
              {/* Code back to HomeScreen */}
              <TouchableOpacity onPress={() => moveToScreen(Router.HOME_ADMIN)}>
                <View style={styles.viewLogo}>
                  <FastImage
                    style={styles.imageLogo}
                    source={require('../../../../../../../assets/Logo_CumTumDim.png')}
                  />
                  <Text style={styles.textTitle}>Cum tứm đim</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.rightHeader}>
              <IconOcticons
                name="bell-fill"
                color={constants.COLOR.RED}
                size={20}
              />
            </View> */}
          </View>
        </View>
        <View style={styles.divideLine}></View>
        <View style={styles.body}>
          <View>
            <FlatList
              data={data}
              renderItem={({item, index}) => (
                <ListItem
                  item={item}
                  index={index}
                  navigation={navigation}
                  pressHandler={pressHandler}
                />
              )}
            />
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default DeleteTypeFood;
