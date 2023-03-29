const express = require(`express`);
const CreateOrderCon = require("../../../components/oders/controllers/CreateOrderCon");

const route = express.Router();

route.post(`/create-order`, async (req, res) => {
  try {
    const { order } = req.body;
    console.log("🚀 ~ file: CreateOrder.js:9 ~ route.post ~ orderData:", order);
    const orderData = await CreateOrderCon(order);
    return res.status(200).json({
      isLoading: false,
      message: "Create Order Success",
      error: false,
      data: orderData,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: CraeateOrderCon.js:8 ~ CreateOrderCon ~ error:",
      error.message
    );
    return res.status(500).json({
      isLoading: false,
      message: "Create Order Failed",
      error: true,
      data: {},
    });
  }
});

module.exports = route;
