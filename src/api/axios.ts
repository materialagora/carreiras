import axios from "axios";

// Set config defaults when creating the instance
export const client = axios.create({
  baseURL: `${process.env.REACT_APP_HERO_API_URL}/${process.env.REACT_APP_HERO_API_TOKEN}`,
});
