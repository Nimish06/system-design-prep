const express = require('express');
const app = express();
const PORT = 3010;

// app.use(express.urlencoded({ extended: true }));

// app.use((req,res,next)=>{
//     res.setHeader('Content-Security-Policy', 
//         "default-src 'self';" + 
//         "script-src 'self' 'nonce-randomKey' http://unsecure.com/abc.js;"
//     );
//     next();
// });
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});