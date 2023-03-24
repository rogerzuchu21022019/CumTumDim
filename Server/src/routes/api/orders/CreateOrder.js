const express = require(`express`);
const CreateOrderCon = require("../../../components/oders/controllers/CreateOrderCon");

const route = express.Router();

route.post(`/create-order`, async (req, res) => {
  try {
    const order = await CreateOrderCon(orderData);
    return res.status(200).json({
      message: "Create Order Success",
      error: false,
      data: order,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: CraeateOrderCon.js:8 ~ CreateOrderCon ~ error:",
      error
    );
  }
});

module.exports = route;
