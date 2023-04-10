const express = require(`express`);
const CONSTANTS = require("../../../utils/Constant");
const FindOrderByIdCon = require("../../../components/oders/controllers/FindOrderByIdCon");
const UpdateUserByIdCon = require("../../../components/users/controllers/UpdateUserByIdCon");
const router = express.Router();


router.post(`/find-order-by-id/:orderId`, async (req, res) => {
  try {
    const { orderId } = req.params;
    console.log("🚀 ~ file: FindOrderById.js:10 ~ router.post ~ orderId:", orderId)
    const { orderStatus,orderData } = req.body;
    console.log("🚀 ~ file: FindOrderById.js:12 ~ router.post ~ orderStatus:", orderStatus)
    const order = await FindOrderByIdCon(orderId, orderStatus);
    
    await UpdateUserByIdCon(order.userId, order);
    _io.emit(CONSTANTS.SOCKET.UPDATE_ORDER, order);
    _io.emit(CONSTANTS.SOCKET.FIND_ORDER_BY_USER_ID,order.userId);
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
