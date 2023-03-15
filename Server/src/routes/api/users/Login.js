// Login.js in sever-side
const express = require("express");
const passport = require(`passport`);
const VerifyUserCon = require("../../../components/users/controllers/VerifyUserController");

const router = express.Router();

require(`dotenv`).config();

router.post(`/login`, async (req, res) => {
  try {
    const { idToken, accessToken } = req.body;
    const user = await VerifyUserCon(idToken, accessToken);
    return res.json({

      isLoggedIn: true,
      message: "Success",
      error: false,
      data: user
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
