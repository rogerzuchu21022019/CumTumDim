import React from 'react';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Router from '../../../../navigation/Router';
import DetailCard from '../homeAdmin/detailCart/DetailCard';
import CustomerSupport from './CustomerSupport';

const Support = ({navigation}) => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeKeyComponent>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name={Router.SUPPORT}
            component={CustomerSupport}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </SafeKeyComponent>
  );
};

export default Support;
