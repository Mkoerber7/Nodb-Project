const axios = require("axios");
const { apiKey } = require("./../key");

const getRecipe = (req, res, next) => {
    axios.get(`http://food2fork.com/api/search?key=${apiKey}&q=${req.body.ingredient}`).then(response => {
        recipes = response.data.recipes;
        res.json(response.data.recipes);
        // res.json(result.data);
    }).catch(console.log)
};

module.exports = {
    getRecipe
}