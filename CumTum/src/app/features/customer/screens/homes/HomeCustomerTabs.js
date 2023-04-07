import React from 'react';
import Router from '../../../../navigation/Router';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import HomeCustomer from './home/Home';
import RingBell from './ringBell/RingBell';

const HomeCustomerTabs = () => {
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name={Router.HOME_CUSTOMER}
            component={HomeCustomer}
            options={{
              headerShown: false,
            }}
          />
          
       
        </Stack.Group>
      </Stack.Navigator>
  );
};

export default HomeCustomerTabs;
