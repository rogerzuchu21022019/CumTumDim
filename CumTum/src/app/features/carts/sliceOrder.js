import {useSelector} from 'react-redux';
import {LOG} from '../../../../logger.config';
import {constants} from '../../shared/constants';
import {sliceProduct, productSelector} from '../product/sliceProduct';
import {
  fetchCreateOrder,
  fetchFindNotifications,
  fetchNotification,
  fetchOrders,
} from './apiOrder';

const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  isLoading: false,
  message: '',
  error: false,
  order: {},
  orders: [],
  historyCart: [],
  notifications: [],
};

const log = LOG.extend('SLICE_CART.JS');

export const sliceCart = createSlice({
  name: constants.SLICE.CART,
  initialState: initialState,
  reducers: {
    createHistoryCart: (state, action) => {
      const data = action.payload;
      state.historyCart.push(data);
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchCreateOrder.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchCreateOrder.fulfilled, (state, action) => {
      const data = action.payload;
      state.isLoading = false;
      state.order = data.data;
    });
    builder.addCase(fetchCreateOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.message = action.payload;
    });

    //Orders
    builder.addCase(fetchOrders.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      const data = action.payload;
      state.isLoading = data.isLoading;
      state.error = data.error;
      state.message = data.message;
      state.orders = data.data;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      const data = action.payload;
      state.isLoading = data.isLoading;
      state.error = data.error;
      state.message = data.message;
    });

    /* Push Notification */
    builder.addCase(fetchNotification.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchNotification.fulfilled, (state, action) => {
      const data = action.payload;
      state.isLoading = data.isLoading;
      state.error = data.error;
      state.message = data.message;
      state.notifications.unshift(data.data);
    });
    builder.addCase(fetchNotification.rejected, (state, action) => {
      const data = action.payload;
      state.isLoading = data.isLoading;
      state.error = data.error;
      state.message = data.message;
    });

    /* Notifications */
    builder.addCase(fetchFindNotifications.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchFindNotifications.fulfilled, (state, action) => {
      const data = action.payload;
      state.isLoading = data.isLoading;
      state.error = data.error;
      state.message = data.message;
      state.notifications = data.data;
    });
    builder.addCase(fetchFindNotifications.rejected, (state, action) => {
      const data = action.payload;
      state.isLoading = data.isLoading;
      state.error = data.error;
      state.message = data.message;
    });
  },
});

export const {createHistoryCart} = sliceCart.actions;

export const cartSelector = state => state.cart;
export default sliceCart.reducer;
