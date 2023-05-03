const express = require('express');
var cors = require('cors');
const chefs = require('./Data/chefs.json');

const app = express();
const port  = 5000;

app.use(cors());


app.get('/', (req, res) => {
    res.send("chef project server is running...");
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
});

app.listen(port , () => {
    console.log(`chef api is running on port: ${port}`);
});