const CreateNotificationSV = require("../services/CreateNotificationSV");

const CreateNotificationCon = async (notification) => {
  try {
    const newNotification = await CreateNotificationSV(notification);
    return newNotification;
  } catch (error) {
    console.log(
      "🚀 ~ file: CreateNotificationCon.js:8 ~ CreateNotificationCon ~ error:",
      error
    );
  }
};

module.exports = CreateNotificationCon;
