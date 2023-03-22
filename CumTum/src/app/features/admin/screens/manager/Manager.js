import React from 'react';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Statistic from '../statistic/Statistic';
import Router from '../../../../navigation/Router';
import DetailCard from '../detailCart/DetailCard';
import AddDish from '../addDish/AddDish';
import EditDish from '../editEat/EditDish';
import DeleteDish from '../deleteDish/DeleteDish';
import Manage from './manageDish/ManageDish';
import ManagerCategories from './ManagerCategories/ManagerCategories';
import ManagerDish from './manageDish/ManageDish';
// import ManagerDish from './ManagerDish/ManagerDish';
const Manager = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeKeyComponent>
      <Stack.Navigator>
        {/* Quản lý */}
        <Stack.Group>
          <Stack.Screen
            name={Router.MANAGE}
            component={Manage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Group>
            <Stack.Screen
              name="ManagerCategories"
              component={ManagerCategories}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="AddDish"
              component={AddDish}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EditDish"
              component={EditDish}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Group>



        </Stack.Group>
      </Stack.Navigator>
    </SafeKeyComponent>
  );
};

export default Manager;
