import axios from "axios";

const apiGithub = axios.create({
  baseURL: "https://akabab.github.io/superhero-api/api",
});

export default apiGithub;
