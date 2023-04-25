const Order = require("../model/Order");

const FindOrderByIdSev = async (orderId, status) => {
  try {
    const query = {
      _id: orderId,
    };
    const updateOption = {
      $set: {
        orderStatus: status === "Chấp nhận" ? "Chấp nhận" : "Từ chối",
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
      "🚀 ~ file: FindOrderById.js:7 ~ FindOrderByIdSev ~ error:",
      error
    );
  }
};

module.exports = FindOrderByIdSev;
