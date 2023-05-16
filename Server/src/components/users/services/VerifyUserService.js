const { verifyIdToken } = require("../../../middlewares/authen");
const User = require("../model/User");

const VerifyUserSv = async (idToken) => {
  const emailAdminNam = "vuthanhnam21022019@gmail.com";
  const emailAdminHoang = "xuanhoanggn@gmail.com";
  const emailAdminHai = "duchai0408@gmail.com";
  const emailAdminTri = "triphan1197@gmail.com";
  try {
    const payload = await verifyIdToken(idToken);
    try {
      const existedUser = await User.findOne({ googleId: payload.sub });

      // console.log("🚀 ~ file: Login.js:27 ~ existedUser:", existedUser);
      if (existedUser) {
        return existedUser;
      } else {
        if (
          payload.email === emailAdminNam ||
          payload.email === emailAdminHai ||
          payload.email === emailAdminTri ||
          payload.email === emailAdminHoang
        ) {
          const newUser = await User.create({
            googleId: payload.sub,
            name: payload.given_name,
            email: payload.email,
            imageUrl: payload.picture,
            role: "admin",
          });
          // console.log("🚀 ~ file: Login.js:39 ~ newUser:", newUser);
          await newUser.save();
          return newUser;
        } else {
          const newUser = await User.create({
            googleId: payload.sub,
            name: payload.given_name,
            email: payload.email,
            imageUrl: payload.picture,
          });
          // console.log("🚀 ~ file: Login.js:39 ~ newUser:", newUser);
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
