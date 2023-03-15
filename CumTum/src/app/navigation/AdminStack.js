import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Router from './Router';
import HomeAdmin from '../features/admin/screens/homeAdmin/HomeAdmin';
const Tab = createBottomTabNavigator();

const AdminStack = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen 
        name={Router.HOME_ADMIN}
        component={HomeAdmin}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminStack;
