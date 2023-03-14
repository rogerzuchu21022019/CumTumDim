const OTP = require("../model/OTP");

const CreateOtpSv = async (otpNumber) => {
  const otp = await OTP.create({
    otpNumber,
  });
  console.log("🚀 ~ file: CreateOtp.js:7 ~ CreateOtpService ~ otp", otp)
  
  return otp;
};

module.exports = CreateOtpSv;
