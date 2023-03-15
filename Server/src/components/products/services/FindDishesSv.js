const Dish = require("../model/Dish");

const FindDishesSv = async () => {
  try {
    const query = {};
    const dishes = await Dish.find(query);
    return dishes;
  } catch (error) {
    console.log("🚀 ~ file: FindDishesSv.js:5 ~ FindDishesSv ~ error:", error);
  }
};

module.exports = FindDishesSv;
