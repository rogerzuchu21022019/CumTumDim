const express = require(`express`);
const { publish, connectRabbitPub } = require("./RabbitMq");
const amqp = require("amqplib");

require(`dotenv`).config();
const route = express.Router();

route.post(`/push-notification-rabbit`, async (req, res) => {
  try {
    const { order } = req.body;

    const amqpUrl = process.env.AMQP_URL;
    const connection = await amqp.connect(amqpUrl);

    const channel = await connectRabbitPub(connection);
    await publish(channel, order.moneyToPaid);
    // io.emit("create_order", order);
    return res.status(200).json({
      isLoading: false,
      message: "Push notification success",
      error: false,
      data: order,
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
