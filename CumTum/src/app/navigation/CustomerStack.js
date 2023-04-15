import {View, Text, Image} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Router from './Router';
import HomeCustomerTabs from '../features/customer/screens/homes/HomeCustomerTabs';
import ProfileTabs from '../features/customer/screens/profiles/ProfileTabs';
import HistoryTabs from '../features/customer/screens/histories/HistoryTabs';
import Profile from '../features/customer/screens/profiles/profile/Profile';
import CartTabs from '../features/customer/screens/carts/CartTabs';
import {constants} from '../shared/constants';
import FastImage from 'react-native-fast-image';

const CustomerStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
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
          // height: 60,
        },
      }}>
      <Tab.Screen
        name={Router.HOME_CUSTOMER_TABS}
        component={HomeCustomerTabs}
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
        name={Router.HISTORY_TABS}
        component={HistoryTabs}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/history.png')}
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
                  color: focused
                    ? constants.COLOR.YELLOW
                    : constants.COLOR.WHITE,
                }}>
                Lịchs sử
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Router.CART_TABS}
        component={CartTabs}
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
                Giỏ hàng
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={Router.PROFILE_TABS}
        component={ProfileTabs}
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
                Hồ sơ
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomerStack;

