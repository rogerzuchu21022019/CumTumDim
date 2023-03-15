const VerifyUserSv = require("../services/VerifyUserService");

const VerifyUserCon = async (idToken,accessToken) => {
  try {
    const User = await VerifyUserSv(idToken,accessToken);
    return User;
  } catch (error) {
    console.log("🚀 ~ file: Login.js:27 ~ router.post ~ error:", error);
  }
};
module.exports = VerifyUserCon;