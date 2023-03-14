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
      user: user,
    });
  } catch (error) {
    console.log("🚀 ~ file: Login.js:27 ~ router.post ~ error:", error);
  }
});

module.exports = router;
