import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Router from './Router';
import HomeAdmin from '../features/admin/screens/homeAdmin/HomeAdmin';
import AddDish from '../features/admin/screens/addDish/AddDish';
import { constants } from '../shared/constants';
import Statistic from '../features/admin/screens/statistic/Statistic';
import Manager from '../features/admin/screens/manager/Manager';
import Manage from '../features/admin/screens/manager/manageDish/ManageDish';
const Tab = createBottomTabNavigator();

const AdminStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        // tabBarActiveTintColor: constants.COLOR.WHITE,
        // tabBarInactiveTintColor: constants.COLOR.BLACK,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: constants.COLOR.BLACK,

          height: 50,
        },
      }}>
      <Tab.Screen

        name={Router.HOME_ADMIN}
        component={HomeAdmin}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../../assets/Home.png')}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? constants.COLOR.YELLOW : constants.COLOR.WHITE
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  lineHeight: 15,
                  color: focused ? constants.COLOR.YELLOW : constants.COLOR.WHITE
                }}
              >Trang chủ</Text>
            </View>

          )
        }}
      />

      <Tab.Screen
        name={Router.STATISTI}
        component={Statistic}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../../assets/Buy.png')}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? constants.COLOR.YELLOW : constants.COLOR.WHITE
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  lineHeight: 15,
                  color: focused ? constants.COLOR.YELLOW : constants.COLOR.WHITE
                }}
              >Thống kê</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name={Router.MANAGER}
        component={Manager}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../../assets/Tag.png')}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? constants.COLOR.YELLOW : constants.COLOR.WHITE
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  lineHeight: 15,
                  color: focused ? constants.COLOR.YELLOW : constants.COLOR.WHITE
                }}
              >Quản lý</Text>
            </View>
          )
        }}
      />

      <Tab.Screen
        name={Router.SUPPORT}
        component={AddDish}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../../assets/user.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? constants.COLOR.YELLOW : constants.COLOR.WHITE
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  lineHeight: 15,
                  color: focused ? constants.COLOR.YELLOW : constants.COLOR.WHITE
                }}
              >Hỗ trợ</Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminStack;
