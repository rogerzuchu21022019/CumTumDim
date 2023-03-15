const Category = require("../model/Category");

const FindCategoriesSv = async () => {
  try {
    const categories = await Category.find({});
    return categories;
  } catch (error) {}
};
module.exports = FindCategoriesSv;
