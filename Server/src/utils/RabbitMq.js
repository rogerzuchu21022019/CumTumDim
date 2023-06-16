const amqp = require("amqplib");
const CONSTANTS = require("./Constant");
const connectRabbitPub = async (connection, queueName) => {
  try {
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName, { durable: true });
    console.log(`Connected to RabbitMQ ${queueName}`);
    return channel;
  } catch (error) {
    console.log(error);
  }
};
const publish = async (channel, message) => {
  try {
    const queueName = CONSTANTS.RABBIT_MQ.QUEUE_NAME_ORDER;

    await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), {
      persistent: true,
    });
    console.log(`Order with id ${message} has been published`);
  } catch (error) {
    console.log(error);
  }
};

const connectRabbitConsume = async (connection) => {
  try {
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
  } catch (error) {
    console.error("Error connecting to RabbitMQ", error);
  }
};

module.exports = {
  connectRabbitPub,
  publish,
  connectRabbitConsume,
};
