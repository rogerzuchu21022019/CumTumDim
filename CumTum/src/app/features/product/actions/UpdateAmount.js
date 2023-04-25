export const UpdateAmount = (state, action) => {
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
  const itemMainDishCart = state.mainDishCart.find(item => item._id === _id);
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
  const itemExtraDishCart = state.extraDishCart.find(item => item._id === _id);
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
      state.toppings[indexOfToppingInArray].amount = itemToppingCart?.amount;
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
};
