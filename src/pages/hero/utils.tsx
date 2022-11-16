import { TabDataType } from "../../components/tab";
import api from "../../services/api";

export const getHeroById = async (id: string) => {
  const result = await api.get(`/${id}`);

  if (result.data) {
    return result.data;
  }

  return [];
};

export const TabData: TabDataType[] = [
  {
    title: "appearance",
    children: <h1>Appearance</h1>,
  },
  {
    title: "biography",
    children: <h1>Biography</h1>,
  },
  {
    title: "appearance",
    children: <h1>Appearance</h1>,
  },
  {
    title: "powerstats",
    children: <h1>Powerstats</h1>,
  },
  {
    title: "work",
    children: <h1>Work</h1>,
  },
  {
    title: "connections",
    children: <h1>Connections</h1>,
  },
];
