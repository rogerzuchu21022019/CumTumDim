//import createSlice
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

import sliceAdmin from '../features/admin/sliceAdmin';
import {constants} from '../shared/constants';

let persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: [],
  // blacklist: [constants.SLICE.ADMIN],
};

const rootReducers = combineReducers({
  admin: sliceAdmin,
});

let persistReducers = persistReducer(persistConfig, rootReducers);

export const Store = configureStore({
  reducer: persistReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // bỏ qua kiểm tra tính immutability của state
    }),
});
