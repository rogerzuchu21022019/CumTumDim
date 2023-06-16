const { findByIdAndUpdate } = require("../model/User");
const UpdateUserOrderByIdSv = require("../services/UpdateUserOrderByIdSv");

const UpdateUserOrderByIdCon = async (userId,order) => {
  try {
    const user = await UpdateUserOrderByIdSv(userId,order);
    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: FindUserByIdCon.js:5 ~ FindUserByIdCon ~ error:",
      error
    );
  }
};
module.exports = UpdateUserOrderByIdCon;
