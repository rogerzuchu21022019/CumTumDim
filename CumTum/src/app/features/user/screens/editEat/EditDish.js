import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import styles from './StyleEditEat';
import ItemEditEat from './ItemEditEat';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import { constants } from '../../../../shared/constants';
import HomeAdmin from '../homeAdmin/HomeAdmin';
import Router from '../../../../navigation/Router';
const EditDish = ({ navigation }) => {
  const [data, setData] = useState([
    {
      id: '1',
      number: '1',
      uri: 'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name: 'Suon bi',
      price: '25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '2',
      number: '1',
      uri: 'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name: 'Suon bi',
      price: '25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '3',
      number: '1',
      uri: 'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name: 'Suon bi',
      price: '25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '4',
      number: '1',
      uri: 'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name: 'Suon bi',
      price: '25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '5',
      number: '1',
      uri: 'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name: 'Suon bi',
      price: '25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '6',
      number: '1',
      uri: 'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name: 'Suon bi',
      price: '25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },
    {
      id: '7',
      number: '1',
      uri: 'https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg',
      name: 'Suon bi',
      price: '25k',
      edit: require('../../../../../assets/EditImages.png'),
      delete: require('../../../../../assets/DeleteImages.png'),
    },

  ]);
  const pressHandler = (id) => {
    setData((itemData) => {
      return itemData.filter(data => data.id != id)
    })
  }




  return (
    <SafeKeyComponent>
      <View style={styles.container}>
    
      <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <IconIonicons
                  style={styles.imageReturn}
                  name="arrow-back"
                  color={constants.COLOR.WHITE}
                  size={20}
                />
              </TouchableOpacity>
              {/* Code back to HomeScreen */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(Router.HOME_ADMIN);
                }}>
                <View style={styles.viewLogo}>
                  <FastImage
                    style={styles.imageLogo}
                    source={require('../../../../../assets/iconLogo_CumTumDim.jpg')}
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
          <View style={styles.groupFlatlist}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <ItemEditEat item={item} navigation={navigation}  />
              )}
            />
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default EditDish;
