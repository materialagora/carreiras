declare namespace Superhero {
  type HeroType = {
    response: string;
    id: string;
    name: string;
    powerstats: PowerStatsType;
    biography: BiographyType;
    appearance: AppearanceType;
    work: WorkType;
    connections: ConnectionsType;
    image: ImageType;
  };

  type PowerStatsType = {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };

  type BiographyType = {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
  };

  type AppearanceType = {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
  };

  type WorkType = {
    occupation: string;
    base: string;
  };

  type ConnectionsType = {
    groupAffiliation: string;
    relatives: string;
  };

  type ImageType = {
    url: string;
  };
}
