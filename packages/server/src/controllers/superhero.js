const axios = require("axios");

baseUrl = "http://superheroapi.com/api/1932044400289905";

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
