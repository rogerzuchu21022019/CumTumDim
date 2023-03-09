// Login.js in sever-side
const express = require("express");
const passport = require(`passport`);
const router = express.Router();
const {
  ensureAuth,
  ensureGuest,
  verifyIdToken,
} = require(`../../../middlewares/authen`);
const Passport = require("../../../utils/Passport");
require(`dotenv`).config();
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID; // Replace with your Google client ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_SECRET_CLIENT_ID; // Replace with your Google client secret
const CALLBACK_URL = "http://localhost:3000/api/auth/google/callback";

router.get(`/auth-login`, ensureGuest, (req, res) => {
  res.json({
    message: `you can sign in again`,
  })
  // res.render(`index`, { title: `Express` });
});

router.get(`/home`,ensureAuth, (req, res) => {
  res.json({
    message: `ok`,
    status: "200",
  });
});

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
  (req, res) => {
    try {
      console.log(`auth/google`);

      // Redirect the user to the home page

      // res.redirect("/");
    } catch (error) {
      console.error(`error`, error);
    }
  }
);

// Set up the Google Sign-In callback route
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/api/home",
    failureRedirect: "/api/auth-login",
  }),
  (req, res) => {
    console.log(`auth/google`);

    // Redirect the user to the home page

    // res.redirect("/");

    // res.redirect("http://cumtum.becofoodstore.click/api/home");
  }
);

router.post("/logout", (req, res) => {
  req.session.destroy(); // Remove the user's session
  console.log("logout");
  // Send a success response
  res.status(200).json({
    message: "logout",
  });
});

module.exports = router;
