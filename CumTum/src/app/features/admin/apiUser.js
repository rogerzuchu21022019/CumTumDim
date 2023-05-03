import {GoogleSignin} from '@react-native-google-signin/google-signin';

const {createAsyncThunk} = require('@reduxjs/toolkit');
const {LOG} = require('../../../../logger.config');
const {constants} = require('../../shared/constants');
const {AxiosInstance} = require('../../shared/utils/AxiosInstance');
const log = LOG.extend(`API_USER.JS`);
export const fetchLogin = createAsyncThunk(
  constants.FETCH.LOGIN,
  async data => {
    const response = await AxiosInstance().post(`/login`, {
      idToken: data.idToken,
      accessToken: data.accessToken,
      fcmTokenDevice: data.fcmTokenDevice,
    });
    // log.info("🚀 ~ file: apiUser.js:8 ~ fetchLogin ~ response:", response.data)
    return response.data;
  },
);

export const fetchUserById = createAsyncThunk(
  constants.FETCH.USER_BY_ID,
  async userId => {
    const response = await AxiosInstance().get(
      `/users/${userId}/find-user-by-id`,
    );
    // log.info('🚀 ~ file: apiUser.js:8 ~ fetchLogin ~ response:', response.data);
    return response.data;
  },
);

export const fetchUpdateUserInfo = createAsyncThunk(
  constants.FETCH.UPDATE_USER_INFO,
  async data => {
    log.error('🚀 ~ file: apiUser.js:34 ~ data:', data);
    const response = await AxiosInstance().post(
      `/users/${data.userId}/update-user-info`,
      {
        imageUrl: data.imageUrl,
        address: data.address,
      },
    );
    // log.info("🚀 ~ file: apiUser.js:41 ~ response:", response.data)

    return response.data;
  },
);

export const fetchPushNotification = createAsyncThunk(
  constants.FETCH.PUSH_NOTIFICATION,
  async data => {
    log.error('🚀 ~ file: apiUser.js:34 ~ data:', data);
    const response = await AxiosInstance().post(
      `/users/${data.userId}/push-notification`,
      {
        notification: data.notification,
        order: data.orderData,
      },
    );

    // log.error('🚀 ~ file: apiUser.js:59 ~ response:', response.data);
    return response.data;
  },
);

export const fetchUpdateNotification = createAsyncThunk(
  constants.FETCH.UPDATE_NOTIFICATION,
  async data => {
    log.error('🚀 ~ file: apiUser.js:34 ~ data:', data);
    const response = await AxiosInstance().post(
      `/users/${data.userId}/update-notification`,
      {
        notification: data.notification,
      },
    );
    // log.warning('🚀 ~ file: apiUser.js:74 ~ response:', response.data);

    return response.data;
  },
);

/* Address */
export const fetchAddAddress = createAsyncThunk(
  constants.FETCH.ADD_ADDRESS,
  async data => {
    log.info('🚀 ~ file: apiUser.js:84 ~ data:', data);
    const response = await AxiosInstance().post(
      `/users/add-address/${data.userId}`,
      {
        address: data.address,
      },
    );

    // log.error('🚀 ~ file: apiUser.js:76 ~ response:', response.data);
    return response.data;
  },
);

/* Address */
export const fetchUpdateAddress = createAsyncThunk(
  constants.FETCH.UPDATE_ADDRESS,
  async data => {
    log.info('🚀 ~ file: apiUser.js:101 ~ data:', data);
    const response = await AxiosInstance().post(
      `/users/update-address/${data.userId}`,
      {
        address: data.address,
      },
    );

    // log.error('🚀 ~ file: apiUser.js:76 ~ response:', response.data);
    return response.data;
  },
);

/* Address */
export const fetchDeleteAddress = createAsyncThunk(
  constants.FETCH.DELETE_ADDRESS,
  async data => {
    log.info('🚀 ~ file: apiUser.js:118 ~ data:', data);
    const response = await AxiosInstance().post(
      `/users/delete-address/${data.userId}`,
      {
        address: data.address,
      },
    );

    // log.error('🚀 ~ file: apiUser.js:126 ~ response:', response.data);
    return response.data;
  },
);

export const fetchSignOut = createAsyncThunk(
  constants.FETCH.SIGN_OUT,
  async () => {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    const string = 'success';
    return string;
  },
);
