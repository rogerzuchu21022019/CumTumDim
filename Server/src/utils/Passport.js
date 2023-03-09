require(`dotenv`).config();

const GoogleStrategy = require(`passport-google-oauth20`).Strategy;
const User = require("../components/users/model/User");

const Passport = (passport) => {
  console.log("🚀 ~ file: Passport.js:7 ~ Passport ~ passport:", passport);
  // add comment 1123
  const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID; // Replace with your Google client ID
  const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_SECRET_CLIENT_ID; // Replace with your Google client secret
  const CALLBACK_URL = "https://cumtumdim.becofoodstore.click/api/auth/google/callback";
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const existedUser = await User.findOne({ googleId: profile.id });
          console.log("🚀 ~ file: Login.js:27 ~ existedUser:", existedUser);
          if (existedUser) {
            return done(null, existedUser);
          } else {
            const newUser = await User.create({
              googleId: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
              imageUrl: profile.photos[0].value,
              accessToken: accessToken,
              refreshToken: refreshToken,
            });
            console.log("🚀 ~ file: Login.js:39 ~ newUser:", newUser);
            await newUser.save();
            return done(null, newUser);
          }
        } catch (error) {
          console.log(`error`, error);
        }
      }
    )
  );
  passport.serializeUser((user, done) => {
    console.log(
      "🚀 ~ file: Passport.js:42 ~ passport.serializeUser ~ user:",
      user
    );
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      console.log("🚀 ~ file: Passport.js:48 ~ User.findById ~ user:", user);
      done(err, user);
    });
  });
  return passport;
};
module.exports = Passport;
