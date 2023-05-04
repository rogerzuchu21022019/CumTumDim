//Notify Gets
const express = require(`express`);


require(`dotenv`).config();
const amqp = require("amqplib");
const { connectRabbitConsume } = require("../../../utils/RabbitMq");
const CONSTANTS = require("../../../utils/Constant");
const route = express.Router();

route.get(`/get-notification-rabbit`, async (req, res) => {
  try {
    const amqpUrl = process.env.AMQP_URL;

    const connection = await amqp.connect(amqpUrl);
    const queueName = CONSTANTS.RABBIT_MQ.QUEUE_NAME_ORDER;

    const channel = await connection.createChannel();
    await channel.assertQueue(queueName);
    console.log(`Connected to RabbitMQ ${queueName}`);

    await channel.consume(
      queueName,
      async (message) => {
        const order = JSON.parse(message.content?.toString());
        console.log("Received new order:", order);

        // Perform some logic to accept or reject the order
        // const accepted = true;
        // if (accepted) {
        //   // Update order status to "accepted" in the database
        //   console.log(`Order ${order.id} has been accepted.`);
        // } else {
        //   // Update order status to "rejected" in the database
        //   console.log(`Order ${order.id} has been rejected.`);
        // }

        // Acknowledge the message to remove it from the queue
        // await channel.ack(message);
        await connection.close();
      },
      {
        noAck: true,
      }
    );
    
    // await connectRabbitConsume(connection);
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
