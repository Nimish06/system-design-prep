const express = require('express');
const app = express();
const PORT = process.env.PORT || 3010;
// app.use((req,res,next)=>{
//     res.setHeader('Content-Security-Policy', 
//         "default-src 'self';" + 
//         "script-src 'self' 'nonce-randomKey' http://unsecure.com/abc.js;"
//     );
//     next();
// });
// app.use((req, res, next) => {
//     res.removeHeader('Content-Security-Policy');
//     res.removeHeader('Content-Security-Policy-Report-Only');
//     next();
// });
app.use(express.static('public'));
app.get('/example1', (req, res) => {
    res.sendFile(__dirname + '/public/example1.html');
});
// app.get('/example2', (req, res) => {
//     res.sendFile(__dirname + '/public/example2.html');
// });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});