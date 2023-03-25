import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import React, {useEffect, useRef} from 'react';
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
    if (data.mainDishCart.length === 0) {
      Alert.alert('Bạn phải đặt tối thiểu 1 món ăn chính trong giỏ hàng! ');
    }
    if (
      data.mainDishCart.length != 0 ||
      data.extraDishCart.length != 0 ||
      data.toppingsCart.length != 0 ||
      data.anotherCart.length != 0
    ) {
      const order = {
        mainDishCart: data.mainDishCart,
        extraDishCart: data.extraDishCart,
        toppingsCart: data.toppingsCart,
        anotherCart: data.anotherCart,
        amountMainDish: solveAmountMainDish(),
        amountExtraDish: solveAmountExtraDish(),
        amountToppings: solveAmountToppings(),
        amountAnotherDish: solveAmountAnotherDish(),
        moneyToPaid: solveMoneyToPaid(),
        amountDish: solveAmountDishes(),
      };
      console.log('🚀 ~ file: Cart.js:48 ~ onBuy ~ item:', order);
      // navigation.navigate('Order', {item});
    } else {
      Alert.alert('Bạn phải có ít nhất 1 món chính trong bill! ');
    }
  };

  useEffect(() => {
    solveAmountMainDish();
    solveAmountExtraDish();
    solveAmountToppings();
    solveAmountAnotherDish();
    solveMoneyToPaid();
    solveAmountDishes();
  }, [dispatch]);

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

  const solveAmountMainDish = () => {
    let totalAmountDish = 0;
    data.mainDishCart.forEach(item => {
      totalAmountDish += item.amount;
    });
    return totalAmountDish;
  };

  const solveAmountExtraDish = () => {
    let totalAmountDish = 0;
    data.extraDishCart.forEach(item => {
      totalAmountDish += item.amount;
    });
    return totalAmountDish;
  };

  const solveAmountToppings = () => {
    let totalAmountDish = 0;
    data.toppingsCart.forEach(item => {
      totalAmountDish += item.amount;
    });
    return totalAmountDish;
  };

  const solveAmountAnotherDish = () => {
    let totalAmountDish = 0;
    data.anotherCart.forEach(item => {
      totalAmountDish += item.amount;
    });
    return totalAmountDish;
  };

  const solveAmountDishes = () => {
    let totalAmountDish = 0;
    data.mainDishCart.forEach(item => {
      totalAmountDish += item.amount;
    });

    data.extraDishCart.forEach(item => {
      totalAmountDish += item.amount;
    });

    data.toppingsCart.forEach(item => {
      totalAmountDish += item.amount;
    });
    data.anotherCart.forEach(item => {
      totalAmountDish += item.amount;
    });
    return totalAmountDish;
  };
  const moneyPaidForMainDish = () => {
    let money = 0;
    data.mainDishCart.forEach(item => {
      money += item.price * item.amount;
    });
    return money;
  };

  const moneyPaidForExtraDish = () => {
    let money = 0;
    data.extraDishCart.forEach(item => {
      money += item.price * item.amount;
    });
    return money;
  };
  const moneyPaidForToppings = () => {
    let money = 0;
    data.toppingsCart.forEach(item => {
      money += item.price * item.amount;
    });
    return money;
  };
  const moneyPaidForAnother = () => {
    let money = 0;
    data.anotherCart.forEach(item => {
      money += item.price * item.amount;
    });
    return money;
  };

  const solveMoneyToPaid = () => {
    let total = 0;
    total += moneyPaidForMainDish();

    total += moneyPaidForExtraDish();
    total += moneyPaidForToppings();
    total += moneyPaidForAnother();
    return total;
  };

  const scrollViewRef = useRef(null);

  const onScroll = () => {
    // Sử dụng requestAnimationFrame để đồng bộ hoạt động vẽ đồ họa khi cuộn
    window.requestAnimationFrame(() => {
      console.log('Đã cuộn');
    });
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
            <ScrollView
              removeClippedSubviews={true}
              initialScrollIndex={0}
              scrollEventThrottle={16}
              onScroll={onScroll}
              contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.viewScrollList}>
                {data.mainDishCart.length ? (
                  <View style={styles.viewMainDishes}>
                    <View style={styles.viewTextHeader}>
                      <Text style={styles.textInfo}>Món Chính</Text>
                    </View>
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

                    <View style={styles.viewTextTotalMoney}>
                      <Text style={[styles.textInfo, styles.updateMoney]}>
                        Tổng tiền:
                      </Text>
                      <Text style={[styles.textInfo, styles.updateMoney]}>
                        {moneyPaidForMainDish()}
                      </Text>
                    </View>
                    <View style={styles.viewTextHeader}>
                      <View style={styles.divideLine}></View>
                    </View>
                  </View>
                ) : null}
                {data.extraDishCart.length ? (
                  <View style={styles.viewExtraDishes}>
                    <View style={styles.viewTextHeader}>
                      <Text style={styles.textInfo}>Món thêm</Text>
                    </View>
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
                    <View style={styles.viewTextTotalMoney}>
                      <Text style={[styles.textInfo, styles.updateMoney]}>
                        Tổng tiền:
                      </Text>
                      <Text style={[styles.textInfo, styles.updateMoney]}>
                        {moneyPaidForExtraDish()}
                      </Text>
                    </View>
                    <View style={styles.viewTextHeader}>
                      <View style={styles.divideLine}></View>
                    </View>
                  </View>
                ) : null}

                {data.toppingsCart.length ? (
                  <View style={styles.viewToppings}>
                    <View style={styles.viewTextHeader}>
                      <Text style={styles.textInfo}>Toppings</Text>
                    </View>
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

                    <View style={styles.viewTextTotalMoney}>
                      <Text style={[styles.textInfo, styles.updateMoney]}>
                        Tổng tiền:
                      </Text>
                      <Text style={[styles.textInfo, styles.updateMoney]}>
                        {moneyPaidForToppings()}
                      </Text>
                    </View>
                    <View style={styles.viewTextHeader}>
                      <View style={styles.divideLine}></View>
                    </View>
                  </View>
                ) : null}

                {data.anotherCart.length ? (
                  <View style={styles.viewAnother}>
                    <View style={styles.viewTextHeader}>
                      <Text style={styles.textInfo}>Khác</Text>
                    </View>
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
                    <View style={styles.viewTextTotalMoney}>
                      <Text style={[styles.textInfo, styles.updateMoney]}>
                        Tổng tiền:
                      </Text>
                      <Text style={[styles.textInfo, styles.updateMoney]}>
                        {moneyPaidForAnother()}
                      </Text>
                    </View>
                    <View style={styles.viewTextHeader}>
                      <View style={styles.divideLine}></View>
                    </View>
                  </View>
                ) : null}
                <View style={styles.viewTotal}>
                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={styles.textInfo}>Số lượng món chính:</Text>
                    <Text style={styles.textInfo}>{solveAmountMainDish()}</Text>
                  </View>

                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={styles.textInfo}>Số lượng món thêm:</Text>
                    <Text style={styles.textInfo}>
                      {solveAmountExtraDish()}
                    </Text>
                  </View>
                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={styles.textInfo}>Số lượng món topping:</Text>
                    <Text style={styles.textInfo}>{solveAmountToppings()}</Text>
                  </View>

                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={styles.textInfo}>Số lượng món khác:</Text>
                    <Text style={styles.textInfo}>
                      {solveAmountAnotherDish()}
                    </Text>
                  </View>

                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={styles.textInfo}>Tổng Số lượng:</Text>
                    <Text style={styles.textInfo}>{solveAmountDishes()}</Text>
                  </View>
                  <View style={styles.divideLine}></View>

                  <View style={styles.viewBoxShowInfoBill}>
                    <Text style={[styles.textInfo, styles.updateTextInfo]}>
                      Tổng Tiền:
                    </Text>
                    <Text style={[styles.textInfo, styles.updateTextInfo]}>
                      {solveMoneyToPaid()}
                    </Text>
                  </View>
                </View>

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
