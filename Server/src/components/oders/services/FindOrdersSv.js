const Order = require("../model/Order");

const FindOrdersSv = async () => {
  try {
    const orders = await Order.find().sort({
      createdAt: -1,
    });
    return orders;
  } catch (error) {}
};

module.exports = FindOrdersSv;
