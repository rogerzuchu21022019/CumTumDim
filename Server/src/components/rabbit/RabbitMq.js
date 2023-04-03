const amqp = require("amqplib");


const connectRabbitPub = async (amqpUrl,queueName) => {
  try {
    const connection = await amqp.connect(amqpUrl);
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName, { durable: true });
    console.log(`Connected to RabbitMQ ${queueName}`);

    return channel;
  } catch (error) {
    console.log(error);
  }
};
const publish = async (channel, message,queueNameSameConnect) => {
  try {
    await channel.sendToQueue(queueNameSameConnect, Buffer.from(JSON.stringify(message)), {
      persistent: true,
    });
    console.log(`Order with id ${message} has been published`);
  } catch (error) {
    console.log(error);
  }
};

const connectRabbitConsume = async (amqpUrl,queueNameSameConnect) => {
  try {
    const connection = await amqp.connect(amqpUrl);
    const channel = await connection.createChannel();
    await channel.assertQueue(queueNameSameConnect);
    console.log('Connected to RabbitMQ');

    channel.consume(queueNameSameConnect, async (message) => {
      const order = JSON.parse(message.content.toString());
      console.log('Received new order:', order);

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
      await channel.ack(message);
    },{
      noAck:false
    });
  } catch (error) {
    console.error('Error connecting to RabbitMQ', error);
  }
}

module.exports = {
  connectRabbitPub,
  publish,
  connectRabbitConsume
};
