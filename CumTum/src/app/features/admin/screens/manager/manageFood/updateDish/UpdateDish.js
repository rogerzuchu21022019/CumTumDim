import {StyleSheet, Text, View, Image, TextInput,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import styles from './StyleUpdateDish';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import FastImage from 'react-native-fast-image';
import Router from '../../../../../../navigation/Router';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { constants } from '../../../../../../shared/constants';



const UpdateDish = ({navigation, route}) => {
  const {item} = route.params;
  const [editName, setEditName] = useState('');
  const [editPrice, setEditPrice] = useState('');
  const handleSave = () => {
    const newData = data.map((item) =>
      item.id === editId ? { ...item, name: editName, price: editPrice } : item
    );
    setData(newData);
    setEditId(null);
    setEditName('');
    setEditPrice('');
  };

  console.log('item', item);
  return (
    <SafeKeyComponent>
      <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.mainHeader}>
            <View style={styles.leftHeader}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(Router.MANAGE);
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
                onPress={moveToScreen(Router.HOME_ADMIN)}>
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
        <View style={styles.body}>
          <View style={styles.groupFinalBody}>
            <View style={styles.viewImage}>
              <FastImage
                style={styles.itemImage}
                source={item.uri}
                
              />
            </View>
            <View style={styles.groupItem}>
              <View style={styles.viewNameEat}>
                <Text style={styles.itemNameEat}>Tên món ăn</Text>
              </View>
              <View>
              <TextInput style={styles.viewInputPrice}>
                  {item.name}
              </TextInput>
            </View>
            </View>
            <View style={styles.groupItem}>
              <View style={styles.viewNameEat}>
                <Text style={styles.itemNameEat}>Tên món ăn</Text>
              </View>
              <View>
              <TextInput style={styles.viewInputPrice}>
                  {item.price}
              </TextInput>
            </View>
            </View>
           
          </View>
        </View>
        <View style={styles.footer}>
        <TouchableOpacity onPress={handleSave}>
            <View style={styles.viewBTN}>
              <Text style={styles.textBTN}>Lưu</Text>
            </View>
            </TouchableOpacity>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default UpdateDish;
