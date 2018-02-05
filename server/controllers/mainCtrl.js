const axios = require("axios");
const { apiKey } = require("./../key");

const saveFav = [];

const getRecipe = (req, res, next) => {
    axios.get(`http://food2fork.com/api/search?key=${apiKey}&q=${req.body.ingredient}`).then(response => {
        recipes = response.data.recipes;
        res.json(response.data.recipes);
        // res.json(result.data);
    }).catch(console.log)
};

const addFavorite = (req,res,next) => {
    console.log(req.body,"hit");
    saveFav.push(req.body);
}

const saveFavorite = (req, res, next) => {
    res.json(saveFav);
};

module.exports = {
    getRecipe,
    addFavorite,
    saveFavorite
}