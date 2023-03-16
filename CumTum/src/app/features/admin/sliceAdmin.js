import Router from '../../navigation/Router';
import {constants} from '../../shared/constants';
import {fetchLogin} from './apiAdmin';

const {createSlice} = require('@reduxjs/toolkit');
import * as RootNavigation from '../../navigation/RootNavigation';

const initialState = {
  users: [],
  user: {},
  isLoading: false,
  error: null,
  isLoggedIn: false,
  message: null,
};

export const adminSlice = createSlice({
  name: constants.SLICE.ADMIN,
  initialState: initialState,
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

      // state.user.role === constants.ROLE.ADMIN
      //   ? RootNavigation.navigate(Router.ADMIN_STACK)
      //   : RootNavigation.navigate(Router.CUSTOMER_STACK);
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});
export const adminSelector = state => state.admin;
export default adminSlice.reducer;
