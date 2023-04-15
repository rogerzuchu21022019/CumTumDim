const User = require("../model/User");

const PushNotificationSv = async (userId, notification) => {
  try {
    const query = {
      _id: userId,
    };
    const optionUpdate = {
      $push: {
        notifications: {
          $each: [notification],
          $position: 0,
        },
      },
    };
    const user = await User.findByIdAndUpdate(query, optionUpdate, {
      new: true,
      upsert: true,
    });

    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: UpdateNotificationSv.js:24 ~ UpdateNotificationSv ~ error:",
      error
    );
  }
};
module.exports = PushNotificationSv;
