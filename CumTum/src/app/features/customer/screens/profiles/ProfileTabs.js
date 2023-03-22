import React from 'react';
import Router from '../../../../navigation/Router';
import Profile from './profile/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';

const ProfileTabs = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeKeyComponent>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name={Router.PROFILE}
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </SafeKeyComponent>
  );
};

export default ProfileTabs;
