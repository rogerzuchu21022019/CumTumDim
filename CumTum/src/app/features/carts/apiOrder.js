import axios from 'axios';
const base64 = require('base-64');

import {LOG} from '../../../../logger.config';
import {setItemPaypal} from './itemData';

const {createAsyncThunk} = require('@reduxjs/toolkit');
const {constants} = require('../../shared/constants');
const {AxiosInstance} = require('../../shared/utils/AxiosInstance');
const log = LOG.extend(`API_ORDER.JS`);

export const fetchCreateOrder = createAsyncThunk(
  constants.FETCH.CREATE_ORDER,
  async newOrder => {
    // const response = await AxiosInstance().post(
    // `/products/push-notification-rabbit`,
    // {
    const response = await AxiosInstance().post(`/products/create-order`, {
      order: newOrder,
    });
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

export const fetchUpdateOrder = createAsyncThunk(
  constants.FETCH.UPDATE_ORDER,
  async data => {
    log.error('🚀 ~ file: apiOrder.js:63 ~ data:', data);
    const response = await AxiosInstance().post(
      `/products/find-order-by-id/${data.orderId}`,
      {
        orderStatus: data.orderStatus,
      },
    );
    console.log('🚀 ~ file: apiOrder.js:69 ~ response:', response.data);
    return response.data;
  },
);

export const fetchAccessTokenPaypal = createAsyncThunk(
  constants.FETCH.ACCESS_TOKEN_PAYPAL,
  async () => {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${base64.encode(
        `${constants.PAYPAL.CLIENT_ID_PAYPAL}:${constants.PAYPAL.SECRET_PAYPAL}`,
      )}`,
    };
    try {
      const response = await axios.post(
        `${constants.PAYPAL.SANDBOX_PAYPAL}/v1/oauth2/token`,
        {
          grant_type: 'client_credentials',
        },
        {
          headers: headers,
        },
      );
      log.info('🚀 ~ file: apiOrder.js:97 ~ response:', response.data);
      return response.data;
    } catch (error) {
      log.error('🚀 ~ file: apiOrder.js:101 ~ error:', error);
    }
  },
);

export const fetchCreateOrderPaypal = createAsyncThunk(
  constants.FETCH.CREATE_ORDER_PAYPAL,
  async data => {
    log.info('🚀 ~ file: apiOrder.js:108 ~ data:', data);
    const accessToken = data.accessToken;
    const order = data.order;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };
    try {
      const response = await axios.post(
        `${constants.PAYPAL.SANDBOX_PAYPAL}/v2/checkout/orders`,
        order,
        {
          headers: headers,
        },
      );
      log.info('🚀 ~ file: apiOrder.js:97 ~ response:', response.data);
      return response.data;
    } catch (error) {
      log.error('🚀 ~ file: apiOrder.js:101 ~ error:', error);
    }
  },
);

export const fetchCaptureOrder = createAsyncThunk(
  constants.FETCH.CREATE_ORDER_PAYPAL,
  async data => {
    log.info('🚀 ~ file: apiOrder.js:108 ~ data:', data);
    const accessToken = data.accessToken;
    const order = data.order;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };
    try {
      const response = await axios.post(
        `${constants.PAYPAL.SANDBOX_PAYPAL}/v2/checkout/orders/${data.order._id}/capture`,
        order,
        {
          headers: headers,
        },
      );
      log.info('🚀 ~ file: apiOrder.js:97 ~ response:', response.data);
      return response.data;
    } catch (error) {
      log.error('🚀 ~ file: apiOrder.js:101 ~ error:', error);
    }
  },
);
