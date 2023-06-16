const Dish = require("../../products/model/Dish");

const DeleteDishSv = async (dishId) => {
  try {
    const query = {
      _id: dishId,
    };
    const dish = await Dish.findByIdAndDelete(query);
    return dish;
  } catch (error) {}
};

module.exports = DeleteDishSv;
