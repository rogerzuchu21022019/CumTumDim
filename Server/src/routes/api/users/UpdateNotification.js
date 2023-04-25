const express = require(`express`);

const CONSTANTS = require("../../../utils/Constant");
const UpdateNotificationCon = require("../../../components/users/controllers/UpdateNotificationCon");

const route = express.Router();

route.post(`/:userId/update-notification`, async (req, res) => {
  try {
    const { userId } = req.params;
    console.log("🚀 ~ file: UpdateNotification.js:11 ~ route.post ~ userId:", userId)
    const { notification } = req.body;
    console.log("🚀 ~ file: UpdateNotification.js:13 ~ route.post ~ notification:", notification)
    
    const data = await UpdateNotificationCon(userId, notification);
    

    
    _io.emit(CONSTANTS.SOCKET.PUSH_NOTIFICATION_ADMIN, userId);
    
    return res.status(200).json({
      isLoading: false,
      message: "Update Notification success",
      error: false,
      data: data,
    });
  } catch (error) {
    console.log("🚀 ~ file: UpdateNotification.js:27 ~ route.post ~ error:", error)

    return res.status(500).json({
      isLoading: false,
      message: "Update Notification fail",
      error: true,
      data: {},
    });
  }
});

module.exports = route;
