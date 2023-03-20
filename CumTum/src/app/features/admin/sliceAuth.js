import Router from '../../navigation/Router';
import {constants} from '../../shared/constants';
import {fetchLogin, fetchSignOut} from './apiAdmin';

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

export const authSlice = createSlice({
  name: constants.SLICE.AUTH,
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLogin.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = true;
      state.message = dataResponse.message;
      state.isLoggedIn = dataResponse.isLoggedIn;
      state.error = dataResponse.error;
      state.user = dataResponse.data;

      // state.user.role === constants.ROLE.ADMIN
      //   ? RootNavigation.replace(Router.ADMIN_STACK)
      //   : RootNavigation.replace(Router.CUSTOMER_STACK);
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });

    // Sign Out
    builder.addCase(fetchSignOut.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchSignOut.fulfilled, state => {
      return initialState;
    });
    builder.addCase(fetchSignOut.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});
export const authSelector = state => state.auth;
export default authSlice.reducer;
