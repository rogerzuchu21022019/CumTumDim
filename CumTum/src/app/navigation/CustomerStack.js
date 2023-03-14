import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Router from './Router';
import HomeCustomer from '../features/customer/screens/homeCustomer/HomeCustomer';
const Tab = createBottomTabNavigator();

const CustomerStack = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen
        name={Router.HOME_CUSTOMER}
        component={HomeCustomer}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomerStack;
