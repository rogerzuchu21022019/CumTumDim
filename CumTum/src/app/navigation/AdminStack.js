import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Router from './Router';
import HomeAdmin from '../features/admin/screens/homeAdmin/HomeAdmin';
import AddDish from '../features/product/screens/addDish/AddDish';
import { constants } from '../shared/constants';
const Tab = createBottomTabNavigator();

const AdminStack = () => {
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
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: constants.COLOR.ORANGE,
          borderRadius: 20,
          height: 60,
        },
      }}>
      <Tab.Screen
        name={Router.HOME_ADMIN}
        component={HomeAdmin}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={Router.ADD_DISH}
        component={AddDish}
        options={{
          headerShown: false,
          
        }}
      />
      <Tab.Screen
        name={Router.MANAGER}
        component={HomeAdmin}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={Router.SUPPORT}
        component={AddDish}
        options={{
          headerShown: false,
          
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminStack;
