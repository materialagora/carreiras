import { TabDataType } from "../../components/tab";
import api from "../../services/api";
import Appearance from "./components/appearance";
import Biography from "./components/biography";
import Connections from "./components/connections";
import PowerStats from "./components/powerstats";
import Work from "./components/work";

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
    children: <PowerStats data={data?.powerstats} />,
  },
  {
    title: "work",
    children: <Work data={data?.work} />,
  },
  {
    title: "connections",
    children: <Connections data={data?.connections} />,
  },
];
