const express = require(`express`);
const VerifyOtpCon = require("../../../components/otp/controllers/VerifyOtpCon");
const router = express.Router();

router.post(`/verify-otp`, async (req, res) => {
  try {
    const { otpCode } = req.body;
    await VerifyOtpCon(otpCode);
    return res.json({
      verified: true,
    });
  } catch (error) {
    console.log("🚀 ~ file: VerifyOtp.js:13 ~ router.post ~ error:", error)
    res.json({
      verified: false,
      message: error.message,
    });
  }
});
module.exports = router;
