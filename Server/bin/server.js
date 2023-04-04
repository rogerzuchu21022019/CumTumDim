// server.js
const app = require(`../src/app`);
require(`dotenv`).config();
const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected to socket.");

  socket.on("connect", () => {
    console.log("A user connected to socket.");
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected from socket.");
  });

  // Handle socket events here
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
