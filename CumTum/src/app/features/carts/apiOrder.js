import {LOG} from '../../../../logger.config';

const {createAsyncThunk} = require('@reduxjs/toolkit');
const {constants} = require('../../shared/constants');
const {AxiosInstance} = require('../../shared/utils/AxiosInstance');
const log = LOG.extend(`API_ORDER.JS`);

export const fetchCreateOrder = createAsyncThunk(
  constants.FETCH.CREATE_ORDER,
  async order => {
    const response = await AxiosInstance().post(
      `/products/push-notification-rabbit`,
      {
        // const response = await AxiosInstance().post(`/products/create-order`, {
        order,
      },
    );
    log.info('🚀 ~ file: apiOrder.js:13 ~ response ~ response:', response.data);
    return response.data;
  },
);

export const fetchOrders = createAsyncThunk(
  constants.FETCH.FIND_ORDERS,
  async () => {
    const response = await AxiosInstance().get(`/products/find-orders`);
    // log.error("🚀 ~ file: apiOrder.js:28 ~ response:", response.data)
    return response.data;
  },
);

export const fetchNotifies = createAsyncThunk(
  constants.FETCH.FIND_RABBIT,
  async () => {
    const response = await AxiosInstance().get(
      `/products/get-notification-rabbit`,
    );
    return response.data;
  },
);

export const fetchNotification = createAsyncThunk(
  constants.FETCH.PUSH_NOTIFICATION,
  async data => {
    const response = await AxiosInstance().post(`/products/push-notification`, {
      data,
    });
    log.info('🚀 ~ file: apiOrder.js:28 ~ response ~ response:', response.data);
    return response.data;
  },
);

export const fetchFindNotifications = createAsyncThunk(
  constants.FETCH.FIND_NOTIFICATIONS,
  async () => {
    const response = await AxiosInstance().get(`/products/find-notifications`);
    return response.data;
  },
);
