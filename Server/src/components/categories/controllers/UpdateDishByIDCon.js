const UpdateDishByIdSv = require("../services/UpdateDishByIDSv");

const UpdateDishByIDCon = async (dishId,dish) => {
  try {
    const _dish = await UpdateDishByIdSv(dishId,dish);
    return _dish;
  } catch (error) {
  console.log("🚀 ~ file: UpdateDishByIDCon.js:8 ~ UpdateDishByIDCon ~ error:", error)
  }
};

module.exports = UpdateDishByIDCon;
