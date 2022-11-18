import { TabDataType } from "../../components/tab";
import api from "../../services/api";
import Appearance from "./components/appearance";
import Biography from "./components/biography";

export const getHeroById = async (
  id: string
): Promise<Superhero.HeroType | null> => {
  const result = await api.get(`/${id}`);

  if (result.data) {
    return result.data;
  }

  return null;
};

export const tableData = (
  data: Superhero.HeroType | undefined
): TabDataType[] => [
  {
    title: "appearance",
    children: <Appearance data={data?.appearance} />,
  },
  {
    title: "biography",
    children: <Biography data={data?.biography} />,
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
