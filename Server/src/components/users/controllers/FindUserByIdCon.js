const { findByIdAndUpdate } = require("../model/User");
const FindUserByIdSv = require("../services/FindUserByIdSv");

const FindUserByIdCon = async (userId,order) => {
  try {
   
    const user = await FindUserByIdSv(userId,order);
    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: FindUserByIdCon.js:5 ~ FindUserByIdCon ~ error:",
      error
    );
  }
};
module.exports = FindUserByIdCon;
