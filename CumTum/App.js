import {View, Text} from 'react-native';
import React from 'react';
import {color} from './src/app/utils/Css';
import SafeKeyComponent from './src/app/components/safe_area/SafeKeyComponent';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeAdmin from './src/app/features/admin/screens/homeAdmin/HomeAdmin';
import LoginScreen from './Login';
import Router from './src/app/navigation/Router';
// import {Store} from './src/app/app_store/Store';
import {Store} from './src/app/app_store/Store';

// import Provider
import {Provider} from 'react-redux';
import AdminStack from './src/app/navigation/AdminStack';
import CustomerStack from './src/app/navigation/CustomerStack';
import { navigationRef } from './src/app/navigation/RootNavigation';

const App = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <Provider store={Store} >
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
    </Provider>
  );
};

export default App;
