import { LOG } from '../../../../logger.config';
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
  wishCart: [],
};

const log = LOG.extend('SLICE_PRODUCT.JS');

export const sliceProduct = createSlice({
  name: constants.SLICE.PRODUCT,
  initialState: initialState,
  reducers: {
    addDishToWishCart: (state, action) => {
      const data = action.payload;
      const {_id, amount} = data;
      const index = state.wishCart.findIndex(item => item._id === _id);
      console.log('🚀 ~ file: sliceProduct.js:35 ~ index:', index);
      if (index >= 0) {
        state.wishCart[index].amount += 1;
      } else {
        state.wishCart.push({
          ...data,
          amount: 1,
        });
      }
    },
    removeDishFromWishCart: (state, action) => {
      const data = action.payload;
      const {_id} = data;
      const index = state.wishCart.findIndex(item => item._id === _id);
      console.log('🚀 ~ file: sliceProduct.js:51 ~ index:', index);
      state.wishCart.splice(index, 1);
    },
    updateAmountInItem: (state, action) => {
      const {id, amount} = action.payload;
      const item = state.wishCart.find(item => {
        log.warn('🚀 ~ file: sliceProduct.js:55 ~ item:', item);
        return item._id === id;
      });
      if (item) {
        item.amount = amount;
      }
    },
    resetCart: state => {
      state.wishCart = [];
    },
  },
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

// export actions to register with store when use reducers
export const {
  addDishToWishCart,
  removeDishFromWishCart,
  resetCart,
  updateAmountInItem,
} = sliceProduct.actions;

export const productSelector = state => state.product;

export default sliceProduct.reducer;
