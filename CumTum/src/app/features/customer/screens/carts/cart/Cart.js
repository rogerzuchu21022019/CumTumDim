import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import styles from './StyleCart';
import {useDispatch, useSelector} from 'react-redux';
import {
  addDishToWishCart,
  productSelector,
  removeDishFromWishCart,
  resetCart,
  updateAmountInItem,
} from '../../../../product/sliceProduct';
import {FlashList} from '@shopify/flash-list';

import CartNoItem from './cartWithNoItem/CartNoItem';
import ItemView from './item/ItemView';
import {LOG} from '../../../../../../../logger.config';

const log = LOG.extend('CART.JS');
const Cart = ({navigation}) => {
  const data = useSelector(productSelector);
  // log.error('🚀 ~ file: Cart.js:10 ~ Cart ~ data:', data);
  const onReset = () => {
    handleResetCart();
  };
  const onBuy = () => {
    console.log('🚀 ~ file: Cart.js:12 ~ Cart ~ onBuy');
  };
  const dispatch = useDispatch();
  const handleResetCart = () => {
    dispatch({
      type: resetCart().type,
    });
  };

  const updateAmountDish = dish => {
    dispatch({
      type: updateAmountInItem().type,
      payload: dish,
    });
  };

  const addDish = dish => ({
    type: addDishToWishCart().type,
    payload: dish,
  });

  const handleAddDish = dish => {
    log.error('🚀 ~ file: Home.js:61 ~ handleAddDish ~ dish:', dish);
    dispatch(addDish(dish));
    updateAmountDish(dish);
  };

  const removeDish = dish => ({
    type: removeDishFromWishCart().type,
    payload: dish,
  });

  const handleRemoveDish = dish => {
    log.error('🚀 ~ file: Home.js:75 ~ handleRemoveDish ~ dish:', dish);
    dispatch(removeDish(dish));
  };

  return (
    <SafeKeyComponent>
      {data.wishCart.length ? (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Giỏ hàng</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.viewFlashList}>
              <FlashList
                data={data.wishCart}
                renderItem={({item, index}) => {
                  return (
                    <ItemView
                      index={index}
                      item={item}
                      handleAddDish={handleAddDish}
                      handleRemoveDish={handleRemoveDish}
                      updateAmountDish={updateAmountDish}
                    />
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
                estimatedItemSize={100}
              />
            </View>
          </View>

          <View style={styles.footer}>
            {data.wishCart.length ? (
              <View style={styles.boxButton}>
                <TouchableOpacity onPress={onReset}>
                  <View style={styles.viewButton}>
                    <Text style={styles.textButton}>Reset</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onBuy}>
                  <View style={styles.viewButton}>
                    <Text style={styles.textButton}>Mua</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
      ) : (
        <CartNoItem navigation={navigation} />
      )}
    </SafeKeyComponent>
  );
};

export default Cart;
