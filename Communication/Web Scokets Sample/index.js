const express = require('express');
const {createServer} = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const app = express();
const PORT = process.env.PORT || 3000;

const server = createServer(app);
const io = new Server(server);
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (msg) => {
        console.log('message: ' + msg);
        io.emit('message', msg); // Broadcast message to all clients
    });
    socket.on('disconnect', () => {
        console.log('user disconnected'); 
    });
});



server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});