// Login.js in sever-side
const express = require("express");
const VerifyUserCon = require("../../../components/users/controllers/VerifyUserController");
const { sendMessage } = require("../../../utils/FirebaseVerify");
const UpdateFcmTokenUserCon = require("../../../components/users/controllers/UpdateFcmTokenUserCon");

const router = express.Router();

require(`dotenv`).config();

router.post(`/login`, async (req, res) => {
  try {
    const { idToken, accessToken, fcmTokenDevice } = req.body;
   
    if (
      fcmTokenDevice === "" ||
      fcmTokenDevice === null ||
      fcmTokenDevice === undefined
    ) {
      let user = await VerifyUserCon(idToken);
      return res.json({
        isLoggedIn: true,
        isLoading: false,
        message: "Success",
        error: false,
        data: user,
      });
    }
    let user = await VerifyUserCon(idToken);
    const _user = await UpdateFcmTokenUserCon(user._id, fcmTokenDevice);
    const title = "Đăng nhập thành công";
    const body = "Chào mừng bạn đến với CumTumDim";
    await sendMessage(fcmTokenDevice, title, body,{});
    return res.json({
      isLoggedIn: true,
      isLoading: false,
      message: "Success",
      error: false,
      data: _user,
    });

  } catch (error) {
    console.log("🚀 ~ file: Login.js:23 ~ router.post ~ error:", error);
    res.json({
      isLoggedIn: false,
      isLoading: false,
      message: error.message,
      error: true,
    });
  }
});

module.exports = router;
