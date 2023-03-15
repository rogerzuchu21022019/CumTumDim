import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Login';
import Router from './src/app/navigation/Router';

import {Store} from './src/app/app_store/Store';

// import Provider
import {Provider} from 'react-redux';
import AdminStack from './src/app/navigation/AdminStack';
import CustomerStack from './src/app/navigation/CustomerStack';

// import RootNavigation 
import {navigationRef} from './src/app/navigation/RootNavigation';

// Redux Persist
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
let persistor = persistStore(Store);

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
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
