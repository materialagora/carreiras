import CardHero from "../../../../components/card-hero";
import { useAppDispatch, useAppSelector } from "../../../../hooks/use-redux";
import { removeHero } from "../../../../store/create-hero-group";
import * as HomeStyles from "../../../home/styles";
import * as S from "./styles";

const HerosAddedInList: React.FC = () => {
  const { heros } = useAppSelector((state) => state.heros);
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
