import Router from '../../navigation/Router';
import {constants} from '../../shared/constants';
import {
  fetchLogin,
  fetchSignOut,
  fetchPushNotification,
  fetchUserById,
  fetchUpdateNotification,
  fetchAddAddress,
  fetchUpdateAddress,
} from './apiUser';

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
  addresses: [],
};

export const authSlice = createSlice({
  name: constants.SLICE.AUTH,
  initialState: initialState,
  reducers: {
    updateIsRead: (state, action) => {
      const data = action.payload;
      console.log('🚀 ~ file: sliceAuth.js:29 ~ data:', data);
      state.notifications = state.notifications.map(notification => {
        if (notification._id === data._id) {
          return {
            ...notification,
            isRead: data.isRead,
          };
        }
        return notification;
      });
    },
  },
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
      state.isLoading = false;
      state.user = dataResponse.data;
      state.notifications = state.user.notifications;
      state.addresses = state.user.addresses;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });

    // Push Notification  By UserId
    builder.addCase(fetchPushNotification.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchPushNotification.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = false;
      state.message = dataResponse.message;
      state.error = dataResponse.error;
      state.user = dataResponse.data;
    });
    builder.addCase(fetchPushNotification.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });

    // Update Notification  By UserId
    builder.addCase(fetchUpdateNotification.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchUpdateNotification.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = false;
      state.message = dataResponse.message;
      state.error = dataResponse.error;
      state.user = dataResponse.data;
    });
    builder.addCase(fetchUpdateNotification.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });

    // Add Address
    builder.addCase(fetchAddAddress.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchAddAddress.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = dataResponse.isLoading;
      state.message = dataResponse.message;
      state.error = dataResponse.error;
      state.user = dataResponse.data;
    });
    builder.addCase(fetchAddAddress.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });

    // Update Address
    builder.addCase(fetchUpdateAddress.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchUpdateAddress.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = dataResponse.isLoading;
      state.message = dataResponse.message;
      state.error = dataResponse.error;
      state.user = dataResponse.data;
    });
    builder.addCase(fetchUpdateAddress.rejected, (state, action) => {
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
export const {updateIsRead} = authSlice.actions;
export default authSlice.reducer;
