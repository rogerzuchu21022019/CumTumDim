const User = require("../model/User");

const FindUserByIdSv = async (userId) => {
  try {
    const user = await User.findById(userId);

    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: FindUserByIdSv.js:5 ~ FindUserByIdSv ~ error:",
      error
    );
  }
};
module.exports = FindUserByIdSv;
