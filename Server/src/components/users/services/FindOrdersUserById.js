const User = require("../model/User");

const FindOrdersUserByIdSv = async (userId) => {
  try {
    const user = await User.findById(userId);
    const orders = user.orders;

    return orders;
  } catch (error) {
    console.log(
      "🚀 ~ file: FindUserByIdSv.js:5 ~ FindUserByIdSv ~ error:",
      error
    );
  }
};
module.exports = FindOrdersUserByIdSv;
