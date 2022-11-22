import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Tab from "../../components/tab";
import { transformObjectProps } from "../../utils/transform-object-props";
import * as S from "./styles";
import { getHeroById, tableData } from "./utils";

const HeroPage: React.FC = () => {
  const [loadingHero, setLoadingHero] = useState(false);
  const [hero, setHero] = useState<Superhero.HeroType>();
  const { heroId } = useParams();

  const handleGetHeroById = async () => {
    setLoadingHero(true);

    try {
      const id = heroId as string;

      const heroData = transformObjectProps(await getHeroById(id));

      setHero(heroData as Superhero.HeroType);
    } catch (err: any) {
      toast.error(`Error: ${err.message}`);
    }

    setLoadingHero(false);
  };

  const handleGetHeroByIdPersist = useCallback(
    () => handleGetHeroById(),
    [heroId]
  );

  useEffect(() => {
    handleGetHeroByIdPersist();
  }, []);

  return (
    <S.Wrapper>
      {loadingHero ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <S.Left>
            <strong>{hero?.name}</strong>
            <S.Image src={hero?.image.url} alt="hero-image" />
          </S.Left>
          <S.Right>
            <Tab data={tableData(hero)} />
          </S.Right>
        </>
      )}
    </S.Wrapper>
  );
};

export default HeroPage;
