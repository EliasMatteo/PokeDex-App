const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors : {
    origin:["http://localhost:3001"],
    allowedHeaders:["Access-Control-Allow-Origin"],
    credentials: true
  }
});

const PORT = process.env.PORT || 8888;

// const users = {};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

//   users[socket.id] = {};
  io.emit('user_connected');
//   io.emit('user_connected', users);


  // io.emit("change");
  socket.on("alert_all", (txt)=>{
    io.emit("change", socket.id, txt);
    
  })


//   socket.on("disconnect", ()=>{
//     delete users[socket.id];
//     io.emit('user_connected');
//     // io.emit('user_connected', users);
//   });
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});