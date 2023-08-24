const express = require(`express`);
const UpdateOrderIsReceivedCon = require("../../../components/orders/controllers/UpdateOrderIsReceivedCon");

const router = express.Router();

router.post(`/update-order-received/:orderId`, async (req, res) => {
  try {
    const { orderId } = req.params;
    const { isReceived } = req.body;
 
    const order = await UpdateOrderIsReceivedCon(orderId, isReceived);

    res.status(200).json({
      message: "Update isReceived order success",
      data: order,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: UpdateOrderIsReceived.js:26 ~ router.post ~ error:",
      error
    );
    res.status(500).json({
      message: "Update isReceived failed",
      data: null,
    });
  }
});
module.exports = router;
