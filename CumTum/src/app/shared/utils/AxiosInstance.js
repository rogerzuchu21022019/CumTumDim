// @ts-nocheck
import AsyncStorage from '@react-native-async-storage/async-storage';
// import jwtDecode from 'jwt-decode';

import Axios from 'axios';
import {LOG} from '../../../../logger.config';
import {BaseUrl} from '../../api/BaseUrl';
import { constants } from '../constants';
import {getToken, saveToken} from './AsyncStorage';
const log = LOG.extend(`AXIOS_INSTANCE`);
export const AxiosInstance = () => {
  const axios = Axios.create({
    // baseURL: BaseUrl.Main,
    baseURL: constants.BASE_URL.THIRD,
    // baseURL: BaseUrl.Four,
  });
  axios.interceptors.request.use(
    function (config) {
      config.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': 'axios 0.25',
      };
      // console.log('🚀 ~ file: AxiosInstance.js:20 ~ config:', config);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      console.log('🚀 ~ file: AxiosInstance.js:32 ~ response:', response);
      return response;
    },
    function (error) {
      return Promise.reject(error);
    },
  );
  return axios;
};
