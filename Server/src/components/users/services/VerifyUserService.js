const { verifyIdToken } = require("../../../middlewares/authen");
const User = require("../model/User");


const VerifyUserSv = async (idToken, accessToken) => {
  const emailAdmin = "vuthanhnam21022019@gmail.com";
  try {
    const payload = await verifyIdToken(idToken, accessToken);
    try {
      const existedUser = await User.findOne({ googleId: payload.sub });

      console.log("🚀 ~ file: Login.js:27 ~ existedUser:", existedUser);
      if (existedUser) {
        return existedUser;
      } else {
        if (payload.email === emailAdmin) {
          const newUser = await User.create({
            googleId: payload.sub,
            name: payload.given_name,
            email: payload.email,
            imageUrl: payload.picture,
            accessToken: accessToken,
            role: "admin",
          });
          console.log("🚀 ~ file: Login.js:39 ~ newUser:", newUser);
          await newUser.save();
          return newUser;

        }else{
          const newUser = await User.create({
            googleId: payload.sub,
            name: payload.given_name,
            email: payload.email,
            imageUrl: payload.picture,
            accessToken: accessToken,
          });
          console.log("🚀 ~ file: Login.js:39 ~ newUser:", newUser);
          await newUser.save();
          return newUser;

        }
      }
    } catch (error) {
      console.log(`error`, error);
    }
    console.log("🚀 ~ file: Login.js:24 ~ router.post ~ payload:", payload);
    return payload;
  } catch (error) {
    console.log("🚀 ~ file: Login.js:27 ~ router.post ~ error:", error);
  }
};
module.exports = VerifyUserSv;
