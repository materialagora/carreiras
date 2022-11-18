import { Link } from "react-router-dom";
import * as S from "./styles";

type ModalHeroSearchProps = {
  heros: Superhero.HeroType[] | undefined;
};

const ModalHeroSearch: React.FC<ModalHeroSearchProps> = ({ heros }) => {
  return (
    <S.Wrapper>
      <strong>Results: </strong>

      {heros?.map((hero) => (
        <Link key={hero.id} to={`/hero/${hero.id}`}>
          <S.Item>
            <strong>{hero.name}</strong>
          </S.Item>
        </Link>
      )) || <strong>Hero not found</strong>}
    </S.Wrapper>
  );
};

export default ModalHeroSearch;
