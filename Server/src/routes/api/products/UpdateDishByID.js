const express = require(`express`);
const UpdateCategoryByIDCon = require("../../../components/categories/controllers/UpdateCategoryByIDCon");
const UpdateDishByIDCon = require("../../../components/categories/controllers/UpdateDishByIDCon");
const router = express.Router();

router.post(`/update-dish-by-id/:dishId`, async (req, res) => {
  try {
    const { dishId } = req.params;
    console.log("🚀 ~ file: UpdateDishByID.js:9 ~ router.post ~ dishId:", dishId)
    const { dish } = req.body;
    const _dish = await UpdateDishByIDCon(dishId,dish);
    res.status(200).json({
      isLoading: false,
      message: "Update Dish success",
      error: false,
      data: _dish,
    });
  } catch (error) {
    console.log("🚀 ~ file: UpdateDishByID.js:17 ~ router.post ~ error:", error)
    
    res.status(500).json({
      isLoading: false,
      message: "Update Dish fail",
      error: true,
      data: {},
    });
  }
});

module.exports = router;
