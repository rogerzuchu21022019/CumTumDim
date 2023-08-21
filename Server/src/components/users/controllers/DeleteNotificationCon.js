const DeleteNotificationSv = require("../services/DeleteNotificationSv");

const DeleteNotificationCon = async (userId, notificationId) => {
  try {
    const user = await DeleteNotificationSv(userId, notificationId);
 
    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: DeleteNotificationCon.js:10 ~ DeleteNotificationCon ~ error:",
      error
    );
  }
};

module.exports = DeleteNotificationCon;
