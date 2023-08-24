const { Server } = require("socket.io");
require(`dotenv`).config();
const CONSTANTS = require("./Constant");
const amqp = require("amqplib");

const { connectRabbitConsume, connectRabbitPub } = require("./RabbitMq");
const FindOrderByIdCon = require("../components/orders/controllers/FindOrderByIdCon");
const { sendMessage } = require("./FirebaseVerify");
const formatCodeOrder = require("./Extension");
let io;
const initSocket = (server) => {
  io = new Server(server);

  const connectedSockets = [];
  console.log(
    "🚀 ~ file: Socket.js:8 ~ initSocket ~ connectedSockets:",
    connectedSockets
  );
  io.on(CONSTANTS.SOCKET.CONNECTION, (socket) => {
    console.log(`A user connected to socket ${socket.id}`);
    connectedSockets.unshift(socket.id);
    console.log(
      "🚀 ~ file: Socket.js:11 ~ io.on ~ connectedSockets:",
      connectedSockets
    );
    socket.on(CONSTANTS.SOCKET.CONNECT, () => {
      console.log("A user connected to socket.");
    });

    socket.on(CONSTANTS.SOCKET.DISCONNECT, () => {
      console.log(`A user disconnected from socket. ${socket.id}`);
      const index = connectedSockets.indexOf(socket.id);
      if (index > -1) {
        connectedSockets.splice(index, 1);
        console.log(
          "🚀 ~ file: Socket.js:28 ~ socket.on ~ connectedSockets:",
          connectedSockets
        );
      }
    });

    socket.on(CONSTANTS.SOCKET.CONNECT_RABBIT_ADMIN, async (fcmTokenDevice) => {
      console.log("CONNECT_RABBIT_ADMIN", fcmTokenDevice);
      // try {
      //   const connection = await amqp.connect(process.env.AMQP_URL);
      //   const channel = await connectRabbitPub(
      //     connection,
      //     CONSTANTS.RABBIT_MQ.QUEUE_NAME_ORDER
      //   );

      //   const orderData = await connectRabbitConsume(
      //     channel,
      //     connection,
      //     CONSTANTS.RABBIT_MQ.QUEUE_NAME_ORDER
      //   );

      //   for (const orderItem of orderData) {
      //     const orderID = orderItem.data._id;
      //     const order = await FindOrderByIdCon(orderID);
      //     if (order.isReceived) {
      //       continue; // Skip to the next iteration if the order is already received
      //     } else {
      //       const title = "Trạng thái đơn hàng";
      //       const body = `Đơn hàng có mã ${formatCodeOrder(
      //         orderID
      //       )} của khách hàng có tên ${order.address.name} với tổng tiền ${
      //         order.moneyToPaid
      //       } K đang chờ bạn xác nhận`;

      //       const data = JSON.stringify(orderItem);
      //       await sendMessage(fcmTokenDevice, title, body, data);
      //     }
      //   }

      //   await connection.close();

      //   // io.emit(CONSTANTS.SOCKET.ADMIN_SEND_MESSAGE)
      // } catch (error) {
      //   console.log("🚀 ~ file: Socket.js:54 ~ socket.on ~ error:", error);
      // }
    });

    socket.on(CONSTANTS.SOCKET.CONNECT_RABBIT_CUSTOMER, (userId) => {
      console.log("CONNECT_RABBIT_CUSTOMER: userID: ", userId);
    });

    // socket.on(CONSTANTS.SOCKET.CREATE_ORDER, (data) => {
    //   console.log("A user created an order.");
    //   // io.emit(CONSTANTS.SOCKET.CREATE_ORDER, data);
    // });

    // socket.on('message', (data) => {
    //   console.log('Data received from client:', data);
    //   socket.emit("receiveMessage", "Hihi con ga phuoc");
    // });
    // Handle socket events here
  });
  return io;
};

module.exports = {
  initSocket,
};
