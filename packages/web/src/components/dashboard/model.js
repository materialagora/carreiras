import axios from "axios";

import dashboardStore from "../../store/dashboard";

const baseUrl = "http://superheroapi.com/api/1932044400289905";

export function getHeroes() {
  const heroesList = [];
  axios
    .get(`${baseUrl}/346`)
    .then((res) => heroesList.push(res.data))
    .catch((err) => console.log(err));
  console.log(heroesList);
}
