import React from 'react';
import Router from '../../../../navigation/Router';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';
import History from './history/History';

const HistoryTabs = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeKeyComponent>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name={Router.HISTORY_WITH_ITEMS}
            component={History}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </SafeKeyComponent>
  );
};

export default HistoryTabs;
