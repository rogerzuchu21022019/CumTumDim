const CreateOrderSv = require("../services/CreateOrderSv");

const CreateOrderCon = async (orderData) => {
  try {
    const order = await CreateOrderSv(orderData);
    return order;
  } catch (error) {
    console.log("🚀 ~ file: CreateOrderCon.js:8 ~ CreateOrderCon ~ error:", error)
  }
};

module.exports = CreateOrderCon;
