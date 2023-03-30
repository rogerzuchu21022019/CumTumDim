const Notification = require("../model/Notification");

const FindNotificationsSv = async () => {
  try {
    const notifications = await Notification.find({});
    console.log(
      "🚀 ~ file: FindNotificationsSV.js:6 ~ FindNotificationSv ~ notifications:",
      notifications
    );
    return notifications;
  } catch (error) {
    console.log(
      "🚀 ~ file: FindNotificationsSV.js:5 ~ FindNotificationSv ~ error:",
      error
    );
  }
};

module.exports = FindNotificationsSv;
