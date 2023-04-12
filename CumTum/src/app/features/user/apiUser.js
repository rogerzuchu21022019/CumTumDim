import {GoogleSignin} from '@react-native-google-signin/google-signin';

const {createAsyncThunk} = require('@reduxjs/toolkit');
const {LOG} = require('../../../../logger.config');
const {constants} = require('../../shared/constants');
const {AxiosInstance} = require('../../shared/utils/AxiosInstance');
const log = LOG.extend(`API_ADMIN.JS`);
export const fetchLogin = createAsyncThunk(
  constants.FETCH.LOGIN,
  async (idToken, accessToken) => {
    const response = await AxiosInstance().post(`/login`, {
      idToken,
      accessToken,
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
    log.info('🚀 ~ file: apiUser.js:8 ~ fetchLogin ~ response:', response.data);
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

    log.error('🚀 ~ file: apiUser.js:34 ~ response:', response.data);
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
