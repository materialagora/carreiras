import axios from "axios";

const api = axios.create({
  baseURL: "https://www.superheroapi.com/api.php/191028990107521",
});

export default api;
