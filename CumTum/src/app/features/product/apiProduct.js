const {createAsyncThunk} = require('@reduxjs/toolkit');
const {constants} = require('../../shared/constants');
const {AxiosInstance} = require('../../shared/utils/AxiosInstance');

export const fetchUploadImage = createAsyncThunk(
  constants.FETCH.UPLOAD_IMAGE,
  async path => {
    console.log('🚀 ~ file: apiProduct.js:8 ~ path:', path);
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
    console.log('🚀 ~ file: apiProduct.js:19 ~ data:', data);

    const response = await AxiosInstance().post('/upload-image', data, {
      headers: headers,
    });
    console.log(
      '🚀 ~ file: apiProduct.js:12 ~ fetchUploadImage ~ response:',
      response,
    );
    return response.data;
  },
);
