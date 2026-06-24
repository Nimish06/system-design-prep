const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5011;
// app.use(bodyParser.json());
let data= 'Initial Data';
app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});
app.get('/getData', (req, res) => {
    // Simulate data retrieval
   res.send({data});
}); 
app.get('/updateData', (req, res) => {
    // Simulate data update
    data = 'Updated Data';
    res.send({data});
}); 


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});