import axios from "axios";

export const baseURL = "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/2104169536388776";

export const superHeroAPI = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
