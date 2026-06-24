const express = require('express');
const bodyParser = require('body-parser');
const client = require('./client');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const PORT = process.env.PORT || 3000;

//TODO to expose rest call
// which internally calls gRPC server functions using gRPC client


app.get('/', (req, res) => {
    client.getAll({}, (err, response) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(response.customers);
        }
    });
});
app.post('/create', (req, res) => {
    let newCustomer = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    }
    client.insert({customer: newCustomer}, (err, response) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(response.customer);
        }
    });
});
app.post('/update', (req, res) => {
    let updatedCustomer = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    }
    client.update({customer: updatedCustomer}, (err, response) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(response.customer);
        }
    });
});
app.post('/delete', (req, res) => {
    client.remove({id: req.body.id}, (err, response) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(response);
        } 
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

