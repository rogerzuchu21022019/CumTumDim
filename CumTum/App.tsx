/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import notifee, {EventType} from '@notifee/react-native';
import Router from './src/app/navigation/Router';
import {useSelector} from 'react-redux';
import AdminStack from './src/app/navigation/AdminStack';
import DetailCard from './src/app/features/admin/screens/homeAdmin/detailCart/DetailCard';
import CustomerStack from './src/app/navigation/CustomerStack';
import {navigationRef as RootNavigation} from './src/app/navigation/RootNavigation';
import LoginScreen from './src/app/features/auth/login/Login';
import SplashScreen from './src/app/features/auth/splashScreen/SplashScreen';
import UpdateInformation from './src/app/features/auth/updateInformation/UpdateInformation';

import Payment from './src/app/features/customer/screens/carts/payment/Payment';
import EditProfile from './src/app/features/customer/screens/profiles/editProfile/EditProfile';
import UploadImage from './src/app/features/customer/screens/profiles/uploadImage/UploadImage';
import RingBell from './src/app/features/customer/screens/homes/ringBell/RingBell';

import CartNoItem from './src/app/features/customer/screens/carts/cart/cartWithNoItem/CartNoItem';
import RingBellAdmin from './src/app/features/admin/screens/homeAdmin/ringBellAdmin/RingBellAdmin';
import AddDeliveryAddress from './src/app/features/customer/screens/carts/profilePayment/addDeliveryAddress/AddDeliveryAddress';
import {requestUserPermission} from './src/app/shared/utils/PermissionFCM';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {authSelector} from './src/app/features/admin/sliceAuth';

export enum RoleUser {
  USER = 'user',
  ADMIN = 'admin',
}

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    requestPermissionNoti();
    requestUserPermission();
  }, []);

  const authSelect = useSelector(authSelector);
  const {isLoggedIn} = authSelect;
  // console.log('🚀 ~ file: App.tsx:58 ~ App ~ isLoggedIn:', isLoggedIn);

  const requestPermissionNoti = async () => {
    await notifee.requestPermission();
  };
  useEffect(() => {
    return notifee.onBackgroundEvent(async ({type, detail}) => {
      console.log(`Received background event: ${type}`, detail);
      // Handle the background event here
    });
  }, []);

  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          // console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          // console.log('User pressed notification', detail.notification);
          break;
      }
    });
  }, []);

  return (
    <NavigationContainer ref={RootNavigation}>
      <GestureHandlerRootView className="flex-1">
        <Stack.Navigator>
          <Stack.Screen
            name={Router.SPLASH_SCREEN}
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />

          {isLoggedIn && authSelect.user.role === RoleUser.USER ? (
            <Stack.Screen
              name={Router.CUSTOMER_STACK}
              component={CustomerStack}
              options={{
                headerShown: false,
              }}
            />
          ) : isLoggedIn && authSelect.user.role === RoleUser.ADMIN ? (
            <Stack.Screen
              name={Router.ADMIN_STACK}
              component={AdminStack}
              options={{
                headerShown: false,
              }}
            />
          ) : null}

          <Stack.Screen
            name={Router.LOGIN}
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name={Router.UPDATE_INFO}
            component={UpdateInformation}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name={Router.DETAIL_CART_ADMIN}
            component={DetailCard}
            options={{
              headerShown: false,
              presentation: 'modal',
            }}
          />

          <Stack.Screen
            name={Router.PAYMENT}
            component={Payment}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.CART_WITH_NO_ITEM}
            component={CartNoItem}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.ADD_DELIVERY_ADDRESS}
            component={AddDeliveryAddress}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name={Router.EDIT_PROFILE}
            component={EditProfile}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name={Router.UPLOAD_IMAGE}
            component={UploadImage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.RING_BELL}
            component={RingBell}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.RING_BELL_ADMIN}
            component={RingBellAdmin}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
// const codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};
// export default codePush(codePushOptions)(App);
