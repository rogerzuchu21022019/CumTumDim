const PushNotificationSv = require("../services/PushNotificationSv");

const PushNotificationCon = async (userId,notification) => {
  try {
    const user = await PushNotificationSv(userId,notification);
    return user;
  } catch (error) {
    console.log("🚀 ~ file: UpdateNotificationCon.js:9 ~ UpdateNotificationCon ~ error:", error)
  }
};
module.exports = PushNotificationCon;
