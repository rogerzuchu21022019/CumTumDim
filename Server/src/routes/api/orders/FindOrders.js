const express = require(`express`);
const FindOrdersCon = require("../../../components/orders/controllers/FindOrdersCon");
const router = express.Router();

router.get(`/find-orders`, async (req, res) => {
  try {
    const orders = await FindOrdersCon();
    // console.log("🚀 ~ file: FindOrders.js:8 ~ router.get ~ orders:", orders);

    return res.status(200).json({
      isLoading: false,
      message: "Find Orders Success",
      error: false,
      data: orders,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: FindOrders.js:8 ~ router.get ~ error:",
      error.message
    );
    return res.status(500).json({
      isLoading: false,
      message: "Find Orders Failed",
      error: true,
      data: {},
    });
  }
});

module.exports = router;
