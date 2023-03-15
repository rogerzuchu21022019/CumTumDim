const Dish = require("../model/Dish");

const AddDishSv = async (categoryId, dish) => {
  try {
    const newDish = new Dish({
      name: dish.name,
      price: dish.price,
      imageUrl: dish.imageUrl,
      subCategory: dish.subCategory,
      categoryId: categoryId,
    });
    await newDish.save();

    return newDish;
  } catch (error) {
    console.log("🚀 ~ file: AddDishSv.js:5 ~ AddDishSv ~ error:", error);
  }
};
module.exports = AddDishSv;
