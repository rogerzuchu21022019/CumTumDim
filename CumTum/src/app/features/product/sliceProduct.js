import {LOG} from '../../../../logger.config';
import {constants} from '../../shared/constants';
import {
  fetchAddCategory,
  fetchAddDish,
  fetchCategories,
  fetchDeleteCategory,
  fetchDeleteDish,
  fetchDishes,
  fetchUpdateCategory,
  fetchUpdateDish,
  fetchUploadImage,
} from './apiProduct';

const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  data: null,
  isLoading: false,
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
  mainDishCart: [],
  extraDishCart: [],
  toppingsCart: [],
  anotherCart: [],
};

const log = LOG.extend('SLICE_PRODUCT.JS');

export const sliceProduct = createSlice({
  name: constants.SLICE.PRODUCT,
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
        const filterDataMainList = state.categories.filter(
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
        const filterDataExtraList = state.categories.filter(
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
        const filterDataToppingsList = state.categories.filter(
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
        const filterDataAnotherList = state.categories.filter(
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
          // console.log('🚀 ~ file: sliceProduct.js:161 ~ itemToppingsCart:');

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
    updateAmount: (state, action) => {
      const data = action.payload;
      // log.error(
      //   '🚀 ~ file: sliceProduct.js:184 ~ data get when before update:',
      //   data,
      // );
      const {_id, amount} = data;
      // handle mainDish and index
      const indexOfMainDishInArray = state.mainDishes.findIndex(
        item => item._id === _id,
      );
      // log.info(
      //   '🚀 ~ file: sliceProduct.js:188 ~ indexOfMainDishInArray find by Index in array mainDishes:',
      //   indexOfMainDishInArray,
      // );
      const itemMainDishCart = state.mainDishCart.find(
        item => item._id === _id,
      );
      // log.info(
      //   '🚀 ~ file: sliceProduct.js:192 ~ itemMainDishCart find by id in array mainDishCart:',
      //   itemMainDishCart,
      // );

      // // handle extraDish and index
      const indexOfExtraDishInArray = state.extraDishes.findIndex(
        item => item._id === _id,
      );
      // log.info(
      //   '🚀 ~ file: sliceProduct.js:209 ~ indexOfExtraDishInArray:',
      //   indexOfExtraDishInArray,
      // );
      const itemExtraDishCart = state.extraDishCart.find(
        item => item._id === _id,
      );
      // log.info(
      //   '🚀 ~ file: sliceProduct.js:213 ~ itemExtraDishCart:',
      //   itemExtraDishCart,
      // );

      //  // handle toppingDish and index
      const indexOfToppingInArray = state.toppings.findIndex(
        item => item._id === _id,
      );
      const itemToppingCart = state.toppingsCart.find(item => item._id === _id);

      //  // handle anotherDish and index
      const indexOfAnotherInArray = state.another.findIndex(
        item => item._id === _id,
      );
      const itemAnotherCart = state.anotherCart.find(item => item._id === _id);

      if (
        indexOfExtraDishInArray != -1 ||
        indexOfMainDishInArray != -1 ||
        indexOfToppingInArray != -1 ||
        indexOfAnotherInArray != -1
      ) {
        if (itemMainDishCart != null) {
          state.mainDishes[indexOfMainDishInArray].amount =
            itemMainDishCart?.amount;
        } else {
          state.mainDishes.forEach(item =>
            item._id === _id ? (item.amount = 0) : null,
          );
        }

        if (itemExtraDishCart != null) {
          state.extraDishes[indexOfExtraDishInArray].amount =
            itemExtraDishCart?.amount;
        } else {
          state.extraDishes.forEach(item =>
            item._id === _id ? (item.amount = 0) : null,
          );
        }

        if (itemToppingCart != null) {
          state.toppings[indexOfToppingInArray].amount =
            itemToppingCart?.amount;
        } else {
          state.toppings.forEach(item => {
            if (item._id === _id) {
              item.amount = 0;
            }
          });
        }

        if (itemAnotherCart != null) {
          state.another[indexOfAnotherInArray].amount = itemAnotherCart?.amount;
        } else {
          state.another.forEach(item =>
            item._id === _id ? (item.amount = 0) : null,
          );
        }
      }
      return state;
    },
    resetCart: state => {
      state.mainDishCart = [];
      state.extraDishCart = [];
      state.toppingsCart = [];
      state.anotherCart = [];
      state.mainDishes.map(item => (item.amount = 0));
      state.extraDishes.map(item => (item.amount = 0));
      state.toppings.map(item => (item.amount = 0));
      state.another.map(item => (item.amount = 0));
      return state;
    },
    resetMainDishesCart: state => {
      state.mainDishCart = [];
      state.mainDishes.forEach(item => (item.amount = 0));

      return state;
    },
    resetExtraDishesCart: state => {
      state.extraDishCart = [];
      state.extraDishes.forEach(item => (item.amount = 0));
      return state;
    },
    resetToppingsCart: state => {
      state.toppingsCart = [];
      state.toppings.forEach(item => (item.amount = 0));
      return state;
    },
    resetAnotherCart: state => {
      state.anotherCart = [];
      state.another.forEach(item => (item.amount = 0));
      return state;
    },
  },
  extraReducers: builder => {
    /* Add Category */
    builder.addCase(fetchAddCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAddCategory.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = dataResponse.isLoading;
      state.success = dataResponse.success;
      state.message = dataResponse.message;
      state.data = dataResponse.data;
    });
    builder.addCase(fetchAddCategory.rejected, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = dataResponse.isLoading;
      state.error = dataResponse.error;
      state.message = dataResponse.message;
    });

    /* Update Category */
    builder.addCase(fetchUpdateCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUpdateCategory.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = dataResponse.isLoading;
      state.message = dataResponse.message;
      state.error = dataResponse.error;
      state.categories = state.categories.forEach(item =>
        item._id === dataResponse.data._id ? dataResponse.data : item,
      );
    });
    builder.addCase(fetchUpdateCategory.rejected, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = dataResponse.isLoading;
      state.error = dataResponse.error;
      state.message = dataResponse.message;
    });

    /* Delete Category */
    builder.addCase(fetchDeleteCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDeleteCategory.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = dataResponse.isLoading;
      state.message = dataResponse.message;
      state.error = dataResponse.error;
    });
    builder.addCase(fetchDeleteCategory.rejected, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = dataResponse.isLoading;
      state.error = dataResponse.error;
      state.message = dataResponse.message;
    });

    /* Upload image */
    builder.addCase(fetchUploadImage.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUploadImage.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = false;
      state.success = dataResponse.success;
      state.message = dataResponse.message;
      state.data = dataResponse.data;
    });
    builder.addCase(fetchUploadImage.rejected, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = dataResponse.isLoading;
      state.error = dataResponse.error;
      state.message = dataResponse.message;
    });

    /* Categories */
    builder.addCase(fetchCategories.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = false;
      state.success = dataResponse.success;
      state.message = dataResponse.message;
      state.categories = dataResponse.data;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = dataResponse.isLoading;
      state.error = dataResponse.error;
      state.message = dataResponse.message;
    });

    /* Add Dish */
    builder.addCase(fetchAddDish.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchAddDish.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = false;
      state.success = dataResponse.success;
      state.message = dataResponse.message;
      state.dish = dataResponse.data;
      state.dishes.unshift(dataResponse.data);
    });
    builder.addCase(fetchAddDish.rejected, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = dataResponse.isLoading;
      state.error = dataResponse.error;
      state.message = dataResponse.message;
    });

    /* Update DISH */
    builder.addCase(fetchUpdateDish.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchUpdateDish.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = dataResponse.isLoading;
      state.message = dataResponse.message;
      state.error = dataResponse.error;
      state.dishes.forEach(item =>
        item._id === dataResponse.data._id ? dataResponse.data : item,
      );
    });
    builder.addCase(fetchUpdateDish.rejected, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = dataResponse.isLoading;
      state.error = dataResponse.error;
      state.message = dataResponse.message;
    });

    /* Delete Dish */
    builder.addCase(fetchDeleteDish.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDeleteDish.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = dataResponse.isLoading;
      state.message = dataResponse.message;
      state.error = dataResponse.error;
    });
    builder.addCase(fetchDeleteDish.rejected, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = dataResponse.isLoading;
      state.error = dataResponse.error;
      state.message = dataResponse.message;
    });

    /* Dishes */
    builder.addCase(fetchDishes.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchDishes.fulfilled, (state, action) => {
      const dataResponse = action.payload;
      state.isLoading = false;
      state.success = dataResponse.success;
      state.message = dataResponse.message;
      state.dishes = dataResponse.data;

      const dataListExtra = state.categories.filter(
        item => item.name === 'Món ăn thêm',
      );

      const dataListMain = state.categories.filter(
        item => item.name === 'Món chính',
      );

      const dataListTopping = state.categories.filter(
        item => item.name === 'Toppings',
      );

      const dataListAnother = state.categories.filter(
        item => item.name === 'Khác',
      );

      state.extraDishes = dataResponse.data.filter(
        item => item.categoryId === dataListExtra[0]._id,
      );

      // state.mainDishes.map(item => (item.amount = 0));
      // state.extraDishes.map(item => (item.amount = 0));
      // state.toppings.map(item => (item.amount = 0));
      // state.another.map(item => (item.amount = 0));

      state.toppings = dataResponse.data.filter(
        dish => dish.categoryId === dataListTopping[0]._id,
      );

      state.another = dataResponse.data.filter(
        dish => dish.categoryId === dataListAnother[0]._id,
      );

      state.mainDishes = dataResponse.data.filter(
        dish => dish.categoryId === dataListMain[0]._id,
      );

      // Handle data when app crash or turn off app will get amount of home screen to exactly === amount in cart
      if (
        state.mainDishCart.length > 0 ||
        state.extraDishCart.length > 0 ||
        state.toppingsCart.length > 0 ||
        state.anotherCart.length > 0
      ) {
        //
        state.mainDishCart.forEach(item => {
          state.mainDishes.forEach(dish => {
            if (item._id === dish._id) {
              dish.amount = item.amount;
            }
          });
        });
        state.extraDishCart.forEach(item => {
          state.extraDishes.forEach(dish => {
            if (item._id === dish._id) {
              dish.amount = item.amount;
            }
          });
        });
        state.toppingsCart.forEach(item => {
          state.toppings.forEach(dish => {
            if (item._id === dish._id) {
              dish.amount = item.amount;
            }
          });
        });
        state.anotherCart.forEach(item => {
          state.another.forEach(dish => {
            if (item._id === dish._id) {
              dish.amount = item.amount;
            }
          });
        });
      } else {
        state.mainDishes.map(item => (item.amount = 0));
        state.extraDishes.map(item => (item.amount = 0));
        state.toppings.map(item => (item.amount = 0));
        state.another.map(item => (item.amount = 0));
      }
    });
    builder.addCase(fetchDishes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.message = action.payload;
    });
  },
});

// export actions to register with store when use reducers
export const {
  addDishToWishCartOrUpdate,
  decreaseDishByID,
  updateAmount,
  resetCart,
  resetAnotherCart,
  resetExtraDishesCart,
  resetMainDishesCart,
  resetToppingsCart,
} = sliceProduct.actions;

export const productSelector = state => state.product;

export default sliceProduct.reducer;
