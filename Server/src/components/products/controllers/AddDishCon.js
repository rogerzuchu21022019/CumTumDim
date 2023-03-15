const AddDishSv = require("../services/AddDishSv");

const AddDishCon = async (categoryId, dish) => {
  try {
    const newDish = await AddDishSv(categoryId, dish);
    return newDish;
  } catch (error) {
    console.log("🚀 ~ file: AddDishCon.js:6 ~ AddDishCon ~ error:", error);
  }
};
module.exports = AddDishCon;

