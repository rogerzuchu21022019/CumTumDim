// server.js
const app = require(`../src/app`);
require(`dotenv`).config();

const http = require("http");
const CONSTANTS = require("../src/utils/Constant");
const { initSocket } = require("../src/utils/Socket");


const server = http.createServer(app);




const io = initSocket(server);
global._io = io


const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});


