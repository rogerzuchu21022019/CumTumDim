const UpdateOrderIsReceivedSv = require("../services/UpdateOrderIsReceivedSv");

const UpdateOrderIsReceivedCon = async (orderId, isReceived) => {
  try {
    const order = await UpdateOrderIsReceivedSv(orderId, isReceived);
    return order;
  } catch (error) {
    console.log(
      "🚀 ~ file: UpdateOrderIsReceivedCon.js:7 ~ UpdateOrderIsReceivedCon ~ error:",
      error
    );
  }
};
module.exports = UpdateOrderIsReceivedCon;
