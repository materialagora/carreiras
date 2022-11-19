import { Link } from "react-router-dom";
import { transformObjectProps } from "../../utils/transform-object-props";
import * as S from "./styles";

type ModalHeroSearchProps = {
  heros: Superhero.HeroType[] | undefined;
  isLoading: boolean;
  type?: "redirect" | "search";
  getHeroInfo?: (hero: Superhero.HeroType) => void;
};

const ModalHeroSearch: React.FC<ModalHeroSearchProps> = ({
  heros,
  isLoading,
  type = "redirect",
  getHeroInfo,
}) => {
  const handleOnItemClick = (heroInfo: Superhero.HeroType) => {
    if (getHeroInfo) {
      const updatedProps = transformObjectProps(heroInfo);

      getHeroInfo(updatedProps as Superhero.HeroType);
    }
  };

  return (
    <S.Wrapper>
      <strong>Results: </strong>

      {isLoading ? (
        <h2>Loading ...</h2>
      ) : (
        heros?.map((hero) => (
          <>
            {type === "redirect" ? (
              <Link key={hero.id} to={`/hero/${hero.id}`}>
                <S.Item>
                  <strong>{hero.name}</strong>
                </S.Item>
              </Link>
            ) : (
              <S.Item key={hero.id} onClick={() => handleOnItemClick(hero)}>
                <strong>{hero.name}</strong>
              </S.Item>
            )}
          </>
        )) || <strong>Hero not found</strong>
      )}
    </S.Wrapper>
  );
};

export default ModalHeroSearch;
