import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './StyleItemDelete';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Router from '../../../../../../../navigation/Router';
import SafeKeyComponent from '../../../../../../../components/safe_area/SafeKeyComponent';
import ModalNotify from '../../../../../../../components/modal/ModalNotify';
import {useDispatch} from 'react-redux';
import {fetchDeleteDish} from '../../../../../../product/apiProduct';

const ItemEditEat = ({item, navigation, index}) => {
  const dispatch = useDispatch();

  const messageSure1 = `Bạn có chắc là ?`;
  const messageSure2 = `Muốn xoá món ăn này hay không ?`;

  const [isShowModal, setIsShowModal] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  const onDelete = () => {
    handleClick();
  };

  const handleClick = id => {
    setIsShowModal(!isShowModal);
    setIsCancel(!isCancel);
    dispatch(fetchDeleteDish(id));
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.itemEat}>
          <View style={styles.itemNumber}>
            <Text style={styles.numberItem}>{index + 1}</Text>
          </View>
          <View style={styles.image}>
            <Image
              style={styles.image}
              source={{
                uri: item.imageUrl,
              }}
            />
          </View>
          <View style={styles.boxText}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
            <View>
              {item.price === 0 ? (
                <Text style={styles.itemPrice}>Free</Text>
              ) : (
                <Text style={styles.itemPrice}>{item.price} K</Text>
              )}
            </View>
          </View>
          <TouchableOpacity onPress={onDelete}>
            <View style={styles.imageEdit}>
              <IconMaterialIcons name="delete-forever" size={20} />
            </View>
          </TouchableOpacity>
        </View>
        <ModalNotify
          message1={messageSure1}
          message2={messageSure2}
          isShowModal={isShowModal}
          isCancel={isCancel}
          handleClick={handleClick}
          navigation={navigation}
          id={item._id}
        />
      </View>
    </SafeKeyComponent>
  );
};

export default ItemEditEat;
