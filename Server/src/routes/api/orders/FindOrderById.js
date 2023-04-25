const express = require(`express`);
const CONSTANTS = require("../../../utils/Constant");
const FindOrderByIdCon = require("../../../components/oders/controllers/FindOrderByIdCon");
const UpdateUserOrderByIdCon = require("../../../components/users/controllers/UpdateUserOrderByIdCon");
const router = express.Router();

router.post(`/find-order-by-id/:orderId`, async (req, res) => {
  try {
    const { orderId } = req.params;
    console.log(
      "🚀 ~ file: FindOrderById.js:10 ~ router.post ~ orderId:",
      orderId
    );
    const { orderStatus } = req.body;
    console.log(
      "🚀 ~ file: FindOrderById.js:12 ~ router.post ~ orderStatus:",
      orderStatus
    );
    const order = await FindOrderByIdCon(orderId, orderStatus);

    /* Call api user to update order by userId */
    await UpdateUserOrderByIdCon(order.userId, order);
    const socketId = "exQn8kgRW22-ewpdAAAD";
    const socket = _io
    console.log("🚀 ~ file: FindOrderById.js:24 ~ router.post ~ socket:", socket)
    console.log("🚀 ~ file: FindOrderById.js:24 ~ router.post ~ socket:", socket.sockets.sockets)
    const mapSockets = socket.sockets.sockets
    for (const key of mapSockets.keys()) {
      console.log(`map key ${key}`);
    }
    
    _io.emit(CONSTANTS.SOCKET.UPDATE_ORDER, order);
    _io.emit(CONSTANTS.SOCKET.FIND_ORDER_BY_USER_ID, order.userId);
    // _io.on(CONSTANTS.SOCKET.CONNECTION, (socket) => {
    //   console.log(`A user connected huhu to socket ${socket.id}`);
    //   socket.emit(CONSTANTS.SOCKET.UPDATE_NOTIFICATION_CUSTOMER, order);
    // });

    res.status(200).json({
      message: "Find order by id successfully",
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
