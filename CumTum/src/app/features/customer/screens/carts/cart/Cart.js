import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import styles from './StyleCart';
import {useDispatch, useSelector} from 'react-redux';
import {
  addDishToWishCartOrUpdate,
  productSelector,
  decreaseDishByID,
  resetCart,
} from '../../../../product/sliceProduct';
import {FlashList} from '@shopify/flash-list';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import CartNoItem from './cartWithNoItem/CartNoItem';
import ItemView from './item/ItemView';
import {LOG} from '../../../../../../../logger.config';
import {constants} from '../../../../../shared/constants';

const log = LOG.extend('CART.JS');
const Cart = ({navigation}) => {
  const data = useSelector(productSelector);

  // log.error('🚀 ~ file: Cart.js:10 ~ Cart ~ data:', data);
  const onReset = () => {
    handleResetCart();
  };

  const onBuy = () => {
    // console.log('🚀 ~ file: Cart.js:12 ~ Cart ~ onBuy');
  };

  useEffect(() => {}, [ dispatch]);

  const dispatch = useDispatch();
  const handleResetCart = () => {
    dispatch({
      type: resetCart().type,
    });
  };

  const addDish = dish => ({
    type: addDishToWishCartOrUpdate().type,
    payload: dish,
  });

  const handleAddDish = dish => {
    // log.error('🚀 ~ file: Home.js:61 ~ handleAddDish ~ dish:', dish);
    dispatch(addDish(dish));
  };

  const decreaseDish = dish => ({
    type: decreaseDishByID().type,
    payload: dish,
  });

  const handleRemoveDish = dish => {
    // log.error('🚀 ~ file: Home.js:75 ~ handleRemoveDish ~ dish:', dish);
    dispatch(decreaseDish(dish));
  };

  return (
    <SafeKeyComponent>
      {data.mainDishCart.length ||
      data.extraDishCart.length ||
      data.toppingsCart.length ||
      data.anotherCart.length ? (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.boxTextHeader}>
              <Text style={styles.textHeader}>Giỏ hàng</Text>
            </View>
            {data.mainDishCart.length ||
            data.extraDishCart ||
            data.toppingsCart ||
            data.anotherCart ? (
              <View style={styles.boxButton}>
                <TouchableOpacity onPress={onReset}>
                  <View style={styles.viewButton}>
                    <Text style={styles.textButton}>Reset</Text>
                    <IconAntDesign
                      name="delete"
                      color={constants.COLOR.WHITE}
                      size={20}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          <View style={styles.body}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.viewScrollList}>
                {data.mainDishCart.length ? (
                  <View style={styles.viewMainDishes}>
                    <Text style={{color: 'white'}}>Món Chính</Text>
                    <FlashList
                      data={data.mainDishCart}
                      renderItem={({item, index}) => {
                        return (
                          <ItemView
                            index={index}
                            item={item}
                            handleAddDish={handleAddDish}
                            handleRemoveDish={handleRemoveDish}
                          />
                        );
                      }}
                      keyExtractor={(item, index) => index.toString()}
                      estimatedItemSize={100}
                    />
                  </View>
                ) : null}
                {data.extraDishCart.length ? (
                  <View style={styles.viewExtraDishes}>
                    <Text style={{color: 'white'}}>Đồ ăn thêm</Text>
                    <FlashList
                      data={data.extraDishCart}
                      renderItem={({item, index}) => {
                        return (
                          <ItemView
                            index={index}
                            item={item}
                            handleAddDish={handleAddDish}
                            handleRemoveDish={handleRemoveDish}
                          />
                        );
                      }}
                      keyExtractor={(item, index) => index.toString()}
                      estimatedItemSize={100}
                    />
                  </View>
                ) : null}

                {data.toppingsCart.length ? (
                  <View style={styles.viewToppings}>
                    <Text style={{color: 'white'}}>Toppings</Text>
                    <FlashList
                      data={data.toppingsCart}
                      renderItem={({item, index}) => {
                        return (
                          <ItemView
                            index={index}
                            item={item}
                            handleAddDish={handleAddDish}
                            handleRemoveDish={handleRemoveDish}
                          />
                        );
                      }}
                      keyExtractor={(item, index) => index.toString()}
                      estimatedItemSize={100}
                    />
                  </View>
                ) : null}

                {data.anotherCart.length ? (
                  <View style={styles.viewAnother}>
                    <Text style={{color: 'white'}}>Khác</Text>
                    <FlashList
                      data={data.anotherCart}
                      renderItem={({item, index}) => {
                        return (
                          <ItemView
                            index={index}
                            item={item}
                            handleAddDish={handleAddDish}
                            handleRemoveDish={handleRemoveDish}
                          />
                        );
                      }}
                      keyExtractor={(item, index) => index.toString()}
                      estimatedItemSize={100}
                    />
                  </View>
                ) : null}
                <TouchableOpacity onPress={onBuy}>
                  <View style={styles.viewButton}>
                    <Text style={styles.textButton}>Mua</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

          <View style={styles.footer}></View>
        </View>
      ) : (
        <CartNoItem navigation={navigation} />
      )}
    </SafeKeyComponent>
  );
};

export default Cart;
