const FindOrderByIdSev = require("../services/FindOrderByIdSv");

const FindOrderByIdCon = async (orderId, status) => {
  try {
    const order = await FindOrderByIdSev(orderId, status);
    return order;
  } catch (error) {
    console.log(
      "🚀 ~ file: FindOrderByIdCon.js:7 ~ FindOrderByIdCon ~ error:",
      error
    );
  }
};
module.exports = FindOrderByIdCon;
