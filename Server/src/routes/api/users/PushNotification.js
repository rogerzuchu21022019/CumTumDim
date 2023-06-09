const express = require(`express`);
const PushNotificationCon = require("../../../components/users/controllers/PushNotificationCon");
const CONSTANTS = require("../../../utils/Constant");

const route = express.Router();

route.post(`/:userId/push-notification`, async (req, res) => {
  try {
    const { userId } = req.params;
    const { notification } = req.body;
    const data = await PushNotificationCon(userId, notification);

    return res.status(200).json({
      isLoading: false,
      message: "Push Notification success",
      error: false,
      data: data,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: UpdateNotification.js:20 ~ route.get ~ error:",
      error
    );

    return res.status(500).json({
      isLoading: false,
      message: "Get Notification fail",
      error: true,
      data: {},
    });
  }
});

module.exports = route;
