const express = require(`express`);
const UpdateCategoryByIDCon = require("../../../components/categories/controllers/UpdateCategoryByIDCon");
const router = express.Router();

router.post(`/update-category-by-id/:categoryId`, async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { name } = req.body;
    const category = await UpdateCategoryByIDCon(categoryId, name);
    res.status(200).json({
      isLoading: false,
      message: "Update Category success",
      error: false,
      data: category,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: UpdateCategoryByID.js:8 ~ router.post ~ error:",
      error
    );
    res.status(500).json({
      isLoading: false,
      message: "Update Category fail",
      error: true,
      data: {},
    });
  }
});

module.exports = router;
