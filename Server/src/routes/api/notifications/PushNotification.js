const express = require(`express`);
const CreateNotificationCon = require("../../../components/notifications/controllers/CreateNotificationCon");

const route = express.Router();

route.post(`/push-notification`, async (req, res) => {
  try {
    const { data } = req.body;
    console.log("🚀 ~ file: PushNotification.js:9 ~ route.post ~ data:", data)
    const name = data.name;
    const moneyToPaid = data.moneyToPaid;
    const userId = data.userId;
    const notification = {
      title: "Notification",
      messageToCustomer: `Cảm ơn bạn ${name} đã đặt hàng. Đơn hàng của bạn hết ${moneyToPaid}K`,
      messageToAdmin: `Ping ping ping. Chúng ta có 1 đơn hàng với số tiền ${moneyToPaid}K từ khách hàng có tên ${name}`,
      userId:userId
    };
    const newNotification = await CreateNotificationCon(notification);
    console.log("🚀 ~ file: PushNotification.js:18 ~ route.post ~ newNotification:", newNotification)
    return res.status(200).json({
      isLoading: false,
      message: "Push notification success",
      error: false,
      data: newNotification,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: CraeateOrderCon.js:8 ~ CreateOrderCon ~ error:",
      error.message
    );
    return res.status(500).json({
      isLoading: false,
      message: "Push notification fail",
      error: true,
      data: {},
    });
  }
});

module.exports = route;
