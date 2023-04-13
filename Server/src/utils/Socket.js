const { Server } = require("socket.io");
const CONSTANTS = require("./Constant");
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
        console.log("🚀 ~ file: Socket.js:28 ~ socket.on ~ connectedSockets:", connectedSockets)
      }
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
