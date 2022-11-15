import axios from "axios";

const api = axios.create({
  baseURL: "https://www.superheroapi.com/api/191028990107521",
});

export default api;
