
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import notifee, {EventType} from '@notifee/react-native';

import Router from './src/app/navigation/Router';

import {Store} from './src/app/app_store/Store';

// import Provider
import {Provider} from 'react-redux';
import AdminStack from './src/app/navigation/AdminStack';
import DetailCard from './src/app/features/admin/screens/detailCart/DetailCard';
import CustomerStack from './src/app/navigation/CustomerStack';

// import RootNavigation
import {navigationRef} from './src/app/navigation/RootNavigation';

// Redux Persist

import {persistStore} from 'reduxjs-toolkit-persist';
import {PersistGate} from 'reduxjs-toolkit-persist/integration/react';

import LoginScreen from './src/app/features/auth/login/Login';
import SplashScreen from './src/app/features/auth/splashScreen/SplashScreen';
import UpdateInformation from './src/app/features/auth/updateInformation/UpdateInformation';

import EditDish from './src/app/features/admin/screens/editEat/EditDish';
import UpdateDish from './src/app/features/admin/screens/updateDish/UpdateDish';
import {requestUserPermission} from './src/app/shared/utils/PermissionFCM';
import {Platform} from 'react-native';
import Payment from './src/app/features/customer/screens/carts/payment/Payment';
import CartNoItem from './src/app/features/customer/screens/carts/cart/cartWithNoItem/CartNoItem';
import EditProfile from './src/app/features/customer/screens/profiles/editProfile/EditProfile';
import UploadImage from './src/app/features/customer/screens/profiles/uploadImage/UploadImage';

let persistor = persistStore(Store);

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestUserPermission();
    }
  }, []);

  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          console.log('User pressed notification', detail.notification);
          break;
      }
    });
  }, []);

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Screen
              name={Router.SPLASH_SCREEN}
              component={SplashScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Router.LOGIN}
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name={Router.UPDATE_INFO1}
              component={UpdateInformation}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name={Router.CUSTOMER_STACK}
              component={CustomerStack}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name={Router.ADMIN_STACK}
              component={AdminStack}
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
              name={Router.EDIT_DISH}
              component={EditDish}
              options={{
                headerShown: false,
                presentation: 'modal',
              }}
            />
            <Stack.Screen
              name={Router.UPDATE_DISH}
              component={UpdateDish}
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
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
