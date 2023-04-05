const express = require(`express`);
const { publish, connectRabbitPub } = require("./RabbitMq");
const amqp = require("amqplib");
let io = require("../../../../bin/server");
const CONSTANTS = require("../../../utils/Constant");
const CreateOrderCon = require("../../../components/oders/controllers/CreateOrderCon");

require(`dotenv`).config();
const route = express.Router();

route.post(`/push-notification-rabbit`, async (req, res) => {
  try {
    const { order } = req.body;
    

    const orderData = await CreateOrderCon(order); //orderData with status pending
    //

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

    io.emit(CONSTANTS.SOCKET.CREATE_ORDER, orderData);
    return res.status(200).json({
      isLoading: false,
      message: "Push notification success",
      error: false,
      data: {
        queueSent: true,
      },
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
