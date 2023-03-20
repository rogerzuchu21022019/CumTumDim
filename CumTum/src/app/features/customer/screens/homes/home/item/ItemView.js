import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SafeKeyComponent from '../../../../../../components/safe_area/SafeKeyComponent';
import styles from '../StyleHome';
import FastImage from 'react-native-fast-image';
import DropDownPicker from 'react-native-dropdown-picker';
import {mainDishOptionsData} from '../../../../../admin/screens/addDish/DataDishes';
import {constants} from '../../../../../../shared/constants';

const ItemView = props => {
  const {item, index} = props;
  const [amount, setAmount] = useState(item.amount);
  const [price, setPrice] = useState(item.price);

  const onIncrease = () => {
    setAmount(amount + 1);
  };

  const onDecrease = () => {
    setAmount(amount - 1);
    amount <= 0 ? setAmount(0) : setAmount(amount - 1);
  };

  const imageUrlOptions = {
    uri: item.imageUrl,
    priority: FastImage.priority.high,
    cache: FastImage.cacheControl.immutable,
  };

  return (
    <SafeKeyComponent>
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.body}>
          <View style={styles.boxInfoDish}>
            <View style={styles.boxShowImage}>
              <View style={styles.boxIndex}>
                <Text style={[styles.textName, styles.textNameUpdate]}>
                  {index + 1}
                </Text>
              </View>
              <FastImage style={styles.imageDish} source={imageUrlOptions} />
            </View>
            <View style={styles.boxShowNamePrice}>
              <Text style={[styles.textName, styles.textBoxNameUpdate]}>
                {item.name}
              </Text>
              {item.price === 0 ? (
                <Text style={[styles.textName, styles.textBoxNameUpdate]}>
                  Free
                </Text>
              ) : (
                <View>
                  <Text style={[styles.textName, styles.textBoxNameUpdate]}>
                    {item.price}K
                  </Text>

                  <Text style={[styles.textName, styles.textBoxNameUpdate]}>
                    {price * amount}K
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.boxHandleAmount}>
              <View style={styles.boxIcon}>
                <TouchableOpacity onPress={onDecrease}>
                  <FastImage
                    style={styles.imageIcon}
                    source={require(`../../../../../../../assets/MinusImages.png`)}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.boxShowAmount}>
                <Text style={[styles.textName, styles.textNameUpdate]}>
                  {amount}
                </Text>
              </View>
              <View style={styles.boxIcon}>
                <TouchableOpacity onPress={onIncrease}>
                  <FastImage
                    style={styles.imageIcon}
                    source={require(`../../../../../../../assets/iconPlus.png`)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer}></View>
      </View>
    </SafeKeyComponent>
  );
};

export default ItemView;
