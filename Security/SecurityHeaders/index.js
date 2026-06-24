const express = require('express');
const app = express();
const PORT = process.env.PORT || 5010;

const redirectToHTTPS = (req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') { 
        return res.redirect('https://' + req.get('host') + req.url.join(''));
    }
    next();
};

app.use(redirectToHTTPS);

app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'no-referrer');
    res.removeHeader('X-Powered-By');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    next();
});

app.get('/list', (req, res) => {
    res.send([{
        id: 1,
        name: 'Item 1'
    }])
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});