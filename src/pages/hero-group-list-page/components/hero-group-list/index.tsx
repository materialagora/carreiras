import { Link } from "react-router-dom";
import * as HeroAddedInListStyles from "../../../../components/heros-added-in-list/styles";
import { HeroGroupType } from "../../../create-hero-group-page/utils";
import * as S from "../../styles";

type HeroGroupListProps = {
  heroGroupList: HeroGroupType[];
  onRemoveHeroGroup: (id: string) => void;
};

const HeroGroupList: React.FC<HeroGroupListProps> = ({
  heroGroupList,
  onRemoveHeroGroup,
}) => {
  return (
    <S.Wrapper>
      {heroGroupList.map((heroGroup) => (
        <S.CarHeroGroupWrapper key={heroGroup.id}>
          <Link key={heroGroup.id} to={`/hero-group/list/${heroGroup.id}`}>
            <S.CarHeroGroup>
              <strong>{heroGroup.groupName}</strong>

              <S.CarHeroGroupFooter>
                <span>Total: </span>
                <h1>{heroGroup.total || heroGroup.heros.length}</h1>
              </S.CarHeroGroupFooter>
            </S.CarHeroGroup>
          </Link>

          <HeroAddedInListStyles.RemoveButton
            onClick={() => onRemoveHeroGroup(heroGroup.id)}
          >
            Remove
          </HeroAddedInListStyles.RemoveButton>
        </S.CarHeroGroupWrapper>
      ))}
    </S.Wrapper>
  );
};

export default HeroGroupList;
