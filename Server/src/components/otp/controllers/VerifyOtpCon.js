const VerifyOtpSv = require("../services/VerifyOtpSv");

const VerifyOtpCon = async (otpCode) => {
  try {
    const codeOtp = await VerifyOtpSv(otpCode);
    return codeOtp;
  } catch (error) {}
};
module.exports = VerifyOtpCon;
