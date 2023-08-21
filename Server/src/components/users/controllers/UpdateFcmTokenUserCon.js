const UpdateFcmTokenUserSv = require("../services/UpdateFcmTokenUserSv");

const UpdateFcmTokenUserCon = async (userId, fcmTokenDevice) => {
  try {
    const _user = await UpdateFcmTokenUserSv(userId, fcmTokenDevice);
    return _user;
  } catch (error) {
    console.log(
      "🚀 ~ file: UpdateFcmTokenUserCon.js:5 ~ UpdateFcmTokenUserCon ~ error:",
      error
    );
  }
};

module.exports = UpdateFcmTokenUserCon;
