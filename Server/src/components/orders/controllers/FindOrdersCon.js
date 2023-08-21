const FindOrdersSv = require("../services/FindOrdersSv");

const FindOrdersCon = async () => {
  try {
    const orders = await FindOrdersSv()
    return orders;
  } catch (error) {}
};

module.exports = FindOrdersCon;
