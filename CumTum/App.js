import {View, Text} from 'react-native';
import React from 'react';
import {color} from './src/app/utils/Css';
import SafeKeyComponent from './src/app/components/safe_area/SafeKeyComponent';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './Login';
import Router from './src/app/navigation/Router';
// import {Store} from './src/app/app_store/Store';
import Store from './src/app/app_store/Store';

// import Provider
import {Provider} from 'react-redux';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={Router.LOGIN}
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name={Router.HOME_ADMIN} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
