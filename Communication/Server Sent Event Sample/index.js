const express = require('express');
// const {createServer} = require('node:http');
const { join } = require('node:path');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/sse', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.write('data: Welcome to server-sent events! \n\n'); // Send initial data
    const intervalId = setInterval(() => {
        const data = `data: Current time is ${new Date().toLocaleTimeString()}\n\n`;
        res.write(data); // Send updated data every 5 seconds
    }, 5000);
    req.on('close', () => {
        console.log('Client disconnected');
        clearInterval(intervalId);
    });
});

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});