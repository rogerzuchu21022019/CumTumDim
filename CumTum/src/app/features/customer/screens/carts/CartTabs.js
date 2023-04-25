import React from 'react';
import Router from '../../../../navigation/Router';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import Cart from './cart/Cart';
import Payment from './payment/Payment';
import DetailPaymentCartZalo from '../../../../shared/utils/DetailPaymentZalo';
import ShowBill from './showBill/ShowBill';
import ChooseDeliveryAddress from './profilePayment/ChooseDeliveryAddress';
import EditDeliveryAddress from './profilePayment/editDeliveryAddress/EditDeliveryAddress';
import AddDeliveryAddress from './profilePayment/addDeliveryAddress/AddDeliveryAddress';
const CartTabs = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeKeyComponent>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name={Router.CART_WITH_NO_ITEM}
            component={Cart}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.PAYMENT}
            component={Payment}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.PAYMENT_PAID}
            component={DetailPaymentCartZalo}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.PAYMENT_ZALO}
            component={ShowBill}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.DELIVERY_ADDRESS}
            component={ChooseDeliveryAddress}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.EDIT_DELIVERY_ADDRESS}
            component={EditDeliveryAddress}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.ADD_DELIVERY_ADDRESS}
            component={AddDeliveryAddress}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </SafeKeyComponent>
  );
};

export default CartTabs;
