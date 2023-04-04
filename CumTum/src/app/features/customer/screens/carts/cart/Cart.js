import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import SafeKeyComponent from '../../../../../components/safe_area/SafeKeyComponent';
import styles from './StyleCart';
import {useDispatch, useSelector} from 'react-redux';
import {
  addDishToWishCartOrUpdate,
  productSelector,
  decreaseDishByID,
  resetCart,
  updateAmount,
  resetAnotherCart,
  resetToppingsCart,
  resetExtraDishesCart,
  resetMainDishesCart,
} from '../../../../product/sliceProduct';
import {FlashList} from '@shopify/flash-list';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CartNoItem from './cartWithNoItem/CartNoItem';
import ItemView from './item/ItemView';
import {LOG} from '../../../../../../../logger.config';
import {constants} from '../../../../../shared/constants';
import Router from '../../../../../navigation/Router';
import {authSelector} from '../../../../admin/sliceAuth';
import {createHistoryCart} from '../../../../carts/sliceOrder';


const log = LOG.extend('CART.JS');
const Cart = ({navigation}) => {
  const data = useSelector(productSelector);
  const auth = useSelector(authSelector);

  // log.info("🚀 ~ file: Cart.js:38 ~ Cart ~ auth:", auth.user)
  const userId = auth.user._id;

  // log.error('🚀 ~ file: Cart.js:10 ~ Cart ~ data:', data);
  const onReset = () => {
    handleResetCart();
  };

  const onCreateHistoryCart = order => ({
    type: createHistoryCart().type,
    payload: order,
  });

  const handleCreateHistoryCart = order => {
    dispatch(onCreateHistoryCart(order));
  };

  const onBuy = () => {
    if (data.mainDishCart.length === 0) {
      Alert.alert('Bạn phải đặt tối thiểu 1 món ăn chính trong giỏ hàng! ');
      return;
    }
    if (
      data.mainDishCart.length != 0 ||
      data.extraDishCart.length != 0 ||
      data.toppingsCart.length != 0 ||
      data.anotherCart.length != 0
    ) {
      const order = {
        mainDishCart: data.mainDishCart.map(item => ({
          productId: item._id,
          amounts: item.amount,
          price: item.price,
        })),
        extraDishCart: data.extraDishCart.map(item => ({
          productId: item._id,
          amounts: item.amount,
          price: item.price,
        })),
        toppingsCart: data.toppingsCart.map(item => ({
          productId: item._id,
          amounts: item.amount,
          price: item.price,
        })),
        anotherCart: data.anotherCart.map(item => ({
          productId: item._id,
          amounts: item.amount,
          price: item.price,
        })),
        totalMainDish: solveAmountMainDish(),
        totalExtraDish: solveAmountExtraDish(),
        totalTopping: solveAmountToppings(),
        totalAnother: solveAmountAnotherDish(),
        moneyToPaid: solveMoneyToPaid(),
        totalAmount: solveAmountDishes(),
        userId: userId,
      };
      // console.log('🚀 ~ file: Cart.js:48 ~ onBuy ~ item:', order);
      handleCreateHistoryCart(order);
      navigation.navigate(Router.PAYMENT, {order});
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
    solveAmountSuonMo();
  }, [dispatch]);

  const dispatch = useDispatch();
  const handleResetCart = () => {
    dispatch({
      type: resetCart().type,
    });
  };

  const handleResetMainDishes = () => {
    dispatch({
      type: resetMainDishesCart().type,
    });
  };

  const handleResetExtraDishes = () => {
    dispatch({
      type: resetExtraDishesCart().type,
    });
  };

  const handleResetToppings = () => {
    dispatch({
      type: resetToppingsCart().type,
    });
  };

  const handleResetAnother = () => {
    dispatch({
      type: resetAnotherCart().type,
    });
  };

  const addDish = dish => ({
    type: addDishToWishCartOrUpdate().type,
    payload: dish,
  });

  const updateQuantity = dish => ({
    type: updateAmount().type,
    payload: dish,
  });

  const handleAddDish = dish => {
    // log.error('🚀 ~ file: Home.js:61 ~ handleAddDish ~ dish:', dish);
    dispatch(addDish(dish));
    dispatch(updateQuantity(dish));
  };

  const decreaseDish = dish => ({
    type: decreaseDishByID().type,
    payload: dish,
  });

  const handleRemoveDish = dish => {
    // log.error('🚀 ~ file: Home.js:75 ~ handleRemoveDish ~ dish:', dish);
    dispatch(decreaseDish(dish));
    dispatch(updateQuantity(dish));
  };

  const solveAmountMainDish = () => {
    let totalAmountDish = 0;
    data.mainDishCart.forEach(item => {
      totalAmountDish += item.amount;
    });
    return totalAmountDish;
  };

  const solveAmountSuonMo = () => {
    let totalAmountDish = 0;
    data.mainDishCart.forEach(item => {
      if (item.subCategory === 'Sườn mỡ') {
        totalAmountDish += item.amount;
      }
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
                    <IconMaterialCommunityIcons
                      name="delete"
                      color={constants.COLOR.BLACK}
                      size={30}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          <View style={styles.body}>
            <ScrollView
              // horizontal={true}
              // removeClippedSubviews={true}
              // initialScrollIndex={0}
              scrollEnabled={true}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              decelerationRate={'fast'}>
              <TouchableNativeFeedback>
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
                        key={'list1'}
                      />

                      <View style={styles.viewTextTotalMoney}>
                        <TouchableOpacity onPress={handleResetMainDishes}>
                          <View style={styles.itemDelete}>
                            <IconMaterialCommunityIcons
                              name="delete"
                              color={constants.COLOR.RED}
                              size={30}
                            />
                          </View>
                        </TouchableOpacity>
                        <View style={styles.itemDelete}>
                          <Text style={[styles.textInfo, styles.updateMoney]}>
                            Tổng tiền:
                          </Text>
                        </View>
                        <View style={styles.itemPriceFood}>
                          <Text style={[styles.textInfo, styles.updateMoney]}>
                            {moneyPaidForMainDish()} K
                          </Text>
                        </View>
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
                        key={'list2'}
                        keyExtractor={(item, index) => index.toString()}
                        estimatedItemSize={100}
                      />
                      <View style={styles.viewTextTotalMoney}>
                        <TouchableOpacity onPress={handleResetExtraDishes}>
                          <View style={styles.itemDelete}>
                            <IconMaterialCommunityIcons
                              name="delete"
                              color={constants.COLOR.RED}
                              size={30}
                            />
                          </View>
                        </TouchableOpacity>
                        <View style={styles.itemDelete}>
                          <Text style={[styles.textInfo, styles.updateMoney]}>
                            Tổng tiền:
                          </Text>
                        </View>
                        <View style={styles.itemPriceFood}>
                          <Text style={[styles.textInfo, styles.updateMoney]}>
                            {moneyPaidForExtraDish()} K
                          </Text>
                        </View>
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
                        key={'list3'}
                        keyExtractor={(item, index) => index.toString()}
                        estimatedItemSize={100}
                      />

                      <View style={styles.viewTextTotalMoney}>
                        <TouchableOpacity onPress={handleResetToppings}>
                          <View style={styles.itemDelete}>
                            <IconMaterialCommunityIcons
                              name="delete"
                              color={constants.COLOR.RED}
                              size={30}
                            />
                          </View>
                        </TouchableOpacity>

                        <View style={styles.itemDelete}>
                          <Text style={[styles.textInfo, styles.updateMoney]}>
                            Tổng tiền:
                          </Text>
                        </View>
                        <View style={styles.itemPriceFood}>
                          <Text style={[styles.textInfo, styles.updateMoney]}>
                            {moneyPaidForToppings()} K
                          </Text>
                        </View>
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
                        key={'list4'}
                      />
                      <View style={styles.viewTextTotalMoney}>
                        <TouchableOpacity onPress={handleResetAnother}>
                          <View style={styles.itemDelete}>
                            <IconMaterialCommunityIcons
                              name="delete"
                              color={constants.COLOR.RED}
                              size={30}
                            />
                          </View>
                        </TouchableOpacity>
                        <View style={styles.itemDelete}>
                          <Text style={[styles.textInfo, styles.updateMoney]}>
                            Tổng tiền:
                          </Text>
                        </View>
                        <View style={styles.itemPriceFood}>
                          <Text style={[styles.textInfo, styles.updateMoney]}>
                            {moneyPaidForAnother()} K
                          </Text>
                        </View>
                      </View>
                      <View style={styles.viewTextHeader}>
                        <View style={styles.divideLine}></View>
                      </View>
                    </View>
                  ) : null}
                  <View style={styles.viewTotal}>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textInfo}>Số lượng món chính:</Text>
                      <Text style={styles.textInfo}>
                        {solveAmountMainDish()}
                      </Text>
                    </View>

                    <View
                      style={[
                        styles.viewBoxShowInfoBill,
                        styles.viewBoxShowSubInfoBill,
                      ]}>
                      <Text style={[styles.textInfo, styles.updateSubText]}>
                        + Số lượng Suờn mỡ:
                      </Text>
                      <Text style={[styles.textInfo, styles.updateSubText]}>
                        {solveAmountSuonMo()}
                      </Text>
                    </View>

                    <View
                      style={[
                        styles.viewBoxShowInfoBill,
                        styles.viewBoxShowSubInfoBill,
                      ]}>
                      <Text style={[styles.textInfo, styles.updateSubText]}>
                        + Số lượng Suờn :
                      </Text>
                      <Text style={[styles.textInfo, styles.updateSubText]}>
                        {solveAmountMainDish() - solveAmountSuonMo()}
                      </Text>
                    </View>

                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textInfo}>Số lượng món thêm:</Text>
                      <Text style={styles.textInfo}>
                        {solveAmountExtraDish()}
                      </Text>
                    </View>
                    <View style={styles.viewBoxShowInfoBill}>
                      <Text style={styles.textInfo}>Số lượng món topping:</Text>
                      <Text style={styles.textInfo}>
                        {solveAmountToppings()}
                      </Text>
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
                        {solveMoneyToPaid()} K
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={onBuy}>
                    <View style={styles.viewButton}>
                      <Text style={styles.textButton}>Mua</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </TouchableNativeFeedback>
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
