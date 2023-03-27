import {create} from 'react-test-renderer';
import {LOG} from '../../../../logger.config';

const {createAsyncThunk} = require('@reduxjs/toolkit');
const {constants} = require('../../shared/constants');
const {AxiosInstance} = require('../../shared/utils/AxiosInstance');
const log = LOG.extend('apiProduct.js');

export const fetchUploadImage = createAsyncThunk(
  constants.FETCH.UPLOAD_IMAGE,
  async path => {
    log.info('🚀 ~ file: apiProduct.js:8 ~ path:', path);
    const headers = {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    };
    const data = new FormData();
    data.append('file', {
      uri: path,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    log.info('🚀 ~ file: apiProduct.js:19 ~ data:', data);

    const response = await AxiosInstance().post('/upload-image', data, {
      headers: headers,
    });
    log.info(
      '🚀 ~ file: apiProduct.js:12 ~ fetchUploadImage ~ response:',
      response,
    );
    return response.data;
  },
);

export const fetchCategories = createAsyncThunk(
  constants.FETCH.FIND_CATEGORIES,
  async () => {
    const response = await AxiosInstance().get('/products/categories');
    // log.info(
    //   '🚀 ~ file: apiProduct.js:12 ~ fetchCategories ~ response:',
    //   response.data,
    // );
    return response.data;
  },
);

export const fetchAddDish = createAsyncThunk(
  constants.FETCH.ADD_DISH,
  async ({categoryId, dish}) => {
    log.info('🚀 ~ file: apiProduct.js:49 ~ dish:', dish);
    const response = await AxiosInstance().post(
      `/products/${categoryId}/add-dish`,
      {
        dish: dish,
      },
    );
    console.log("🚀 ~ file: apiProduct.js:58 ~ response:", response)

    return response.data;
  },
);

export const fetchDishes = createAsyncThunk(
  constants.FETCH.FIND_DISHES,
  async () => {
    const response = await AxiosInstance().get('/products/dishes');
    // log.info("🚀 ~ file: apiProduct.js:65 ~ response:", response.data)
    return response.data;
  },
);
