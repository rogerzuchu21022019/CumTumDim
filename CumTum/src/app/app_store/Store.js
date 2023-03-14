//import createSlice
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import sliceAdmin from '../features/admin/sliceAdmin';

export const Store = configureStore({
    reducer: {
      admin:sliceAdmin
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // bỏ qua kiểm tra tính immutability của state
      thunk: {
        extraArgument: { // truyền tham số thêm cho các action creator trong thunk
          AsyncStorage, // truyền thư viện AsyncStorage
        },
      },
    }),
});

