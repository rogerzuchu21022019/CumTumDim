import {useSelector} from 'react-redux';
import {LOG} from '../../../../logger.config';
import {constants} from '../../shared/constants';
import {sliceProduct, productSelector} from '../product/sliceProduct';

const {createSlice, createSelector} = require('@reduxjs/toolkit');

const initialState = {
  cart: [],
  historyCart:[]
};

const log = LOG.extend('SLICE_CART.JS');

export const sliceCart = createSlice({
  name: constants.SLICE.CART,
  initialState: initialState,
  reducers: {
    createHistoryCart : (state,action) =>{
      const data = action.payload
      state.historyCart.push(data)
    }
  },
});

export const {createHistoryCart} = sliceCart.actions;

export const cartSelector = state => state.cart;
export default sliceCart.reducer;
