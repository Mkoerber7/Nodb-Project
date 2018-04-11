const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const app = express();

app.use(json());
app.use(cors());

const port = 3210;

const { getRecipe, addFavorite, saveFavorite, deleteFavorite, updateTitle } = require(`${__dirname}/controllers/mainCtrl.js`);
 

app.post("/api/getRecipe", getRecipe);
app.post("/api/addFavorite", addFavorite);
app.get("/api/saveFavorite", saveFavorite);
app.delete("/api/deleteFavorite", deleteFavorite);
app.put("/api/updateTitle", updateTitle);


app.listen(port, () => {
  console.log(`Checkin this shit on port: ${port}, deadass`);
});