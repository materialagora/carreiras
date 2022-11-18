import { Link } from "react-router-dom";
import * as S from "./styles";

type ModalHeroSearchProps = {
  heros: Superhero.HeroType[] | undefined;
  isLoading: boolean;
  type?: "redirect" | "search";
};

const ModalHeroSearch: React.FC<ModalHeroSearchProps> = ({
  heros,
  isLoading,
  type = "redirect",
}) => {
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
              <S.Item>
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
