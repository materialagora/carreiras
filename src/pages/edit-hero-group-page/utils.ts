import { toast } from "react-toastify";
import { HeroGroupType } from "../create-hero-group-page/utils";

type EditHeroGroupProps = {
  id: string;
  groupName: string;
  heros: Superhero.HeroType[];
};

export const editHeroGroup = ({
  id,
  groupName,
  heros,
}: EditHeroGroupProps): "success" | "error" => {
  const heroGroups = localStorage.getItem("hero-groups") || "{[]}";

  if (groupName) {
    const objectToSave = {
      id,
      groupName,
      heros,
      total: heros.length,
    };

    const heroGroupsParsed = JSON.parse(heroGroups) as HeroGroupType[];
    const newHeroGroupsParsed = heroGroupsParsed.map((heroGroup) =>
      heroGroup.id === id ? objectToSave : heroGroup
    );

    localStorage.setItem("hero-groups", JSON.stringify(newHeroGroupsParsed));

    toast.success("Success: group edited");

    return "success";
  } else {
    toast.error("Error: name can not be empty");

    return "error";
  }
};

export const getHeroGroupInfo = (id: string): HeroGroupType | undefined => {
  const heroGroups = localStorage.getItem("hero-groups");

  if (heroGroups) {
    const heroGroupsParsed = JSON.parse(heroGroups) as HeroGroupType[];

    const heroGroupFound = heroGroupsParsed.find(
      (heroGroup) => heroGroup.id === id
    );

    return heroGroupFound;
  }

  return undefined;
};
