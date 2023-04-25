import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import ModalNotify from '../../../../../../components/modal/ModalNotify';
import {useDispatch} from 'react-redux';
import IconFeather from 'react-native-vector-icons/Feather';

import {
  fetchCategories,
  fetchDeleteCategory,
} from '../../../../../product/apiProduct';

const ItemEditEat = ({item, navigation, index}) => {
  const dispatch = useDispatch();
  const messageSure1 = `Bạn có chắc là ? `;
  const messageSure2 = `Muốn xoá loại món ăn này hay không ?`;

  const onDelete = () => {
    handleClick();
  };
  const [isShowModal, setIsShowModal] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  const handleClick = id => {
    setIsShowModal(!isShowModal);
    setIsCancel(!isCancel);
    dispatch(fetchDeleteCategory(id));
    dispatch(fetchCategories());
  };
  return (
    <TouchableNativeFeedback>
      <View style={styles.itemEat}>
        <View style={styles.groupItem}>
          <View style={styles.itemNumber}>
            <Text style={styles.numberItem}>{index + 1}</Text>
          </View>
          <View style={styles.viewName}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
          <View style={styles.itemQuantity}>
            <TouchableOpacity onPress={onDelete}>
              
                <View style={styles.imageEdit}>
                  <IconFeather name="trash-2" size={20} />
                </View>
            
            </TouchableOpacity>
          </View>
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
    </TouchableNativeFeedback>
  );
};

export default ItemEditEat;
