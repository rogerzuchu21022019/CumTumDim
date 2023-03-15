const OTP = require("../model/OTP");

const VerifyOtpSv = async (otpCode) => {
  const query = {
    otpNumber: otpCode,
  };
  const codeOtp = OTP.findOne(query);
  return codeOtp;
};

module.exports = VerifyOtpSv;
