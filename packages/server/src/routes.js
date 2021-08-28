const express = require("express");
const superHeroApi = require("./controllers/superhero");

const Routes = express.Router();

Routes.get("/api/superhero/:id", superHeroApi.gethero);
Routes.get("/api/superhero/search/:name", superHeroApi.searchHero);

module.exports = Routes;
