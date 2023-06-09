const http = require("http");
const express = require("express");
const cors = require("cors");
const socketio = require("socket.io");
const port = 4000 || process.env.PORT ;

const app = express();
const server = http.createServer(app);

// using the middlewares here 
app.use(cors());

// creating the routes here 
app.get("/", (req, res) => {
    res.send("Hello World");
});

const io = socketio(server);
io.on("connection", () => {
    console.log("New client connected");
});


server.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
})