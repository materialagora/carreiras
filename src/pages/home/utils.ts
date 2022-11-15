import apiGithub from "../../services/githubApi";

export const getAllHeros = async () => {
  const result = await apiGithub.get("/all.json");

  if (result.data) {
    return result.data;
  }

  return [];
};
