import api from "../../services/api";
import apiGithub from "../../services/githubApi";

export const getAllHeros = async (): Promise<Superhero.GithubHeroType[]> => {
  const result = await apiGithub.get("/all.json");

  if (result.data) {
    return result.data;
  }

  return [];
};

export const getHerosByName = async (
  name: string
): Promise<API.SearchHeroResponse | null> => {
  const result = await api.get(`/search/${name}`);

  if (result.data) {
    return result.data;
  }

  return null;
};
