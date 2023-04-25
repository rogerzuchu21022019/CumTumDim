const UpdateAddressSv = require("../services/UpdateAddressSv");

const UpdateAddressCon = async (userId, address) => {
  try {
    const user = UpdateAddressSv(userId, address);
    console.log(
      "🚀 ~ file: UpdateAddressCon.js:7 ~ UpdateAddressCon ~ user:",
      user
    );

    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: UpdateAddressCon.js:11 ~ UpdateAddressCon ~ error:",
      error
    );
  }
};

module.exports = UpdateAddressCon;
