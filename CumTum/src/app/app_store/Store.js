//import createSlice
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'reduxjs-toolkit-persist'


import {combineReducers, configureStore} from '@reduxjs/toolkit';



import sliceAdmin from '../features/admin/sliceAdmin';
import {constants} from '../shared/constants';

let persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whiteList: [],
  // blacklist: [constants.SLICE.ADMIN],
};

const rootReducers = combineReducers({
  admin: sliceAdmin,
});

const resetRootReducer = (state, action) => {
  if (action.type === 'logout/logoutFulfilled') {
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
    }),
});
