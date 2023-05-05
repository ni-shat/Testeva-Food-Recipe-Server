const express = require('express');
var cors = require('cors');
const chefs = require('./Data/chefs.json');
const chefDetails = require('./Data/chef-details.json');
const latestRecipes = require('./Data/latest-recipes.json');

const app = express();
const port = 5000;

app.use(cors());


app.get('/', (req, res) => {
    res.send("chef project server is running...");
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
});

app.get('/chef-details/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedchef = chefDetails.find(c => c.id == id);
    res.send(selectedchef);
});

app.get('/latest-recipes', (req, res) => {
    res.send(latestRecipes);
});



app.listen(port, () => {
    console.log(`chef api is running on port: ${port}`);
});