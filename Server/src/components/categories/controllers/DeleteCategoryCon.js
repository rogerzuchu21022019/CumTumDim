const DeleteCategorySv = require("../services/DeleteCategorySv");

const DeleteCategoryCon = async (categoryId) => {
  try {
    const category = await DeleteCategorySv(categoryId);
    return category;
  } catch (error) {
    console.log("🚀 ~ file: UpdateCategoryByIDCon.js:9 ~ UpdateCategoryByIDCon ~ error:", error)
  }
};

module.exports = DeleteCategoryCon;
