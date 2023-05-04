const express = require('express');
var cors = require('cors');
const chefs = require('./Data/chefs.json');
const chefDetails = require('./Data/chef-details.json');

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


let categories = ["Chicken", "Beef", "Fish", "Dessert", "Pasta"];
let selectedCategories;

app.get('/recipe-categories/:ct', (req, res) => {

    const ct = req.params.ct;
    console.log(ct)

    for (const element of chefDetails) {
        console.log(element?.recipes)
        selectedRecipes = element?.recipes?.find(c => c.category == 'dessert');
        console.log(selectedRecipes);
    }

    res.send(selectedCategories);
});

app.listen(port, () => {
    console.log(`chef api is running on port: ${port}`);
});