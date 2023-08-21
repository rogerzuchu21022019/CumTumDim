const Order = require("../../orders/model/Order");
const Dish = require("../model/Dish");
const FindDishByFieldSv = require("../services/FindDishByFieldSv");

const FindDishByFieldCon = async (searchQuery) => {
  console.log(
    "🚀 ~ file: FindDishByFieldCon.js:6 ~ FindDishByFieldCon ~ searchQuery:",
    searchQuery
  );
  try {
    const dishes = await FindDishByFieldSv(searchQuery);
    console.log(
      "🚀 ~ file: FindDishByFieldCon.js:8 ~ FindDishByFieldCon ~ dishes:",
      dishes
    );
    return dishes;
  } catch (error) {
    console.log("Error in findDishByField:", error);
    throw error;
  }
};

module.exports = FindDishByFieldCon;
