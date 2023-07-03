const User = require("../model/User");

const DeleteNotificationSv = async (userId, notificationId) => {
  
  try {
    let user = await User.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        $pull: {
          notifications: {
            _id: notificationId,
          },
        },
      },
      {
        new: true,
        upsert: true,
      }
    );

    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: DeleteNotificationByIdSv.ts:31 ~ DeleteNotificationSv ~ error:",
      error
    );
  }
};

module.exports = DeleteNotificationSv;
