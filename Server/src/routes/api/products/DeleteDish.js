const express = require(`express`);
const DeleteCategoryCon = require("../../../components/categories/controllers/DeleteCategoryCon");
const DeleteDishCon = require("../../../components/categories/controllers/DeleteDishCon");
const router = express.Router();

router.post(`/delete-dish/:dishId`, async (req, res) => {
  try {
    const { dishId } = req.params;
    // console.log("🚀 ~ file: DeleteDish.js:8 ~ router.post ~ dishId:", dishId)
    await DeleteDishCon(dishId);
    // console.log("🚀 ~ file: DeleteDish.js:11 ~ router.post ~ success:", success)
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
