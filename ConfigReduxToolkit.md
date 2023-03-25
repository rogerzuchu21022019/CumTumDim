`1 add library`

```
1 react-redux 
2 @reduxjs/toolkit
3 redux-persist
4 redux-saga
```

`2 add store`
Tạo Store.js trong app_store
*** Lưu ý phải là export const Store 
```
1 import {configureStore} from '@reduxjs/toolkit';

2 export const Store = configureStore({
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


```

`3 add provider`
Vào App.js

```
1 import {Provider} from 'react-redux';

2 import {Store} from './src/app/app_store/Store'; => Phải là Store nằm trong {}

3 Bao provider ở bên ngoài Navigation
    <Provider store={Store}>
         {/* </NavigationContainer> */}
    </Provider >
```

`4 tạo apiAdmin.js để quản lý createAsyncThunk`

```
export const fetchLogin = createAsyncThunk(constants.FETCH.LOGIN, async (idToken,accessToken) => {
  const response = await AxiosInstance().post(`/login`, {
    idToken,
    accessToken
  });
  log.info("🚀 ~ file: apiAdmin.js:8 ~ fetchLogin ~ response:", response.data)
  return response.data;
});
```

```
*** Lưu ý khi sử dụng: createAsyncThunk là: 
1 : arg1 : là tên của action và không cần set(pending,fulfilled,failed,khi state thay đổi là nó sẽ hiện trong builder.addCase và mình sẽ 3 state này trong đó )
2 : arg2 là func(có thể truyền vào data để truyền cho method post ) 
3 : luôn luôn return về response.data để builder.addCase có thể lấy ra giá trị để gắn vào initialState bên sliceAdmin.js đơn giản và không bị rối
```

`5 tạo slice : sliceAdmin.js`

```
1 import createSlice 
const {createSlice} = require('@reduxjs/toolkit');
  
2 khởi tạo State

const initialState = {
  users: [],
  user: {},
  isLoading: false,
  error: null,
  isLoggedIn: false,
  message: null,
};

    *** Lưu ý ***
    1 Các state này sẽ sử dụng cho nguyên 1 slice .
    2 Là nó sẽ cập nhật state từ json trả về từ api. Cho nên ban đầu khởi tạo dư cũng không sao.

3 `export const slice` 

export const adminSlice = createSlice({
  name: constants.SLICE.ADMIN,
  initialState:initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLogin.pending, state => {
      state.isLoading = true;
      state.error = null;
      state.user = null;
      state.isLoggedIn = null;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = false;
      state.message = dataResponse.message;
      state.isLoggedIn = dataResponse.isLoggedIn;
      state.error = dataResponse.error;
      state.user = dataResponse.data;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.isLoading = true;
      state.error = true;
    });
  },
});

  *** Lưu ý ***
  1 name: name này sẽ sử dụng ở trong Store
  2 initialState lấy ở trên vừa khởi tạo
  3 reducer: sẽ hạn chế sử dụng
  4 sử dụng extraReducer nhiều và sử dụng builder.addCase
  5 builder.addCase của 1 action sẽ gồm 3 state(pending,fulfilled,rejected)
  6 Bước 4 khởi tạo createAsyncThunk và tất cả đều return về response.data . Nếu không đúng thì phải check lại và return lại về response.data
  7 Import createAsyncThunk đã khởi tạo ở bước 4 vào builder.addCase và tạo 3 state(pending,fullfilled,rejected) ở arg1, tạo 2 biến (state,action) ở arg2
    7.1 Handle pending với state tự cho. Riêng isLoading luôn luôn = true để có thể handle ActivityIndicator cho nó load khi mà data đang load
    7.2 Handle fulfilled với 3 bước
      Step1: tạo biến dataResponse = action.payload cho gọn
      Step2: gọi các state(ở trong initialState) ra để cập nhật 
      Step3: Dựa vào data response từ json của API để cập nhật lại State của Store
      Step4: Lúc này chỉ cần lấy dataResponse chấm rồi gọi state muốn cập nhật là sẽ ra liền và không bị rối
    7.3 Handle rejected với 2 lỗi thôi:
      1 isLoading sẽ = false. Tại sao không phải = true. Vì nếu = true thì ActivityIndicator sẽ quay suốt. Nếu để = false có nghĩa là đã lỗi và không cần quay nữa. Nên default khi handle reject là isLoading = false
      2 error default = true

4 `export selector` để có thể sử dụng ở nơi khác

export const adminSelector = (state) => state.admin;

5 `export default` (reducer) thằng tên slice lúc nãy đã export const để mang vào store

export default adminSlice.reducer;



