const express = require(`express`);
const CreateOrderCon = require("../../../components/orders/controllers/CreateOrderCon");
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
    // console.log("🚀 ~ file: CreateOrder.js:16 ~ route.post ~ orderData:", orderData)

    const userId = orderData.userId;
    // console.log("🚀 ~ file: CreateOrder.js:18 ~ route.post ~ userId:", userId);
    await UpdateUserOrderByIdCon(order.userId, orderData);
    const data = {
      orderData,
      fcmTokenDevice,
    };
    _io.emit(CONSTANTS.SOCKET.CREATE_ORDER, data);

    // console.log("🚀 ~ file: Notify.js:17 ~ route.post ~ orderData:", orderData);

    const message = {
      userId: userId,
      data: orderData,
    };

    
    // setTimeout(async () => {
    //   const connection = await amqp.connect(process.env.AMQP_URL);
    //   const channel = await connectRabbitPub(
    //     connection,
    //     CONSTANTS.RABBIT_MQ.QUEUE_NAME_ORDER
    //   );

    //   await channel.sendToQueue(
    //     CONSTANTS.RABBIT_MQ.QUEUE_NAME_ORDER,
    //     Buffer.from(JSON.stringify(message)),
    //     {
    //       persistent: true,
    //     }
    //   );

    // }, 5000);

    // await connection.close();

    // publish queue foruss
    // const channel = await connectRabbitPub(
    //   connection,
    //   `CONSTANTS.RABBIT_MQ.QUEUE_NAME_ORDER_${order.userId}`
    // );

    // await channel.sendToQueue(
    //   `CONSTANTS.RABBIT_MQ.QUEUE_NAME_ORDER_${order.userId}`,
    //   Buffer.from(JSON.stringify(message)),
    //   {
    //     persistent: true,
    //   }
    // );

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
