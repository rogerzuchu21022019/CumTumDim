// server.js
const app = require(`../src/app`);
require(`dotenv`).config();
const { Server } = require("socket.io");
const http = require("http");
const CONSTANTS = require("../src/utils/Constant");

const server = http.createServer(app);
const io = new Server(server);

io.on(CONSTANTS.SOCKET.CONNECTION, (socket) => {
  console.log("A user connected to socket.");

  socket.on(CONSTANTS.SOCKET.CONNECT, () => {
    console.log("A user connected to socket.");
  });

  socket.on(CONSTANTS.SOCKET.DISCONNECT, () => {
    console.log("A user disconnected from socket.");
  });

  socket.on(CONSTANTS.SOCKET.CREATE_ORDER, (data) => {
    io.emit(CONSTANTS.SOCKET.CREATE_ORDER, data);
  });
  // Handle socket events here
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});

module.exports = { io };
