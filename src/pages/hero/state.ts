import { useParams } from "react-router-dom";

export const useHeroState = () => {
  const { heroId } = useParams();

  return {
    heroId,
  };
};
