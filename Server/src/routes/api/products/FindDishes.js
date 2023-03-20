const express = require(`express`);
const FindDishesCon = require("../../../components/products/controllers/FindDishesCon");
const router = express.Router();

router.get(`/dishes`, async (req, res) => {
  try {
    const dishes = await FindDishesCon();
    res.status(200).json({
      status: "200",
      error: false,
      isLoading: false,
      message: "Find Dishes success",
      data: dishes,
    });
  } catch (error) {
    console.log("🚀 ~ file: FindDishes.js:12 ~ router.post ~ error:", error);
    res.status(500).json({
      status: "500",
      error: true,
      isLoading: false,
      message: "Find Dishes failed",
      data: error,
    });
  }
});

module.exports = router;
