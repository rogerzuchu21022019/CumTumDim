import {constants} from '../../shared/constants';
import {
  fetchAddDish,
  fetchCategories,
  fetchDishes,
  fetchUploadImage,
} from './apiProduct';

const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  data: null,
  loading: false,
  error: null,
  success: null,
  message: null,
  categories: [],
  dish: {},
  dishes: [],
  mainDishes: [],
  extraDishes: [],
  toppings: [],
  another: [],
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
    builder.addCase(fetchCategories.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.loading = false;
      state.success = dataResponse.success;
      state.message = dataResponse.message;
      state.categories = dataResponse.data;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
    });

    builder.addCase(fetchAddDish.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchAddDish.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.loading = false;
      state.success = dataResponse.success;
      state.message = dataResponse.message;
      state.dish = dataResponse.data;
    });
    builder.addCase(fetchAddDish.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
    });
    //
    builder.addCase(fetchDishes.pending, state => {
      state.loading = true;
    });

    builder.addCase(fetchDishes.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.loading = false;
      state.success = dataResponse.success;
      state.message = dataResponse.message;
      state.dishes = dataResponse.data;

      state.extraDishes = dataResponse.data.filter(
        dish => dish.categoryId === state.categories[0]._id,
      );

      state.toppings = dataResponse.data.filter(
        dish => dish.categoryId === state.categories[1]._id,
      );

      state.another = dataResponse.data.filter(
        dish => dish.categoryId === state.categories[2]._id,
      );

      state.mainDishes = dataResponse.data.filter(
        dish => dish.categoryId === state.categories[3]._id,
      );
    });
    builder.addCase(fetchDishes.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
    });
  },
});

export const productSelector = state => state.product;

export default sliceProduct.reducer;
