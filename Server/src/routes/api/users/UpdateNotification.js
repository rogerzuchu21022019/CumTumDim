const express = require(`express`);
const UpdateNotificationCon = require("../../../components/users/controllers/UpdateNotificationCon");

const route = express.Router();

route.post(`/:userId/update-notification`, async (req, res) => {
  try {
    const { userId } = req.params;
    const { notification } = req.body;
    console.log("🚀 ~ file: FindUserById.js:8 ~ route.get ~ userId:", userId);
    const data = await UpdateNotificationCon(userId, notification);

    return res.status(200).json({
      isLoading: false,
      message: "Get Notification success",
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
