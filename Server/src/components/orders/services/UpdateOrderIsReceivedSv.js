const Order = require("../model/Order");

const UpdateOrderIsReceivedSv = async (orderId, isReceived) => {
  try {
    const query = {
      _id: orderId,
    };
    const updateOption = {
      $set: {
        isReceived: isReceived,
      },
    };
    const options = {
      new: true,
      upsert: true,
    };
    const order = await Order.findByIdAndUpdate(query, updateOption, options);
    return order;
  } catch (error) {
    console.log(
      "🚀 ~ file: UpdateOrderIsReceivedSv.js:7 ~ UpdateOrderIsReceivedSv ~ error:",
      error
    );
  }
};

module.exports = UpdateOrderIsReceivedSv;
