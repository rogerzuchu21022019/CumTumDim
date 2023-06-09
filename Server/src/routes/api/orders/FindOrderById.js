const express = require(`express`);
const CONSTANTS = require("../../../utils/Constant");
const FindOrderByIdCon = require("../../../components/oders/controllers/FindOrderByIdCon");
const UpdateUserOrderByIdCon = require("../../../components/users/controllers/UpdateUserOrderByIdCon");
const FcmNotify = require("../../../utils/FcmNotify");
const UpdateUserOrderExistedCon = require("../../../components/users/controllers/UpdateUserOrderExistedCon");

const router = express.Router();

router.post(`/find-order-by-id/:orderId`, async (req, res) => {
  try {
    const { orderId } = req.params;
    const { orderStatus } = req.body;
    const order = await FindOrderByIdCon(orderId, orderStatus);

    /* Call api user to update order by userId */
    const user = await UpdateUserOrderExistedCon(order.userId, order);
    const title = "Notifications";
    const body = `Your order ${order.orderId} has been ${orderStatus}`;

    const data = {
      orderStatus: orderStatus,
      order: order,
      moneyToPaid: order.moneyToPaid,
    };

    if (user.fcmTokenDevice != undefined) {
      await FcmNotify(user.fcmTokenDevice, title, body, data);
    }
    await PushNotificationCon(order.userId, notification);

    
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
