const express = require('express');
const app = express();
const cors = require('cors');

// Enable CORS for all routes
let allowedOrigins = ['http://127.0.0.1:5500']; // Add your allowed origins here
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}
app.use(cors(corsOptions));
app.get('/list', (req, res) => {
 res.send([{
 id: 1,
 title: 'Namaste Frontend System Design'
 }])
 })
const port = process.env.PORT || 5010;
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});