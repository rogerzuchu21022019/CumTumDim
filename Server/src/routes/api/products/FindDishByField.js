const express = require(`express`);
const FindDishByFieldCon = require("../../../components/products/controllers/FindDishByFieldCon");
const router = express.Router();

router.post("/query_data/:id", (req, res) => {
  console.log(
    "🚀 ~ file: FindDishByField.js:8 ~ router.get ~ req.params:",
    req.params
  );
  try {
    const { id } = req.params;

    const dishes = FindDishByFieldCon(id);
    console.log(
      "🚀 ~ file: FindDishByField.js:9 ~ router.get ~ dishes:",
      dishes
    );
    res.json({
      message: "success",
      status: "200",
      error: false,
      loading: false,
      data: dishes,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: FindDishByField.js:23 ~ router.get ~ error:",
      error
    );
  }
});

module.exports = router;
