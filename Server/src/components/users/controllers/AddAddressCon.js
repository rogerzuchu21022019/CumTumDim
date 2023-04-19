const AddAddressSv = require("../services/AddAddressSv");

const AddAddressCon = async (userId, address) => {
  try {
    const user = AddAddressSv(userId, address);
    console.log("🚀 ~ file: AddAddressCon.js:6 ~ AddAddressCon ~ user:", user)
    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: AddAddressCon.js:5 ~ AddAddressCon ~ error:",
      error
    );
  }
};

module.exports = AddAddressCon;
