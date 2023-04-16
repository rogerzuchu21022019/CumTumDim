import React from 'react';
import Router from '../../../../navigation/Router';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import Cart from './cart/Cart';
import Payment from './payment/Payment';
import DetailPaymentCartZalo from '../../../../shared/utils/DetailPaymentZalo';
import PaymentZalo from './paymentZalo/PaymentZalo';
import DeliveryAddress from './profilePayment/DeliveryAddress';
import EditDeliveryAddrees from './profilePayment/EditDeliveryAddrees/EditDeliveryAddrees';
import AddDeliveryAddrees from './profilePayment/AddDeliveryAddrees/AddDeliveryAddrees';
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
            component={PaymentZalo}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.DELIVERY_ADDREES}
            component={DeliveryAddress}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.Edit_DELIVERY_ADDREES}
            component={EditDeliveryAddrees}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.ADD_DELIVERY_ADDREES}
            component={AddDeliveryAddrees}
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
