const VerifyUserSv = require("../services/VerifyUserService");

const VerifyUserCon = async (idToken) => {
  try {
    const User = await VerifyUserSv(idToken);
    return User;
  } catch (error) {
    console.log("🚀 ~ file: Login.js:27 ~ router.post ~ error:", error);
  }
};
module.exports = VerifyUserCon;