const Category = require("../model/Category");

const UpdateCategoryByIdSv = async (categoryId, name) => {
  try {
    const query = {
      _id: categoryId,
    };
    const updateValue = {
      name: name,
    };
    const updateOptions = {
      new: true,
      upsert: true,
    };
    const category = await Category.findByIdAndUpdate(
      query,
      updateValue,
      updateOptions
    );
    return category;
  } catch (error) {}
};

module.exports = UpdateCategoryByIdSv;
