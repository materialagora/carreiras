import { toast } from "react-toastify";
import { v4 as uudi } from "uuid";

type CreateHeroGroupProps = {
  groupName: string;
  heros: Superhero.HeroType[];
};

export type HeroGroupType = CreateHeroGroupProps & {
  id: string;
  total: number;
};

export const createHeroGroup = ({
  groupName,
  heros,
}: CreateHeroGroupProps): "success" | "error" => {
  const heroGroups = localStorage.getItem("hero-groups");

  if (groupName) {
    const objectToSave = {
      id: uudi(),
      groupName,
      heros,
      total: heros.length,
    };

    if (heroGroups) {
      const heroGroupsParsed = JSON.parse(heroGroups) || [];

      heroGroupsParsed.push(objectToSave);

      localStorage.setItem("hero-groups", JSON.stringify(heroGroupsParsed));

      toast.success("Success: group created");

      return "success";
    }

    localStorage.setItem("hero-groups", JSON.stringify([objectToSave]));

    toast.success("Success: group created");

    return "success";
  } else {
    toast.error("Error: name can not be empty");

    return "error";
  }
};
