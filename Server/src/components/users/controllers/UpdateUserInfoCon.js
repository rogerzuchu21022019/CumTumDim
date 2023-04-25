const UpdateUserInfoSv = require("../services/UpdateInfoUserSv");

const UpdateUserInfoCon = async (userId, imageUrl,name) => {
  try {
    const user = await UpdateUserInfoSv(userId,imageUrl,name);
    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: UpdateUserInfoCon.js:8 ~ UpdateUserInfoCon ~ error:",
      error
    );
  }
};
module.exports = UpdateUserInfoCon;
