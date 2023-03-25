import {useSelector} from 'react-redux';
import {LOG} from '../../../../logger.config';
import {constants} from '../../shared/constants';
import {productSelector} from '../product/sliceProduct';

const {createSlice, createSelector} = require('@reduxjs/toolkit');

const initialState = {
  wishCart: [],
  mainDishCart: [],
  extraDishCart: [],
  toppingsCart: [],
  anotherCart: [],
};

const log = LOG.extend('SLICE_CART.JS');


export const categories = createSelector(
  (state) => state.product.categories,
  (categories) => categories
);

export const sliceCart = createSlice({
  name: constants.SLICE.CART,
  initialState: initialState,
  reducers: {
    addDishToWishCartOrUpdate: (state, action) => {
      let data = action.payload;
      const {_id, amount, price, categoryId} = data;
      const itemMainCart = state.mainDishCart.find(item => item._id === _id);
      const itemExtraCart = state.extraDishCart.find(item => item._id === _id);
      const itemToppingsCart = state.toppingsCart.find(
        item => item._id === _id,
      );
      const itemAnotherCart = state.anotherCart.find(item => item._id === _id);

      if (itemMainCart) {
        itemMainCart.amount += 1;
      } else {
        data = {
          ...data,
          amount: 1,
        };
        const filterDataMainList = categories.filter(
          item => item._id === categoryId && item.name === 'Món chính',
        );
        if (filterDataMainList.length > 0) {
          state.mainDishCart.push(data);
        }
      }
      if (itemExtraCart) {
        itemExtraCart.amount += 1;
      } else {
        data = {
          ...data,
          amount: 1,
        };
        const filterDataExtraList = categories.filter(
          item => item._id === categoryId && item.name === 'Món ăn thêm',
        );
        if (filterDataExtraList.length > 0) {
          state.extraDishCart.push(data);
        }
      }

      if (itemToppingsCart) {
        itemToppingsCart.amount += 1;
      } else {
        data = {
          ...data,
          amount: 1,
        };
        const filterDataToppingsList = categories.filter(
          item => item._id === categoryId && item.name === 'Toppings',
        );
        if (filterDataToppingsList.length > 0) {
          state.toppingsCart.push(data);
        }
      }

      if (itemAnotherCart) {
        itemAnotherCart.amount += 1;
      } else {
        data = {
          ...data,
          amount: 1,
        };
        const filterDataAnotherList = categories.filter(
          item => item._id === categoryId && item.name === 'Khác',
        );
        if (filterDataAnotherList.length > 0) {
          state.anotherCart.push(data);
        }
      }

      return state;
    },

    decreaseDishByID: (state, action) => {
      const data = action.payload;
      const {_id} = data;
      const itemMainCart = state.mainDishCart.find(item => item._id === _id);
      // log.error('🚀 ~ file: sliceProduct.js:49 ~ item:', item);
      if (itemMainCart) {
        //=> Check item tìm trong array có không
        if (itemMainCart.amount > 0) {
          // Nếu số lượng > 0 thì nó sẽ giảm 1 mỗi lần click dấu -
          itemMainCart.amount -= 1;
        }
        if (itemMainCart.amount === 0) {
          // Nếu số lượng === 0 thì xoá thằng đó bằng cách hiện ra 1 list mới không có id của nó

          /* C1: Viết tường minh  */
          // const filterNewListWithoutItemIdFounded = state.wishCart.filter(item => {
          //   return item._id !== _id;
          // });
          // state.wishCart = filterNewListWithoutItemIdFounded;

          /* C2: Viết ngắn gọn */
          state.mainDishCart = state.mainDishCart.filter(item => {
            return item._id !== _id;
          });
          // log.info(
          //   '🚀 ~ file: sliceProduct.js:56 ~ state.wishCart:',
          //   state.wishCart,
          // );
        }
      }

      const itemExtraCart = state.extraDishCart.find(item => item._id === _id);
      if (itemExtraCart) {
        if (itemExtraCart.amount > 0) {
          itemExtraCart.amount -= 1;
        }
        if (itemExtraCart.amount === 0) {
          state.extraDishCart = state.extraDishCart.filter(item => {
            return item._id !== _id;
          });
        }
      }

      const itemToppingsCart = state.toppingsCart.find(
        item => item._id === _id,
      );
      if (itemToppingsCart) {
        if (itemToppingsCart.amount > 0) {
          itemToppingsCart.amount -= 1;
        }
        if (itemToppingsCart.amount === 0) {
          state.toppingsCart = state.toppingsCart.filter(item => {
            return item._id !== _id;
          });
        }
      }

      const itemAnotherCart = state.anotherCart.find(item => item._id === _id);

      if (itemAnotherCart) {
        if (itemAnotherCart.amount > 0) {
          itemAnotherCart.amount -= 1;
        }
        if (itemAnotherCart.amount === 0) {
          state.anotherCart = state.anotherCart.filter(item => {
            return item._id !== _id;
          });
        }
      }

      return state;
    },
    resetCart: state => {
      state.mainDishCart = [];
      state.extraDishCart = [];
      state.toppingsCart = [];
      state.anotherCart = [];
      return state;
    },
  },
});
export const {addDishToWishCartOrUpdate, decreaseDishByID, resetCart} =
  sliceCart.actions;

export const cartSelector = state => state.cart;
export default sliceCart.reducer;
