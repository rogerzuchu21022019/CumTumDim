const Category = require("../model/Category");

const DeleteCategorySv = async (categoryId) => {
  try {
    const query = {
      _id: categoryId,
    };
    const category = await Category.findByIdAndDelete(query);
    return category;
  } catch (error) {}
};

module.exports = DeleteCategorySv;
