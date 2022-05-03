const { server } = require("./www");
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: [
      process.env.CLIENT_URL || "https://localhost:3000",
      "http://localhost:8003",
    ],
    credentials: true,
  },
});
exports.listenToClientSocket = () => {
  io.on("connection", () => console.log("Socket Client connect"));
};
exports.emitToClient = (data) => {
  io.emit("encryptDT", data);
};
