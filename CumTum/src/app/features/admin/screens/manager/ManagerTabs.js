import React from 'react';
import SafeKeyComponent from '../../../../components/safe_area/SafeKeyComponent';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Router from '../../../../navigation/Router';

import Manage from './manage/Manage';
import ManageCategories from './manageCategories/ManageCategories';
import ManageFood from './manageFood/ManageFood';
import AddDish from './manageFood/addDish/AddDish';
import EditDish from './manageFood/editDish/EditDish';
import AddTypeFood from './manageCategories/addTypeFood/AddTypeFood';
import EditTypeFood from './manageCategories/editTypeFood/EditTypeFood';
import DeleteTypeFood from './manageCategories/deleteTypeFood/DeleteTypeFood';
import UpdateTypeFood from './manageCategories/updateTypeFood/UpdateTypeFood';
import UpdateDish from './manageFood/updateDish/UpdateDish';
import DeleteDish from './manageFood/deleteDish/DeleteDish';
import Banner from './banner/Banner';
import AddBanner from './banner/addBanner/AddBanner';
import DeleteBanner from './banner/deleteBanner/DeleteBanner';
import UpdateBanner from './banner/updateBanner/UpdateBanner';

const ManagerTabs = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeKeyComponent>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name={Router.MANAGE}
            component={Manage}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name={Router.MANAGE_CATEGORIES}
            component={ManageCategories}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.MANAGE_FOOD}
            component={ManageFood}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name={Router.ADD_DISH}
            component={AddDish}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.EDIT_DISH}
            component={EditDish}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name={Router.ADD_TYPE_FOOD}
            component={AddTypeFood}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.EDIT_TYPE_FOOD}
            component={EditTypeFood}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.DELETE_TYPE_FOOD}
            component={DeleteTypeFood}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.UPDATE_TYPE_FOOD}
            component={UpdateTypeFood}
            options={{
              headerShown: false,
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
            name={Router.DELETE_DISH}
            component={DeleteDish}
            options={{
              headerShown: false,
              presentation: 'modal',
            }}
          />
          <Stack.Screen
            name={Router.BANNER}
            component={Banner}
            options={{
              headerShown: false,
              presentation: 'modal',
            }}
          />
          <Stack.Screen
            name={Router.ADD_BANNER}
            component={AddBanner}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.UPDATE_BANNER}
            component={UpdateBanner}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Router.DELETE_BANNER}
            component={DeleteBanner}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </SafeKeyComponent>
  );
};

export default ManagerTabs;
