import {useSelector} from 'react-redux';
import {LOG} from '../../../../logger.config';
import {constants} from '../../shared/constants';
import {sliceProduct, productSelector} from '../product/sliceProduct';
import {format, isToday} from 'date-fns';

import {
  fetchAccessTokenPaypal,
  fetchCreateOrder,
  fetchCreateOrderPaypal,
  fetchFindNotifications,
  fetchNotification,
  fetchOrders,
  fetchUpdateOrder,
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
  orderToday: [],
  accessTokenPaypal: '',
  ordersPaypal: [],
};

const log = LOG.extend('SLICE_CART.JS');

export const sliceCart = createSlice({
  name: constants.SLICE.CART,
  initialState: initialState,
  reducers: {
    createHistoryCart: (state, action) => {
      const data = action.payload;
      state.historyCart.unshift(data);
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
      state.orderToday = state.orders.filter(item => {
        const createdAt = item.createdAt;
        const newCreatedAt = new Date(createdAt);
        const isTodayd = isToday(newCreatedAt);
        if (isTodayd) {
          return item;
        }
      });
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

    /* Update Order */
    builder.addCase(fetchUpdateOrder.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchUpdateOrder.fulfilled, (state, action) => {
      const data = action.payload;
      state.message = data.message;
      state.orderToday.filter(item => {
        if (item._id === data.data._id) {
          item.orderStatus = data.data.orderStatus;
        }
      });
    });
    builder.addCase(fetchUpdateOrder.rejected, (state, action) => {
      const data = action.payload;
      state.isLoading = false;
    });

    /* Fetch AccessToken Paypal */
    builder.addCase(fetchAccessTokenPaypal.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchAccessTokenPaypal.fulfilled, (state, action) => {
      const data = action.payload;
      state.accessTokenPaypal = data.access_token;
    });
    builder.addCase(fetchAccessTokenPaypal.rejected, (state, action) => {
      const data = action.payload;
      state.isLoading = false;
    });

    /* Fetch Create Order Paypal */
    builder.addCase(fetchCreateOrderPaypal.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchCreateOrderPaypal.fulfilled, (state, action) => {
      const data = action.payload;
      state.ordersPaypal.unshift(data)
    });
    builder.addCase(fetchCreateOrderPaypal.rejected, (state, action) => {
      const data = action.payload;
      state.isLoading = false;
    });
  },
});

export const {createHistoryCart} = sliceCart.actions;

export const cartSelector = state => state.cart;
export default sliceCart.reducer;
