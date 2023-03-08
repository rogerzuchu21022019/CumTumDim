const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = '589127740205-c795j2ne2i38rdn3ljotkasq79b2nec5.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);
module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/home");
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
        audience: CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const userid = payload["sub"];
      return userid;
    } catch (error) {
      console.log("Error verifying idToken:", error);
      return null;
    }
  },
};
