import { toast } from "react-toastify";

type CreateHeroGroupType = {
  groupName: string;
  heros: Superhero.HeroType[];
};

export const createHeroGroup = ({ groupName, heros }: CreateHeroGroupType) => {
  const heroGroups = localStorage.getItem("hero-groups");

  if (groupName) {
    const objectToSave = {
      groupName,
      heros,
    };

    if (heroGroups) {
      const heroGroupsParsed = JSON.parse(heroGroups) || [];

      heroGroupsParsed.push(objectToSave);

      localStorage.setItem("hero-groups", JSON.stringify(heroGroupsParsed));

      toast.success("Success: group created");

      return;
    }

    localStorage.setItem("hero-groups", JSON.stringify([objectToSave]));

    toast.success("Success: group created");
  } else {
    toast.error("Error: name can not be empty");
  }
};
