const { findByIdAndUpdate } = require("../model/User");
const UpdateUserByIdSv = require("../services/UpdateUserByIdSv");

const UpdateUserByIdCon = async (userId,order) => {
  try {
    const user = await UpdateUserByIdSv(userId,order);
    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: FindUserByIdCon.js:5 ~ FindUserByIdCon ~ error:",
      error
    );
  }
};
module.exports = UpdateUserByIdCon;
