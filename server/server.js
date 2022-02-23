const express = require('express');
const app = express();
const http = require("http");
const cors = require("cors");
const {Server} = require("socket.io");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server  , {
  cors: {
    // origin: "http://agent-bubbles.space",
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("user connected", socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log((`User with ID: ${socket.id} joined room: ${data}`));
  });

  socket.on("send_message", (data) => {
    console.log("data received by the server: ", data); 
    //specify to wich room the response message will go back to:
    // socket.to(data.room).emit("receive_message", data);
    socket.broadcast.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
  console.log("User disconnected", socket.id);
  })
});

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('server is running on port ' + port);
})

server.listen(port, () => {
  console.log("Server is up on port " + port);
});

