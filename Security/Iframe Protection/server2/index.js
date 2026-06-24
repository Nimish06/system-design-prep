const express = require('express');
const app = express();
const PORT = process.env.PORT || 3011;

// Remove any CSP headers
// app.use((req, res, next) => {
//     res.removeHeader('Content-Security-Policy');
//     res.removeHeader('Content-Security-Policy-Report-Only');
//     next();
// });

app.use((req, res, next) => {
 res.setHeader('Content-Security-Policy', "frame-ancestors 'self'")
 next();
})
app.use(express.static('public'));
// app.get('/', (req, res) => {
//     res.send('Server2 is running. Try /iframe-website1 or /iframe-website2');
// });
app.get('/iframe-website1', (req, res) => {
    res.sendFile(__dirname + '/public/iframe-website1.html');
});
// app.get('/iframe-website2', (req, res) => {
//     res.sendFile(__dirname + '/public/iframe-website2.html');
// });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});