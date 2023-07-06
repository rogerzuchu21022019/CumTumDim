const express = require(`express`);
const CONSTANTS = require("../../../utils/Constant");
const FindOrderByIdCon = require("../../../components/orders/controllers/FindOrderByIdCon");
const UpdateUserOrderByIdCon = require("../../../components/users/controllers/UpdateUserOrderByIdCon");
const UpdateUserOrderExistedCon = require("../../../components/users/controllers/UpdateUserOrderExistedCon");
const PushNotificationCon = require("../../../components/users/controllers/PushNotificationCon");
const { sendMessage } = require("../../../utils/FirebaseVerify");
const formatCodeOrder = require("../../../utils/Extension");
const FindUserByIDCon = require("../../../components/users/controllers/FindUserByIdCon");

const router = express.Router();

router.post(`/find-order-by-id/:orderId`, async (req, res) => {
  try {
    const { orderId } = req.params;
    const { orderStatus } = req.body;
    const order = await FindOrderByIdCon(orderId, orderStatus);
    // console.log("🚀 ~ file: FindOrderById.js:16 ~ router.post ~ order:", order);

    /* Call api user to update order by userId */
    const title = "Trạng thái đơn hàng";
    const body = `Đơn hàng có mã ${formatCodeOrder(orderId)} ${
      orderStatus === "Chấp nhận" ? "đã được" : "đã bị"
    } ${orderStatus}`;

    const data = {
      orderStatus: JSON.stringify(orderStatus),
      order: JSON.stringify(order),
      moneyToPaid: JSON.stringify(order.moneyToPaid),
    };

    const dataForUpdateNoti = {
      orderStatus: orderStatus,
      order: order,
      moneyToPaid: order.moneyToPaid,
    };

    const notificationForUpdateInUser = {
      title,
      content: body,
      data: dataForUpdateNoti,
    };
    const user = await PushNotificationCon(
      order.userId,
      notificationForUpdateInUser
    );
    await UpdateUserOrderExistedCon(order.userId, order);
    sendMessage(user.fcmTokenDevice, title, body, data);
    // await FindUserByIDCon(order.userId);

    // console.log("🚀 ~ file: FindOrderById.js:24 ~ router.post ~ socket:", socket)
    // console.log("🚀 ~ file: FindOrderById.js:24 ~ router.post ~ socket:", socket.sockets.sockets)
    // const mapSockets = socket.sockets.sockets
    // for (const key of mapSockets.keys()) {
    //   console.log(`map key ${key}`);
    // }

    // _io.emit(CONSTANTS.SOCKET.UPDATE_ORDER, order);
    // _io.to(`${user.fcmTokenDevice}`).emit(user.fcmTokenDevice, order.userId);
    // _io.on(CONSTANTS.SOCKET.CONNECTION, (socket) => {
    //   console.log(`A user connected huhu to socket ${socket.id}`);
    //   socket.emit(CONSTANTS.SOCKET.UPDATE_NOTIFICATION_CUSTOMER, order);
    // });

    res.status(200).json({
      message: "Update status order success",
      data: order,
    });
  } catch (error) {
    console.log("🚀 ~ file: FindOrderById.js:8 ~ router.post ~ error:", error);
    res.status(500).json({
      message: "Find order by id failed",
      data: null,
    });
  }
});
module.exports = router;
