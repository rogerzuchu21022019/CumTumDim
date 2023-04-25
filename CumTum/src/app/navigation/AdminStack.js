import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Router from './Router';
import HomeAdmin from '../features/admin/screens/homeAdmin/HomeAdmin';
import {constants} from '../shared/constants';
import Statistic from '../features/admin/screens/statistic/Statistic';
import CustomerSupport from '../features/admin/screens/support/CustomerSupport';
import ManagerTabs from '../features/admin/screens/manager/ManagerTabs';

const AdminStack = () => {
  const Tab = createBottomTabNavigator();
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

          // height: 50,
        },
      }}>
      <Tab.Screen
        name={Router.HOME_ADMIN}
        component={HomeAdmin}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/Home.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused
                    ? constants.COLOR.YELLOW
                    : constants.COLOR.WHITE,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  lineHeight: 15,
                  color: focused
                    ? constants.COLOR.YELLOW
                    : constants.COLOR.WHITE,
                }}>
                Trang chủ
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={Router.STATISTIC}
        component={Statistic}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/Buy.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused
                    ? constants.COLOR.YELLOW
                    : constants.COLOR.WHITE,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  lineHeight: 15,
                  color: focused
                    ? constants.COLOR.YELLOW
                    : constants.COLOR.WHITE,
                }}>
                Thống kê
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Router.MANAGE_TABS}
        component={ManagerTabs}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/Tag.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused
                    ? constants.COLOR.YELLOW
                    : constants.COLOR.WHITE,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  lineHeight: 15,
                  color: focused
                    ? constants.COLOR.YELLOW
                    : constants.COLOR.WHITE,
                }}>
                Quản lý
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={Router.SUPPORT}
        component={CustomerSupport}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/user.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused
                    ? constants.COLOR.YELLOW
                    : constants.COLOR.WHITE,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  lineHeight: 15,
                  color: focused
                    ? constants.COLOR.YELLOW
                    : constants.COLOR.WHITE,
                }}>
                Hỗ trợ
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminStack;
