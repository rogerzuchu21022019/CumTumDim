const Order = require("../model/Order");

const CreateOrderSv = async (orderData) => {
  console.log("🚀 ~ file: CreateOrderSv.js:4 ~ CreateOrderSv ~ orderData:", orderData)
  try {
    const order = new Order(orderData);
    const savedOrder = await order.save();
    return savedOrder;
  } catch (error) {
    throw error;
  }
};
module.exports = CreateOrderSv;
