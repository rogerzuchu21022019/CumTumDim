const amqp = require("amqplib");
const CONSTANTS = require("./Constant");
const connectRabbitPub = async (connection, exchangeName) => {
  try {
    const channel = await connection.createChannel();
    await channel.assertQueue(exchangeName, { durable: true });

    return channel;
  } catch (error) {
    console.log(error);
  }
};
const publish = async (channel, message, exchangeName) => {
  try {
    await channel.sendToQueue(
      exchangeName,
      Buffer.from(JSON.stringify(message)),
      {
        persistent: true,
      }
    );
    console.log(`Order with id ${message} has been published`);
  } catch (error) {
    console.log(error);
  }
};

let allOrders = [];
const connectRabbitConsume = async (channel, connection, queueName) => {
  return new Promise((resolve, reject) => {
    try {
      channel.assertQueue(queueName);

      // Khai báo một biến array để lưu trữ tất cả các tin nhắn đã nhận được

      channel.consume(
        queueName,
        async (message) => {
          const order = JSON.parse(message.content?.toString());
          // console.log("Received new order:", order);
          // Thêm tin nhắn vào danh sách tạm thời
          allOrders.unshift(order);

          channel.ack(message);

          // if (allOrders.length === 2) {
          //   // Đóng kết nối sau khi nhận hết tin nhắn
          //   // console.log('All orders:', allOrders.length);

          //   // Resolve Promise với danh sách tất cả các tin nhắn
          // }
          resolve(allOrders);

        },
        {
          noAck: false, // Sử dụng manual acknowledgment
        }
      );
    } catch (error) {
      console.error("Error connecting to RabbitMQ", error);
      reject(error);
    }
  });
};

module.exports = {
  connectRabbitPub,
  publish,
  connectRabbitConsume,
};
