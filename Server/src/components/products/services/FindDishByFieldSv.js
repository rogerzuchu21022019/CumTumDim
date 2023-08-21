const Dish = require("../model/Dish");

const FindDishByFieldSv = async (searchQuery) => {
  try {
    // Use the dynamic query to search for dishes
    const dishes = await Dish.find({
      $or: [
        { name: `${searchQuery}` },
        // { price: searchQuery }
        // { subCategory: searchQuery },
        ,
      ],
    });

    return dishes;
  } catch (error) {
    console.log("Error in findDishByField:", error);
    throw error;
  }
};

module.exports = FindDishByFieldSv;
