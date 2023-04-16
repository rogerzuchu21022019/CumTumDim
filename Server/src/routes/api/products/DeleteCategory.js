const express = require(`express`);
const DeleteCategoryCon = require("../../../components/categories/controllers/DeleteCategoryCon");
const router = express.Router();

router.post(`/delete-category/:categoryId`, async (req, res) => {
  try {
    const { categoryId } = req.params;
    await DeleteCategoryCon(categoryId);
    res.status(200).json({
      isLoading: false,
      message: "Delete Category success",
      error: false,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: DeleteCategory.js:15 ~ router.post ~ error:",
      error
    );

    res.status(500).json({
      isLoading: false,
      message: "Delete Category fail",
      error: true,
    });
  }
});

module.exports = router;
