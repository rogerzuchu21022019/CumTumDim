const DeleteDishSv = require("../services/DeleteDishById");

const DeleteDishCon = async (dishId) => {
  try {
    const dish = await DeleteDishSv(dishId);
    return dish;
  } catch (error) {
    console.log(
      "🚀 ~ file: DeleteDishCon.js:9 ~ DeleteDishCon ~ error:",
      error
    );
  }
};

module.exports = DeleteDishCon;
