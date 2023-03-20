// Login.js in sever-side
const express = require("express");
const VerifyUserCon = require("../../../components/users/controllers/VerifyUserController");
const { getFCMToken } = require("../../../utils/FirebaseVerify");

const router = express.Router();

require(`dotenv`).config();

router.post(`/login`, async (req, res) => {
  try {
    const { idToken, accessToken } = req.body;
    let user = await VerifyUserCon(idToken);
    // const fcmToken = await getFCMToken(idToken);
    // user = { ...user, fcmToken: fcmToken };
    return res.json({
      isLoggedIn: true,
      message: "Success",
      error: false,
      data: user,
    });
  } catch (error) {
    console.log("🚀 ~ file: Login.js:23 ~ router.post ~ error:", error);
    res.json({
      isLoggedIn: false,
      message: error.message,
      error: true,
    });
  }
});

module.exports = router;
