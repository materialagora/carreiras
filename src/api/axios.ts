import axios from "axios";
import { BASE_URL } from "utils/constants";

// Set config defaults when creating the instance
export const client = axios.create({
  baseURL: BASE_URL,
});
