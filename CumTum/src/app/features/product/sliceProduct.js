import {constants} from '../../shared/constants';
import {fetchUploadImage} from './apiProduct';

const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  data: null,
  loading: false,
  error: null,
  success: null,
  message: null,
};

export const sliceProduct = createSlice({
  name: constants.SLICE.PRODUCT,
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUploadImage.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUploadImage.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.loading = false;
      state.success = dataResponse.success;
      state.message = dataResponse.message;
      state.data = dataResponse.data;
    });
    builder.addCase(fetchUploadImage.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
    });
  },
});

export const productSelector = state => state.product;


export default sliceProduct.reducer;
