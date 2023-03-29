const Notification = require("../model/Notification");

const FindNotificationSv = async () => {
  try {
    const notifications = await Notification.find({});
    return notifications;
  } catch (error) {
    console.log(
      "🚀 ~ file: FindNotificationsSV.js:5 ~ FindNotificationSv ~ error:",
      error
    );
  }
};

module.exports = FindNotificationSv;
