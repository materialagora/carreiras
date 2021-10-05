import axios from "axios";

export const baseURL = "https://superheroapi.com/api/2104169536388776";

export const superHeroAPI = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
