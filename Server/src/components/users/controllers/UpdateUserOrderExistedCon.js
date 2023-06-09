const { findByIdAndUpdate } = require("../model/User");
const UpdateUserOrderExistedSv = require("../services/UpdateUserOrderExistedSv");


const UpdateUserOrderExistedCon = async (userId,order) => {
  try {
    const user = await UpdateUserOrderExistedSv(userId,order);
    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: FindUserByIdCon.js:5 ~ FindUserByIdCon ~ error:",
      error
    );
  }
};
module.exports = UpdateUserOrderExistedCon;
