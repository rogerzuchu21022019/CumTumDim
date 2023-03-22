import {StyleSheet, Text, View, Image, TextInput,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import styles from './StyleUpdateDish';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import FastImage from 'react-native-fast-image';
import Router from '../../../../navigation/Router';


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
          <View style={styles.groupFinal}>
            <View style={styles.groupItemHeader}>
              <Image source={require('../../../../../assets/iconLogo.png')} />
              <Text style={styles.textTitle}>Cum tứm đim</Text>
            </View>
            <View>
              <Image source={require('../../../../../assets/iconBell.jpg')} />
            </View>
          </View>
          <View style={styles.strikethrough}></View>
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
              <TextInput style={styles.viewInputPrice}y>
                  {item.price}
              </TextInput>
            </View>
            </View>
            <TouchableOpacity onPress={handleSave}>
            <View style={styles.viewBTN}>
              <Text style={styles.textBTN}>Lưu</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default UpdateDish;
