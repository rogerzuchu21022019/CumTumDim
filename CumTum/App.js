import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/app/features/admin/screens/login/Login';
import Router from './src/app/navigation/Router';

import { Store } from './src/app/app_store/Store';

// import Provider
import { Provider } from 'react-redux';
import AdminStack from './src/app/navigation/AdminStack';
import CustomerStack from './src/app/navigation/CustomerStack';

// import RootNavigation
import {navigationRef} from './src/app/navigation/RootNavigation';

// Redux Persist

import { persistStore, persistReducer } from 'reduxjs-toolkit-persist'
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import SplashSrceeen from './src/app/features/admin/screens/splashSrceeen/SplashSrceeen';
let persistor = persistStore(Store);

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator >
            <Stack.Screen
              name={Router.SPLASH_SCREEN}
              component={SplashSrceeen}
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

            <Stack.Screen name={Router.ADMIN_STACK} component={AdminStack} />
            <Stack.Screen
              name={Router.CUSTOMER_STACK}
              component={CustomerStack}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
