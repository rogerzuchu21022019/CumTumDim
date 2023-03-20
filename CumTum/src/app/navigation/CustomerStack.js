import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Router from './Router';
import HomeCustomerTabs from '../features/customer/screens/homes/HomeCustomerTabs';
import ProfileTabs from '../features/customer/screens/profiles/ProfileTabs';
import HistoryTabs from '../features/customer/screens/histories/HistoryTabs';
import Profile from '../features/customer/screens/profiles/profile/Profile';
import CartTabs from '../features/customer/screens/carts/CartTabs';
import { constants } from '../shared/constants';

const CustomerStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    
    <Tab.Navigator
    
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: constants.COLOR.WHITE,
        tabBarInactiveTintColor: constants.COLOR.BLACK,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          // position: 'absolute',
          // bottom: 10,
          // left: 10,
          // right: 10,
          // elevation: 0,
          backgroundColor: constants.COLOR.GREY,
          // borderRadius: 20,
          height: 60,
        },
      }}>
      <Tab.Screen
        name={Router.HOME_CUSTOMER_TABS}
        component={HomeCustomerTabs}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={Router.HISTORY_TABS}
        component={HistoryTabs}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={Router.CART_TABS}
        component={CartTabs}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={Router.PROFILE_TABS}
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomerStack;
