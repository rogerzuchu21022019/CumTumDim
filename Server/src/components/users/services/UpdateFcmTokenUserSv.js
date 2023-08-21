const User = require("../model/User");

const UpdateFcmTokenUserSv = async (userId, fcmTokenDevice) => {
  try {
    const _user = await User.findByIdAndUpdate(
      {
        _id: userId,
      },
      {
        $set: {
          fcmTokenDevice,
        },
      },

      // {
      //   $push: {
      //     fcmTokenDevices: {
      //       $each: [fcmTokenDevice],
      //       $position: 0,
      //     },
      //   },
      // },

      {
        new: true,
        upsert: true,
      }
    );
    return _user;
  } catch (error) {
    console.log(
      "🚀 ~ file: UpdateFcmTokenUserSv.js:5 ~ UpdateFcmTokenUserSv ~ error:",
      error
    );
  }
};
module.exports = UpdateFcmTokenUserSv;
