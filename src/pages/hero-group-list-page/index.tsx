import { useState } from "react";
import { HeroGroupType } from "../create-hero-group-page/utils";
import HeroGroupList from "./components/hero-group-list";

const HeroGroupListPage: React.FC = () => {
  const [heroGroupList, setHeroGroupList] = useState<HeroGroupType[]>(() => {
    const heroGroup = localStorage.getItem("hero-groups");

    return heroGroup ? JSON.parse(heroGroup) : [];
  });

  const handleRemoveHeroGroup = (id: string) => {
    const newHeroGroupList = heroGroupList.filter(
      (heroGroup) => heroGroup.id !== id
    );

    localStorage.setItem("hero-groups", JSON.stringify(newHeroGroupList));

    setHeroGroupList(newHeroGroupList);
  };

  return (
    <HeroGroupList
      heroGroupList={heroGroupList}
      onRemoveHeroGroup={handleRemoveHeroGroup}
    />
  );
};

export default HeroGroupListPage;
