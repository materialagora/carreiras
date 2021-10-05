import axios from "axios";

export const baseURL = "http://localhost:4000";

export const superHeroAPI = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
