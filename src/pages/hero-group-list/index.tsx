import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as HeroAddedInListStyles from "../create-hero-group/components/heros-added-in-list/styles";
import { HeroGroupType } from "../create-hero-group/utils";
import * as S from "./styles";

const HeroGroupList: React.FC = () => {
  const [heroGroupList, setHeroGroupList] = useState<HeroGroupType[]>([]);

  const getHeroGroupList = () => {
    const heroGroup = localStorage.getItem("hero-groups");

    if (heroGroup) {
      const heroGroupParsed = JSON.parse(heroGroup);

      setHeroGroupList(heroGroupParsed);
    }
  };

  const handleRemoveHeroGroup = (id: string) => {
    const newHeroGroupList = heroGroupList.filter(
      (heroGroup) => heroGroup.id !== id
    );

    setHeroGroupList(newHeroGroupList);

    localStorage.setItem("hero-groups", JSON.stringify(newHeroGroupList));
  };

  useEffect(() => {
    getHeroGroupList();
  }, []);

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
            onClick={() => handleRemoveHeroGroup(heroGroup.id)}
          >
            Remove
          </HeroAddedInListStyles.RemoveButton>
        </S.CarHeroGroupWrapper>
      ))}
    </S.Wrapper>
  );
};

export default HeroGroupList;
