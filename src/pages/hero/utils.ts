import api from "../../services/api";

export const getHeroById = async (id: string) => {
  const result = await api.get(`/${id}`);

  if (result.data) {
    return result.data;
  }

  return [];
};
