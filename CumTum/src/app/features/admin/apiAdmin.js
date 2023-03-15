const {createAsyncThunk} = require('@reduxjs/toolkit');
const { LOG } = require('../../../../logger.config');
const {constants} = require('../../shared/constants');
const {AxiosInstance} = require('../../shared/utils/AxiosInstance');
const log = LOG.extend(`API_ADMIN.JS`);
export const fetchLogin = createAsyncThunk(constants.FETCH.LOGIN, async (idToken,accessToken) => {
  const response = await AxiosInstance().post(`/login`, {
    idToken,
    accessToken
  });
  // log.info("🚀 ~ file: apiAdmin.js:8 ~ fetchLogin ~ response:", response.data)
  return response.data;
});
