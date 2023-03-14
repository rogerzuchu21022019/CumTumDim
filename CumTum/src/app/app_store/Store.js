//import createSlice
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';

const Store = configureStore({
    reducer: {},
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

export default Store;
