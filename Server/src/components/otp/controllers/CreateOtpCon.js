const CreateOtpSv = require("../services/CreateOtpSv");



const CreateOtpCon = async (otpNumber) => {
  try {
    const result = await CreateOtpSv(otpNumber);
    console.log(
      "🚀 ~ file: CreateOtp.js:7 ~ CreateOtpController ~ result",
      result
    );
    return result;
  } catch (error) {
    console.log(
      "🚀 ~ file: CreateOtp.js:5 ~ CreateOtpController ~ error",
      error
    );
  }
};

module.exports = CreateOtpCon;
