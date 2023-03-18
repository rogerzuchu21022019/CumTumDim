const express = require(`express`);
const AddDishCon = require("../../../components/products/controllers/AddDishCon");
const router = express.Router();

router.post(`/:categoryId/add-dish`, async (req, res) => {
  try {
    const { dish } = req.body;
    console.log("🚀 ~ file: AddDish.js:8 ~ router.post ~ dish:", dish);
    const { categoryId } = req.params;
    console.log(
      "🚀 ~ file: AddDish.js:9 ~ router.post ~ categoryId:",
      categoryId
    );
    const newDish = await AddDishCon(categoryId, dish);
    console.log("🚀 ~ file: AddDish.js:9 ~ router.post ~ newDish:", newDish);
    return res.json({
      success: true,
      data: newDish,
      message: "Dish added successfully",
      error: false,
    });
  } catch (error) {
    console.log("🚀 ~ file: AddDish.js:12 ~ router.post ~ error:", error);
  }
});

module.exports = router;
