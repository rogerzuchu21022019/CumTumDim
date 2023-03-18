import React from 'react';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Statistic from '../statistic/Statistic';
import Router from '../../../../navigation/Router';
import DetailCard from '../detailCart/DetailCard';

const Manager = ({navigation}) => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeKeyComponent>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Statistic"
            component={Statistic}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.DETAIL_CART_ADMIN}
            component={DetailCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </SafeKeyComponent>
  );
};

export default Manager;
