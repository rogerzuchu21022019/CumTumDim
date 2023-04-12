//import createSlice
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'reduxjs-toolkit-persist';

import {combineReducers, configureStore} from '@reduxjs/toolkit';

import sliceAuth from '../features/user/sliceAuth';

import sliceProduct from '../features/product/sliceProduct';
import {constants} from '../shared/constants';
import sliceCart from '../features/carts/sliceOrder';

let persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whiteList: [],
  // blacklist: [constants.SLICE.ADMIN],
};

const rootReducers = combineReducers({
  auth: sliceAuth,
  product: sliceProduct,
  cart: sliceCart,
});

const resetRootReducer = (state, action) => {
  if (action.type === constants.FETCH.SIGN_OUT + '/fulfilled') {
    state = undefined;
  }
  return rootReducers(state, action);
};

let persistedReducers = persistReducer(persistConfig, resetRootReducer);

export const Store = configureStore({
  reducer: persistedReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // bỏ qua kiểm tra tính immutability của state
      immutableCheck: false
    }),
});
