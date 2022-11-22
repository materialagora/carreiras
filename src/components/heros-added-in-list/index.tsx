import { useAppDispatch } from "../../hooks/use-redux";
import * as HomeStyles from "../../pages/home-page/styles";
import { removeHero } from "../../store/create-hero-group";
import CardHero from "../card-hero";
import * as S from "./styles";

type HerosAddedInListProps = {
  heros: Superhero.HeroType[];
};

const HerosAddedInList: React.FC<HerosAddedInListProps> = ({ heros }) => {
  const dispatch = useAppDispatch();

  const handleRemoveHeroInList = (id: string) => {
    dispatch(removeHero(id));
  };

  return (
    <HomeStyles.Cards>
      {heros.map((hero) => (
        <S.CardWrapper key={hero.id}>
          <S.RemoveButton onClick={() => handleRemoveHeroInList(hero.id)}>
            Remove
          </S.RemoveButton>
          <CardHero hero={hero} />
        </S.CardWrapper>
      ))}
    </HomeStyles.Cards>
  );
};

export default HerosAddedInList;
