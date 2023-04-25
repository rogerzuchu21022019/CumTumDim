import React from 'react';
import Router from '../../../../navigation/Router';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import History from './history/History';
import {createHistoryCart} from '../../../carts/sliceOrder';
import HistoryNoItems from './historyNoItem/HistoryNoItems';
import ShowBill from '../carts/showBill/ShowBill';

const HistoryTabs = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name={Router.HISTORY_WITH_ITEMS}
          component={History}
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
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HistoryTabs;
