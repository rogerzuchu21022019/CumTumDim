const { Server } = require("socket.io");
const CONSTANTS = require("./Constant");
let io;
const initSocket = (server) => {
  io = new Server(server);

  io.on(CONSTANTS.SOCKET.CONNECTION, (socket) => {
    console.log(`A user connected to socket ${socket.id}`);

    socket.on(CONSTANTS.SOCKET.CONNECT, () => {
      console.log("A user connected to socket.");
    });

    socket.on(CONSTANTS.SOCKET.DISCONNECT, () => {
      console.log("A user disconnected from socket.");
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
