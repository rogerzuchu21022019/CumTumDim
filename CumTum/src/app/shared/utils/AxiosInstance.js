// @ts-nocheck
// import jwtDecode from 'jwt-decode';

import Axios from 'axios';
import {LOG} from '../../../../logger.config';
import {constants} from '../constants';
const log = LOG.extend(`AXIOS_INSTANCE`);
export const AxiosInstance = () => {
  const axios = Axios.create({
    // baseURL: BaseUrl.Main,
    baseURL: constants.BASE_URL.SECOND,
    // baseURL: BaseUrl.Four,
  });
  axios.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    response => {
      // log.info('🚀 ~ file: AxiosInstance.js:32 ~ response:', response);
      return response;
    },
    error => {
      return Promise.reject(error);
    },
  );
  return axios;
};
