const express = require("express");
const router = express.Router();
const DeleteNotificationCon = require("../../../components/users/controllers/DeleteNotificationCon");

router.post(`/delete-notification/:notificationId`, async (req, res) => {
  try {
    const { notificationId } = req.params;
    const { userId } = req.body;
    console.log(
      "🚀 ~ file: DeleteNotificationById.js:9 ~ router.post ~ notificationId:",
      notificationId
    );
    const user = await DeleteNotificationCon(userId, notificationId);
    return res.status(200).json({
      isLoading: false,
      message: "Delete Notification success",
      error: false,
      data: user,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: DeleteNotificationById.ts:19 ~ router.post ~ error:",
      error
    );
    return res.status(500).json({
      isLoading: false,
      message: "Delete Notification fail",
      error: true,
      data: {},
    });
  }
});

module.exports = router;
