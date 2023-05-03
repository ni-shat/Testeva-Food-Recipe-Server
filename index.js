const express = require('express');

const app = express();

const port  = 5000;

app.get('/', (req, res) => {
    res.send("chef project server is running...");
});

app.listen(port , () => {
    console.log(`chef api is running on port: ${port}`);
});