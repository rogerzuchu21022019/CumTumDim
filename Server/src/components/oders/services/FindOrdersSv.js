const Order = require("../model/Order");

const FindOrdersSv = async () => {
  try {
    const orders = await Order.find();
    return orders;
  } catch (error) {}
};

module.exports = FindOrdersSv;
