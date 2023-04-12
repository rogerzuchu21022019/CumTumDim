const UpdateNotificationSv = require("../services/UpdateNotificationSv");

const UpdateNotificationCon = async (userId,notification) => {
  try {
    const user = await UpdateNotificationSv(userId,notification);
    return user;
  } catch (error) {
    console.log("🚀 ~ file: UpdateNotificationCon.js:9 ~ UpdateNotificationCon ~ error:", error)
  }
};
module.exports = UpdateNotificationCon;
