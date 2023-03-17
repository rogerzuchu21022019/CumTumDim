const FindCategoriesSv = require("../services/FindCategoriesSv");

const FindCategoriesCon = async () => {
  try {
    const categories = await FindCategoriesSv()
    return categories;
  } catch (error) {}
};
module.exports = FindCategoriesCon;
