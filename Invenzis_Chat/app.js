const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;
const server = require("http").createServer(app);

const io = require("socket.io")(server);

app.use(express.static(__dirname + "/public"));

io.on("connection", function(socket){
    /*socket.on("newuser", function (username) {
      socket.broadcast.emit("update", username + " se unió a el chat.");
    });
    socket.on("exituser", function (username) {
      socket.broadcast.emit("update", username + " se fue a el chat.");
    });*/
    socket.on("chat", function (username) {
      socket.broadcast.emit("chat", message);
    });
});

server.listen(port);