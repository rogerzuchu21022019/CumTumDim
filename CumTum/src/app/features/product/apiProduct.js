import {create} from 'react-test-renderer';
import {LOG} from '../../../../logger.config';

const {createAsyncThunk} = require('@reduxjs/toolkit');
const {constants} = require('../../shared/constants');
const {AxiosInstance} = require('../../shared/utils/AxiosInstance');
const log = LOG.extend('apiProduct.js');

export const fetchUploadImage = createAsyncThunk(
  constants.FETCH.UPLOAD_IMAGE,
  async path => {
    // log.info('🚀 ~ file: apiProduct.js:8 ~ path:', path);
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
    // log.info('🚀 ~ file: apiProduct.js:19 ~ data:', data);

    const response = await AxiosInstance().post('/upload-image', data, {
      headers: headers,
    });
    // log.info(
    //   '🚀 ~ file: apiProduct.js:12 ~ fetchUploadImage ~ response:',
    //   response,
    // );
    return response.data;
  },
);

export const fetchAddCategory = createAsyncThunk(
  constants.FETCH.ADD_CATEGORY,
  async name => {
    console.log('🚀 ~ file: apiProduct.js:39 ~ name:', name);
    const response = await AxiosInstance().post('/products/create-cate', {
      name: name,
    });
    // log.info(
    //   '🚀 ~ file: apiProduct.js:40 ~ response ~ response:',
    //   response.data,
    // );

    return response.data;
  },
);

export const fetchUpdateCategory = createAsyncThunk(
  constants.FETCH.UPDATE_CATEGORY_BY_ID,
  async data => {
    // log.info('🚀 ~ file: apiProduct.js:55 ~ data:', data);
    const response = await AxiosInstance().post(
      `/products/update-category-by-id/${data.categoryId}`,
      {
        name: data.name,
      },
    );
    // log.info(
    //   '🚀 ~ file: apiProduct.js:63 ~ response ~ response:',
    //   response.data,
    // );

    return response.data;
  },
);

export const fetchDeleteCategory = createAsyncThunk(
  constants.FETCH.DELETE_CATEGORY_BY_ID,
  async categoryId => {
    // log.info('🚀 ~ file: apiProduct.js:55 ~ data:', data);
    const response = await AxiosInstance().post(
      `/products/delete-category/${categoryId}`,
    );
    // log.info(
    //   '🚀 ~ file: apiProduct.js:63 ~ response ~ response:',
    //   response.data,
    // );

    return response.data;
  },
);

// http://localhost:3000/api/products/update-category-by-id/643acd4674c20e7854e3f9b1

export const fetchCategories = createAsyncThunk(
  constants.FETCH.FIND_CATEGORIES,
  async () => {
    const response = await AxiosInstance().get('/products/categories');
    // log.info(
    //   '🚀 ~ file: apiProduct.js:12 ~ fetchCategories ~ response:',
    //   response.data.data,
    // );
    return response.data;
  },
);

export const fetchAddDish = createAsyncThunk(
  constants.FETCH.ADD_DISH,
  async ({categoryId, dish}) => {
    // log.info('🚀 ~ file: apiProduct.js:49 ~ dish:', dish);
    const response = await AxiosInstance().post(
      `/products/${categoryId}/add-dish`,
      {
        dish: dish,
      },
    );
    // console.log("🚀 ~ file: apiProduct.js:58 ~ response:", response)

    return response.data;
  },
);

export const fetchDeleteDish = createAsyncThunk(
  constants.FETCH.DELETE_DISH,
  async dishId => {
    const response = await AxiosInstance().post(
      `/products/delete-dish/${dishId}`,
    );
    log.info(
      '🚀 ~ file: apiProduct.js:128 ~ response ~ response:',
      response.data,
    );

    return response.data;
  },
);

export const fetchUpdateDish = createAsyncThunk(
  constants.FETCH.UPDATE_DISH,
  async data => {
    log.error('🚀 ~ file: apiProduct.js:120 ~ data:', data);
    const response = await AxiosInstance().post(
      `/products/update-dish-by-id/${data.dishId}`,
      {
        dish: data.dish,
      },
    );
    log.info(
      '🚀 ~ file: apiProduct.js:128 ~ response ~ response:',
      response.data,
    );

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
