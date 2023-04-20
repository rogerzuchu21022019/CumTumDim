const DeleteAddressSv = require("../services/DeleteAddressSv");

const DeleteAddressCon = async (userId, address) => {
  try {
    const user = DeleteAddressSv(userId, address);
    console.log("🚀 ~ file: AddAddressCon.js:6 ~ AddAddressCon ~ user:", user)
    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: AddAddressCon.js:5 ~ AddAddressCon ~ error:",
      error
    );
  }
};

module.exports = DeleteAddressCon;
