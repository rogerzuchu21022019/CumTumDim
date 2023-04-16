const Dish = require("../../products/model/Dish");

const UpdateDishByIdSv = async (dishId,dish) => {
  try {
    const query = {
      _id: dishId,
    };
    const updateValue = {
      name: dish.name,
      price: dish.price,
      imageUrl: dish.imageUrl,
    };
    const updateOptions = {
      new: true,
      upsert: true,
    };
    const dishUpdate = await Dish.findByIdAndUpdate(
      query,
      updateValue,
      updateOptions
    );
    return dishUpdate;
  } catch (error) {}
};

module.exports = UpdateDishByIdSv;
