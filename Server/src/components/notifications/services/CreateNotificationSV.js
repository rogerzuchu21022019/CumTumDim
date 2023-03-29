const Notification = require("../model/Notification");

const CreateNotificationSV = async (notification) => {
  try {
    const newNotification = await Notification({
      title: notification.title,
      messageToCustomer: notification.messageToCustomer,
      messageToAdmin: notification.messageToAdmin,
      userId: notification.userId,
    });
    await newNotification.save();
    return newNotification;
  } catch (error) {
    console.log(
      "🚀 ~ file: CreateNotificationSV.js:12 ~ CreateNotificationSV ~ error:",
      error
    );
  }
};

module.exports = CreateNotificationSV;
