const express = require(`express`);
const CreateOrderCon = require("../../../components/oders/controllers/CreateOrderCon");
const CONSTANTS = require("../../../utils/Constant");
const amqp = require("amqplib");
const { connectRabbitPub } = require("../../../utils/RabbitMq");
const UpdateUserOrderByIdCon = require("../../../components/users/controllers/UpdateUserOrderByIdCon");
require(`dotenv`).config();
const FindUserByIDCon = require("../../../components/users/controllers/FindUserByIdCon");
const route = express.Router();

route.post(`/create-order`, async (req, res) => {
  try {
    const { order, fcmTokenDevice } = req.body;

    const orderData = await CreateOrderCon(order); //orderData with status pending
    await UpdateUserOrderByIdCon(order.userId, orderData);
    const data = {
      orderData,
      fcmTokenDevice,
    };
    _io.emit(CONSTANTS.SOCKET.CREATE_ORDER, data);

    // console.log("🚀 ~ file: Notify.js:17 ~ route.post ~ orderData:", orderData);

    const amqpUrl = process.env.AMQP_URL;
    const message = order.moneyToPaid;

    const connection = await amqp.connect(amqpUrl);

    const channel = await connectRabbitPub(
      connection,
      CONSTANTS.RABBIT_MQ.QUEUE_NAME_ORDER
    );

    await channel.sendToQueue(
      CONSTANTS.RABBIT_MQ.QUEUE_NAME_ORDER,
      Buffer.from(JSON.stringify(message)),
      {
        persistent: true,
      }
    );
    return res.status(200).json({
      isLoading: false,
      message: "Create Order Success",
      error: false,
      data: orderData,
    });
  } catch (error) {
    console.log("🚀 ~ file: CreateOrder.js:45 ~ route.post ~ error:", error);
    return res.status(500).json({
      isLoading: false,
      message: "Push notification fail",
      error: true,
      data: {
        queueSent: false,
      },
    });
  }
});

module.exports = route;
