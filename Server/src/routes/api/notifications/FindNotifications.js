const express = require(`express`);
const FindNotificationsCon = require("../../../components/notifications/controllers/FindNotificationsCon");
const router = express.Router();

router.get(`/find-notifications`, async (req, res) => {
  try {
    const notifications = await FindNotificationsCon();
    console.log("🚀 ~ file: FindNotifications.js:8 ~ router.get ~ notifications:", notifications)
    return res.status(200).json({
      isLoading: false,
      message: "Find notifications success",
      error: false,
      data: notifications,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: FindNotifications.js:8 ~ router.get ~ error:",
      error.message
    );
    return res.status(500).json({
      isLoading: false,
      message: "Find notifications fail",
      error: true,
      data: {},
    });
  }
});

module.exports = router;
