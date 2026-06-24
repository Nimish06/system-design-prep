const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5011;
// app.use(bodyParser.json());
let data= 'Initial Data';
const waitingList = [];
app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});
app.get('/getData', (req, res) => {
    if(data!== req.query.lastData){
    // Simulate data retrieval
   res.json({data});
} else {
    waitingList.push(res);
    // No new data available
}
}); 
app.get('/updateData', (req, res) => {
    // Simulate data update
  data = req.query.data;
while(waitingList.length > 0){
    const waitingRes = waitingList.pop();
    waitingRes.json({data});
  }
  res.json({success:"Data updated and clients notified"});
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
