import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Router from './Router';
const Tab = createBottomTabNavigator();

const AdminStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Router.Home}
        component={ArticlesScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminStack;
