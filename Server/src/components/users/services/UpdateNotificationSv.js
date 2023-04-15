const User = require("../model/User");

const UpdateNotificationSv = async (userId, notification) => {
  try {
    const query = {
      _id: userId,
    };

    const optionUpdate = {
      $set: {
        ...notification,
        isRead: notification.isRead,
      },
    };
    const user = await User.findByIdAndUpdate(query, optionUpdate, {
      new: true,
    });

    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: UpdateNotificationSv.js:24 ~ UpdateNotificationSv ~ error:",
      error
    );
  }
};
module.exports = UpdateNotificationSv;
