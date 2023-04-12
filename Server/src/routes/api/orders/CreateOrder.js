const express = require(`express`);
const CreateOrderCon = require("../../../components/oders/controllers/CreateOrderCon");
const CONSTANTS = require("../../../utils/Constant");
const amqp = require("amqplib");
const FindUserByIdCon = require("../../../components/users/controllers/UpdateUserByIdCon");
const { connectRabbitPub } = require("../../../utils/RabbitMq");
require(`dotenv`).config();

const route = express.Router();

route.post(`/create-order`, async (req, res) => {
  try {
    const { order } = req.body;
    // console.log("🚀 ~ file: Notify.js:9 ~ io:", _io);

    const orderData = await CreateOrderCon(order); //orderData with status pending
    _io.emit(CONSTANTS.SOCKET.CREATE_ORDER, orderData);
    // console.log("🚀 ~ file: Notify.js:17 ~ route.post ~ orderData:", orderData);

    // const amqpUrl = process.env.AMQP_URL;
    // const message = order.moneyToPaid;

    // const connection = await amqp.connect(amqpUrl);

    // const channel = await connectRabbitPub(
    //   connection,
    //   CONSTANTS.RABBIT_MQ.QUEUE_NAME_ORDER
    // );

    // await channel.sendToQueue(
    //   CONSTANTS.RABBIT_MQ.QUEUE_NAME_ORDER,
    //   Buffer.from(JSON.stringify(message)),
    //   {
    //     persistent: true,
    //   }
    // );
    return res.status(200).json({
      isLoading: false,
      message: "Push notification success",
      error: false,
      data: orderData,
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
      data: {
        queueSent: false,
      },
    });
  }
});

module.exports = route;
