const axios = require("axios");

const apiToken = process.env.SUPERHEROAPI_TOKEN

const baseUrl = "http://superheroapi.com/api/" + apiToken;

function gethero(req, res) {
  axios.default
    .get(`${baseUrl}/${req.params.id}`)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => res.send(err));
}

function searchHero(req, res) {
  axios.default
    .get(`${baseUrl}/search/${req.params.name}`)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => res.send(err));
}

module.exports = { gethero, searchHero };
