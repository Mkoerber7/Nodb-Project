const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const app = express();

app.use(json());
app.use(cors());

const port = 3210;

const { getRecipe } = require(`${__dirname}/controllers/mainCtrl.js`);
// const { getF2f } = require(`${__dirname}/controllers/mainCtrl.js`);
//const { getImage } = require(`${__dirname}/controllers/mainCtrl.js`);
//const { getUrl } = require(`${__dirname}/controllers/mainCtrl.js`); 

app.post("/api/getRecipe", getRecipe);
// app.post("/api/f2f", getF2f);
//app.post("/api/image", getImage);
// app.post("/api/url", getUrl);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});