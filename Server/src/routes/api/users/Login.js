// Login.js in sever-side
const express = require("express");
const VerifyUserCon = require("../../../components/users/controllers/VerifyUserController");
const { getFCMToken } = require("../../../utils/FirebaseVerify");
const UpdateFcmTokenUserCon = require("../../../components/users/controllers/UpdateFcmTokenUserCon");

const router = express.Router();

require(`dotenv`).config();

router.post(`/login`, async (req, res) => {
  try {
    const { idToken, accessToken, fcmTokenDevice } = req.body;
    let user = await VerifyUserCon(idToken);
    const _user = await UpdateFcmTokenUserCon(user._id, fcmTokenDevice);

    console.log("🚀 ~ file: Login.js:16 ~ router.post ~ user:", _user);
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
