import Router from '../../navigation/Router';
import {constants} from '../../shared/constants';
import {fetchLogin, fetchSignOut, fetchUpdateNotification, fetchUserById} from './apiUser';

const {createSlice} = require('@reduxjs/toolkit');
import * as RootNavigation from '../../navigation/RootNavigation';

const initialState = {
  users: [],
  user: {},
  isLoading: false,
  error: null,
  isLoggedIn: false,
  message: null,
  notifications: [],
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
      state.notifications = state.user.notifications;

      // state.user.role === constants.ROLE.ADMIN
      //   ? RootNavigation.replace(Router.ADMIN_STACK)
      //   : RootNavigation.replace(Router.CUSTOMER_STACK);
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });

    // User ById
    builder.addCase(fetchUserById.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = true;
      state.user = dataResponse.data;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });

      // Update Notification  By UserId
      builder.addCase(fetchUpdateNotification.pending, state => {
        state.isLoading = true;
      });
      builder.addCase(fetchUpdateNotification.fulfilled, (state, action) => {
        const dataResponse = action.payload;
        state.isLoading = true;
        state.user = dataResponse.data;
      });
      builder.addCase(fetchUpdateNotification.rejected, (state, action) => {
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
