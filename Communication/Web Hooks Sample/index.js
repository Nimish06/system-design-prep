const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// Endpoint to receive webhooks
app.post('/webhook', (req, res) => {
    const payload = req.body;
    console.log('Webhook received:', payload);
    res.status(200).send('Webhook received');
});

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});