import axios from "axios";

const apiGithub = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_URL,
});

export default apiGithub;
