const express = require(`express`);
const CreateOtpCon = require("../../../components/otp/controllers/CreateOtpCon");
const router = express.Router();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

router.post("/create-otp", async (req,res) => {
  try {
    const { phoneNumber } = req.body;
    console.log("🚀 ~ file: CreateOTP.js:13 ~ router.post ~ phoneNumber:", phoneNumber)
    let otpNumberGen = Math.floor(Math.random() * 900000) + 100000;
    const message = `Mã code xác nhận của bạn là ${otpNumberGen} \n Hãy nhập để xác nhận sđt`;

    await client.messages.create({
      body: message,
      from: "+19068222045",
      to: `+84${phoneNumber}`,
    });
    const result = await CreateOtpCon(otpNumberGen);

    console.log("🚀 ~ file: CreateOtp.js:8 ~ router.post ~ result", result);
    res.status(200).json(result);
  } catch (error) {
    console.log("🚀 ~ file: CreateOTP.js:26 ~ router.post ~ error:", error)
    
  }
});
module.exports = router;
