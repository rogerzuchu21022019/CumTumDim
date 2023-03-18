import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Router from './src/app/navigation/Router';

import { Store } from './src/app/app_store/Store';

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

let persistor = persistStore(Store);
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    // <UpdateInformation></UpdateInformation>
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
              name={Router.ADMIN_STACK}
              component={AdminStack}
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
              name={Router.DETAIL_CART_ADMIN}
              component={DetailCard}
              options={{
                headerShown: false,
                presentation:'modal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
    // <Otp/>
  );
};

export default App;
