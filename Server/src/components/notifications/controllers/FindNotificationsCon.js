const FindNotificationsSv = require("../services/FindNotificationsSV");

const FindNotificationsCon = async () => {
  try {
    const notifications = await FindNotificationsSv();
    return notifications;
  } catch (error) {
    console.log(
      "🚀 ~ file: FindNotificationsCon.js:5 ~ FindNotificationsCon ~ error:",
      error
    );
  }
};

module.exports = FindNotificationsCon;
