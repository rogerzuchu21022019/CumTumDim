//Notify Gets
const express = require(`express`);
const { connectRabbitConsume, publish } = require("./RabbitMq");

require(`dotenv`).config();
const amqp = require("amqplib");
const route = express.Router();

route.get(`/get-notification-rabbit`, async (req, res) => {
  try {
    const amqpUrl = process.env.AMQP_URL;

    const connection = await amqp.connect(amqpUrl);
    await connectRabbitConsume(connection);
    // return res.status(200).json({
    //   isLoading: false,
    //   message: "Get notification success",
    //   error: false,
    //   data: newNotification,
    // });
  } catch (error) {
    return res.status(500).json({
      isLoading: false,
      message: "Get Notify fail",
      error: true,
      data: {},
    });
  }
});

module.exports = route;
