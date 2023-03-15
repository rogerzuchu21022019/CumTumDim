const { OAuth2Client } = require('google-auth-library');
const User = require('../components/users/model/User');
require(`dotenv`).config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const client = new OAuth2Client(GOOGLE_CLIENT_ID);


module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/auth-login");
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/auth-login");
    }
  },

  verifyIdToken: async (idToken) => {
    try {
      const ticket = await client.verifyIdToken({
        idToken: idToken,
        audience: GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      
      return payload;
    } catch (error) {
      console.log("Error verifying idToken:", error);
      return null;
    }
  },
};
