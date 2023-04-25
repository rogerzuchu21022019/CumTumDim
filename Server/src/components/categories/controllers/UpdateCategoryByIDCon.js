const UpdateCategoryByIdSv = require("../services/UpdateCategoryByIDSv");

const UpdateCategoryByIDCon = async (categoryId,name) => {
  try {
    const category = await UpdateCategoryByIdSv(categoryId,name);
    return category;
  } catch (error) {
    console.log("🚀 ~ file: UpdateCategoryByIDCon.js:9 ~ UpdateCategoryByIDCon ~ error:", error)
  }
};

module.exports = UpdateCategoryByIDCon;
