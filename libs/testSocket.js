const io = require("socket.io")();

let interval;
io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => countUp(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

let count = 0;
const countUp = (socket) => {
  const response = count++;
  socket.emit("DataSocket", response);
};

io.listen(80);
